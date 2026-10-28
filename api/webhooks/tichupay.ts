import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createHmac, timingSafeEqual } from "node:crypto";
export const config = { api: { bodyParser: false } };
async function rawBody(req: VercelRequest): Promise<Buffer> { const chunks: Buffer[] = []; for await (const chunk of req) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)); return Buffer.concat(chunks); }
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });
  try {
    const body = await rawBody(req);
    const secret = process.env.TICHUPAY_WEBHOOK_SECRET;
    const signature = String(req.headers["x-webhook-signature"] || "");
    if (secret) {
      const match = /^(?:t|unix)=(\d+),v1=([a-f0-9]+)$/i.exec(signature);
      if (!match) return res.status(401).json({ error: "Assinatura ausente ou inválida" });
      const timestamp = Number(match[1]);
      if (!Number.isFinite(timestamp) || Math.abs(Date.now() / 1000 - timestamp) > 300) return res.status(401).json({ error: "Evento fora da janela de tolerância" });
      const expected = createHmac("sha256", secret).update(`${match[1]}.`).update(body).digest();
      const received = Buffer.from(match[2], "hex");
      if (received.length !== expected.length || !timingSafeEqual(received, expected)) return res.status(401).json({ error: "Assinatura inválida" });
    }
    const event: any = JSON.parse(body.toString("utf8"));
    console.info("TichuPay webhook recebido", { event: req.headers["x-webhook-event"] || null, id: event?.id || event?.payment_id || event?.external_id || null });
    return res.status(200).json({ received: true });
  } catch { return res.status(400).json({ error: "Corpo do webhook inválido" }); }
}
