import { embedAdapter } from "./embed-adapter";
import { webhookAdapter } from "./webhook-adapter";
import type { BookingProvider } from "./types";

/** BOOKING_ADAPTER=embed (default, adapter A) or form (adapter B, stubbed). */
export function getBookingProvider(): BookingProvider {
  return process.env.BOOKING_ADAPTER === "form" ? webhookAdapter : embedAdapter;
}

export { embedAdapter, webhookAdapter };
export type * from "./types";
