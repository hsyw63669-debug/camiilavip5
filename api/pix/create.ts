import type { VercelRequest, VercelResponse } from "@vercel/node";

const API_BASE = "https://tichupay.com";
const json = (res: VercelResponse, status: number, body: unknown) =>
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8").json(body);
function text(value: unknown, max = 200): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return json(res, 405, { error: "Método não permitido" });
  const apiKey = process.env.TICHUPAY_API_KEY;
  if (!apiKey) return json(res, 500, { error: "Configure TICHUPAY_API_KEY nas variáveis de ambiente da Vercel." });

  const amount = Number(req.body?.amount);
  if (!Number.isFinite(amount) || amount < 1 || amount > 100000) {
    return json(res, 400, { error: "Valor inválido. Informe um valor entre R$ 1,00 e R$ 100.000,00." });
  }
  const externalId = text(req.body?.idempotency_key, 120) || `michelle_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  const description = text(req.body?.description, 120) || "Acesso exclusivo - Anazinha do Mal";
  // Só envia webhook se APP_BASE_URL (endereço real do site) estiver configurada.
  const baseUrl = (process.env.APP_BASE_URL || "").replace(/\/$/, "");
  const payload = {
    amount: Number(amount.toFixed(2)),
    description,
    external_id: externalId,
    expiration: 1800,
    ...(baseUrl ? { webhook_url: `${baseUrl}/api/webhooks/atenaspay` } : {}),
  };

  try {
    // Tenta até 3 vezes (1 + 2 repetições) só quando o gateway está fora do ar (502/503/504).
    let upstream: Response | null = null;
    let raw = "";
    for (let attempt = 0; attempt < 3; attempt++) {
      upstream = await fetch(`${API_BASE}/api/pix/create`, {
        method: "POST",
        headers: { "x-api-key": apiKey, "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      raw = await upstream.text().catch(() => "");
      if (![502, 503, 504].includes(upstream.status)) break;
      console.error("Gateway indisponível, tentativa " + (attempt + 1), { status: upstream.status });
      if (attempt < 2) await sleep(1200);
    }
    let result: any = {};
    try { result = raw ? JSON.parse(raw) : {}; } catch { result = {}; }

    if (!upstream || !upstream.ok || result?.success === false) {
      const status = upstream?.status || 502;
      // Detalhe técnico só nos Logs da Vercel (o cliente não vê).
      console.error("TichuPay recusou", { status, body: raw.slice(0, 1500), apiBase: API_BASE });
      if ([502, 503, 504].includes(status)) {
        return json(res, 503, { error: "O pagamento está temporariamente indisponível. Aguarde um minuto e tente novamente." });
      }
      const m = result?.message ?? result?.error?.message ?? result?.error ?? result?.detail;
      const message = typeof m === "string" && m ? m : "A TichuPay recusou a cobrança Pix.";
      return json(res, status, { error: message, details: result?.details || result?.errors || undefined });
    }

    const transaction = result?.transaction ?? result?.data?.transaction ?? result?.data ?? result;
    const identifier = text(transaction?.id, 200) || text(transaction?.txid, 200) || text(transaction?.external_id, 200) || externalId;
    const pixCode = text(transaction?.pix_copia_cola, 10000) || text(transaction?.pix_copy_paste, 10000) || text(transaction?.pix_code, 10000);
    let pixImage = text(transaction?.qr_code_base64, 100000);
    if (pixImage && !pixImage.startsWith("data:") && !pixImage.startsWith("http")) pixImage = `data:image/png;base64,${pixImage}`;
    if (!pixCode) {
      console.error("Resposta inesperada da TichuPay ao criar Pix", { keys: Object.keys(result || {}), transactionKeys: Object.keys(transaction || {}) });
      return json(res, 502, { error: "A TichuPay respondeu, mas não retornou o código Pix copia e cola." });
    }
    return json(res, 200, {
      identifier,
      pix_code: pixCode,
      pix_image: pixImage,
      payment: { id: identifier, status: transaction?.status || "pending", expires_at: transaction?.expires_at },
    });
  } catch (error) {
    console.error("Erro ao conectar à TichuPay", error);
    return json(res, 502, { error: "Não foi possível conectar à TichuPay. Tente novamente em instantes." });
  }
}
