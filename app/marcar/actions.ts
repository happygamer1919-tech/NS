"use server";

import { webhookAdapter } from "@/lib/booking";
import type { BookingResult } from "@/lib/booking";

export async function submitBooking(_prev: BookingResult | null, form: FormData): Promise<BookingResult> {
  const get = (k: string) => String(form.get(k) ?? "");
  return webhookAdapter.submit!({
    name: get("name"),
    phone: get("phone"),
    serviceId: get("serviceId"),
    preferredDate: get("preferredDate"),
    preferredTime: get("preferredTime"),
    notes: get("notes"),
    marketingConsent: form.get("marketingConsent") === "on",
  });
}
