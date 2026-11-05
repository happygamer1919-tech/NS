import { site } from "./content";

const b = site.business;

export function whatsappUrl(serviceName?: string): string {
  const text = site.booking.whatsappMessage.replace(
    "{servico}",
    serviceName ?? site.booking.whatsappGeneric,
  );
  return `https://wa.me/${b.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const telUrl = `tel:${b.phone}`;
export const mapsUrl = b.mapsUrl;
export const instagramUrl = b.instagramUrl;

export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
