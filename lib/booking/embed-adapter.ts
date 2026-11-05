import type { BookingProvider } from "./types";

/**
 * Adapter A: embeds an external booking page (Fresha, Booksy, Treatwell, Calendly...).
 * Reads BOOKING_EMBED_URL at build time. Without it, /marcar falls back to WhatsApp and phone.
 */
export const embedAdapter: BookingProvider = {
  id: "embed",
  embedUrl() {
    const raw = process.env.BOOKING_EMBED_URL?.trim();
    if (!raw) return null;
    try {
      const u = new URL(raw);
      return u.protocol === "https:" ? u.toString() : null;
    } catch {
      return null;
    }
  },
  mode() {
    return this.embedUrl?.() ? "embed" : "fallback";
  },
};
