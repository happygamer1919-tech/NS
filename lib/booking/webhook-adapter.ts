import type { BookingProvider, BookingRequest, BookingResult } from "./types";

/**
 * Adapter B: native form that will POST to BOOKING_WEBHOOK_URL
 * (a Make scenario writes to Google Calendar and sends the WhatsApp confirmation).
 *
 * STUBBED IN THIS BUILD. LIVE_SEND_ENABLED is a code constant on purpose:
 * no env var on a preview can switch live sending on by accident.
 * To go live: set it to true in a reviewed commit, after the Make scenario is tested.
 */
const LIVE_SEND_ENABLED = false;

export function validate(req: BookingRequest): string | null {
  if (req.name.trim().length < 2) return "Indique o seu nome.";
  if (!/^\+?[0-9 ]{9,15}$/.test(req.phone.trim())) return "Indique um telemóvel válido.";
  if (!req.serviceId) return "Escolha um serviço.";
  if (!req.preferredDate) return "Escolha um dia.";
  return null;
}

async function sendLive(req: BookingRequest): Promise<BookingResult> {
  const url = process.env.BOOKING_WEBHOOK_URL;
  if (!url) return { ok: false, stub: false, message: "Webhook não configurado." };
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...req, source: "website", sentAt: new Date().toISOString() }),
  });
  return res.ok
    ? { ok: true, stub: false, message: "Pedido enviado. A Veronica confirma por WhatsApp." }
    : { ok: false, stub: false, message: "Não foi possível enviar. Tente por WhatsApp." };
}

export const webhookAdapter: BookingProvider = {
  id: "webhook",
  mode() {
    return "form";
  },
  async submit(req) {
    const error = validate(req);
    if (error) return { ok: false, stub: !LIVE_SEND_ENABLED, message: error };
    if (!LIVE_SEND_ENABLED) {
      return {
        ok: true,
        stub: true,
        message: "Pré-visualização: o pedido foi validado mas não foi enviado.",
      };
    }
    return sendLive(req);
  },
};
