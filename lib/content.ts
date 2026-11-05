import data from "@/content/site.json";

export const site = data;
export type Service = (typeof data.services)[number];
export type Hour = (typeof data.hours)[number];

export const FILL = "[PREENCHER";

/** True when a value still has to be confirmed with the client. */
export function isMissing(value: string | null | undefined): boolean {
  return !value || value.includes(FILL);
}

export const fullAddress = (() => {
  const a = data.business.address;
  return `${a.street}, ${a.detail}, ${a.postalCode} ${a.locality}`;
})();
