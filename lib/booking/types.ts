/**
 * BookingProvider: one interface, several adapters.
 * Pages only talk to this interface, so changing the booking tool is a config change.
 */
export type BookingMode = "embed" | "form" | "fallback";

export interface BookingRequest {
  name: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  /** Separate, unticked by default. Marketing consent is never implied by booking. */
  marketingConsent: boolean;
}

export interface BookingResult {
  ok: boolean;
  /** true when nothing left this server (stub). */
  stub: boolean;
  message: string;
}

export interface BookingProvider {
  id: "embed" | "webhook";
  /** What the /marcar page should render. */
  mode(): BookingMode;
  /** Adapter A: URL to embed. */
  embedUrl?(): string | null;
  /** Adapter B: handle a native form submission. */
  submit?(req: BookingRequest): Promise<BookingResult>;
}
