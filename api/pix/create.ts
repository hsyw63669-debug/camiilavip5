import type { VercelRequest, VercelResponse } from "@vercel/node";

const API_BASE = (process.env.ATENASPAY_API_BASE || "https://nexuspag.com").replace(/\/$/, "");

const json = (res: VercelResponse, status: number, body: unknown) =>
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8").json(body);

function text(value: unknown, max = 200): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return json(res, 405, { error: "Método não permitido" });

  const apiKey = process.env.ATENASPAY_API_KEY;
  if (!apiKey) {
    return json(res, 500, { error: "Configure ATENASPAY_API_KEY nas variáveis de ambiente da Vercel." });
  }

  const amount = Number(req.body?.amount);
  if (!Number.isFinite(amount) || amount < 1 || amount > 100000) {
    return json(res, 400, { error: "Valor inválido. Informe um valor entre R$ 1,00 e R$ 100.000,00." });
  }

  const externalId =
    text(req.body?.idempotency_key, 120) ||
    `tiajosy_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  const description = text(req.body?.description, 120) || "Acesso exclusivo - Tia Josy";
  const baseUrl = (
    process.env.APP_BASE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
  ).replace(/\/$/, "");

  const payload = {
    amount: Number(amount.toFixed(2)),
    description,
    external_id: externalId,
    expiration: 1800,
    ...(baseUrl ? { webhook_url: `${baseUrl}/api/webhooks/atenaspay` } : {}),
  };

  try {
    const upstream = await fetch(`${API_BASE}/api/pix/create`, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result: any = await upstream.json().catch(() => ({}));

    if (!upstream.ok || result?.success === false) {
      const message =
        typeof result?.message === "string"
          ? result.message
          : typeof result?.error === "string"
            ? result.error
            : "A AtenasPay recusou a cobrança Pix.";
      return json(res, upstream.status || 502, {
        error: message,
        details: result?.details || result?.errors || undefined,
      });
    }

    const transaction = result?.transaction ?? result?.data?.transaction ?? result?.data ?? result;
    const identifier =
      text(transaction?.id, 200) ||
      text(transaction?.txid, 200) ||
      text(transaction?.external_id, 200) ||
      externalId;
    const pixCode =
      text(transaction?.pix_copia_cola, 10000) ||
      text(transaction?.pix_copy_paste, 10000) ||
      text(transaction?.pix_code, 10000);
    let pixImage = text(transaction?.qr_code_base64, 100000);
    if (pixImage && !pixImage.startsWith("data:") && !pixImage.startsWith("http")) {
      pixImage = `data:image/png;base64,${pixImage}`;
    }

    if (!pixCode) {
      console.error("Resposta inesperada da AtenasPay ao criar Pix", {
        keys: Object.keys(result || {}),
        transactionKeys: Object.keys(transaction || {}),
      });
      return json(res, 502, {
        error: "A AtenasPay respondeu, mas não retornou o código Pix copia e cola.",
      });
    }

    return json(res, 200, {
      identifier,
      pix_code: pixCode,
      pix_image: pixImage,
      payment: {
        id: identifier,
        status: transaction?.status || "pending",
        expires_at: transaction?.expires_at,
      },
    });
  } catch (error) {
    console.error("Erro ao conectar à AtenasPay", error);
    return json(res, 502, {
      error: "Não foi possível conectar à AtenasPay. Tente novamente em instantes.",
    });
  }
}
