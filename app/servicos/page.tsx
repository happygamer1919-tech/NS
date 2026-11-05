import type { Metadata } from "next";
import { site } from "@/lib/content";
import { BookButtons, JsonLd, PageHeader, Section, ServiceList } from "@/components/ui";
import { breadcrumb } from "@/lib/schema";
import { Fill } from "@/components/Fill";

export const metadata: Metadata = {
  title: "Serviços e preços",
  description: "Manicure, pedicure sem água, verniz gel e unhas de gel em Linda-a-Velha, Oeiras. Preço e duração de cada serviço.",
  alternates: { canonical: "/servicos" },
};

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Serviços" title="Preços e duração" intro="Toque em Marcar ao lado do serviço e a mensagem para a Veronica fica pronta no WhatsApp." />
      <Section className="!pt-0">
        <ServiceList level={2} />
        <p className="mt-6 text-sm text-muted"><Fill text={site.booking.policy} /></p>
        <BookButtons className="mt-8" />
      </Section>
      <JsonLd data={breadcrumb("Serviços", "/servicos")} />
    </>
  );
}
