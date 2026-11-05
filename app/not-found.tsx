import { BookButtons, PageHeader, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHeader title="Página não encontrada" intro="Esta página não existe. Pode marcar diretamente ou voltar ao início." />
      <Section className="!pt-0"><BookButtons /></Section>
    </>
  );
}
