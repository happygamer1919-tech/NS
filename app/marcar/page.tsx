import type { Metadata } from "next";
import { site } from "@/lib/content";
import { getBookingProvider } from "@/lib/booking";
import { Fill } from "@/components/Fill";
import { PageHeader, Section } from "@/components/ui";
import { QuickBook } from "@/components/QuickBook";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Marcar",
  description: "Marque manicure, pedicure, verniz gel ou unhas de gel em Linda-a-Velha em menos de um minuto.",
  alternates: { canonical: "/marcar" },
};

export default function Page() {
  const provider = getBookingProvider();
  const mode = provider.mode();
  const embed = provider.embedUrl?.() ?? null;
  return (
    <>
      <PageHeader eyebrow="Marcar" title={site.booking.headline} intro={site.booking.intro} />
      <Section className="!pt-0">
        <div id="agenda">
          {mode === "embed" && embed && (
            <div className="mb-10">
              <iframe src={embed} title="Agenda online" className="h-[80vh] min-h-[600px] w-full rounded-2xl border border-line bg-white" />
            </div>
          )}
          {mode === "form" ? <BookingForm /> : <QuickBook />}
        </div>
        <p className="mt-8 text-sm text-muted"><Fill text={site.booking.policy} /></p>
      </Section>
    </>
  );
}
