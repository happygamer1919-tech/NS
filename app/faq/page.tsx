import type { Metadata } from "next";
import { BookButtons, FaqList, JsonLd, PageHeader, Section } from "@/components/ui";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: "Morada, duração dos serviços, preços, marcações e pedicure sem água. Respostas rápidas.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Perguntas" title="Perguntas frequentes" />
      <Section className="!pt-0">
        <FaqList />
        <p className="mt-8 text-lg">Ainda tem dúvidas? Pergunte diretamente.</p>
        <BookButtons className="mt-4" />
      </Section>
      <JsonLd data={faqSchema()} />
    </>
  );
}
