import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Formulário de marcação (pré-visualização)",
  robots: { index: false, follow: false },
};

/** Review page for adapter B. Stubbed: submissions are validated and never sent. */
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Pré-visualização" title="Formulário de marcação" intro="Versão de teste do formulário. Os pedidos são validados mas não são enviados a ninguém." />
      <Section className="!pt-0"><BookingForm /></Section>
    </>
  );
}
