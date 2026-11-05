import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Fill } from "@/components/Fill";
import { PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Política de Privacidade e Cookies",
  description: "Como são tratados os seus dados pessoais (RGPD) e que cookies são usados.",
  alternates: { canonical: "/privacidade" },
};

export default function Page() {
  const l = site.legal;
  const b = site.business;
  const H = ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h2 id={id} className="mt-10 font-serif text-2xl font-semibold">{children}</h2>
  );
  return (
    <>
      <PageHeader eyebrow="Legal" title="Política de Privacidade e Cookies" />
      <Section className="!pt-0">
        <div className="max-w-3xl space-y-4 leading-relaxed">
          <p className="text-sm text-muted">Última atualização: <Fill text={l.privacyUpdated} /></p>

          <H>1. Responsável pelo tratamento</H>
          <p>{l.controllerName}, NIF <Fill text={l.nif} />, {b.address.street}, {b.address.detail}, {b.address.postalCode} {b.address.locality}. Contacto: {b.phoneDisplay}, email <Fill text={b.email} />.</p>

          <H>2. Que dados tratamos e para quê</H>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Marcações</strong>: nome, telemóvel, serviço, dia e hora pretendidos e notas que nos envie. Finalidade: gerir a sua marcação. Fundamento: diligências pré-contratuais e execução do serviço (art. 6.º, n.º 1, alínea b) do RGPD).</li>
            <li><strong>Lembretes de manutenção e novidades por WhatsApp</strong>: só com o seu consentimento expresso, dado numa caixa própria que não vem marcada. Pode retirar o consentimento a qualquer momento respondendo “parar” ou contactando-nos (art. 6.º, n.º 1, alínea a)).</li>
            <li><strong>Mensagens</strong>: quando nos contacta por WhatsApp, telefone ou Instagram, os dados são tratados nessas plataformas segundo as respetivas políticas.</li>
          </ul>

          <H>3. Durante quanto tempo</H>
          <p>Dados de marcação: <Fill text="[PREENCHER: prazo de conservação, por exemplo 2 anos após a última visita]" />. Consentimento para WhatsApp: até o retirar.</p>

          <H>4. Com quem partilhamos</H>
          <p>Não vendemos dados. Usamos prestadores que tratam dados por nossa conta: alojamento do site (Vercel Inc., com cláusulas contratuais tipo para transferências fora da UE), WhatsApp (Meta) e, quando ativa, a agenda online <Fill text="[PREENCHER: nome da ferramenta de marcações]" />.</p>

          <H>5. Os seus direitos</H>
          <p>Pode pedir acesso, retificação, apagamento, limitação, portabilidade ou opor-se ao tratamento, contactando {b.phoneDisplay}. Tem também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (<a className="underline" href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer">www.cnpd.pt</a>).</p>

          <H id="cookies">6. Cookies</H>
          <p>Este site não usa cookies de publicidade nem de estatística. Guardamos apenas, no seu navegador, a indicação de que fechou o aviso de cookies. Se a agenda online estiver integrada na página Marcar, esse serviço externo pode usar cookies estritamente necessários ao seu funcionamento. As ligações para Google Maps, WhatsApp e Instagram abrem esses serviços, que têm as suas próprias políticas.</p>

          <H>7. Livro de Reclamações</H>
          <p>Disponível em formato eletrónico em <a className="underline" href={l.complaintsBookUrl} target="_blank" rel="noopener noreferrer">livroreclamacoes.pt</a>.</p>
        </div>
      </Section>
    </>
  );
}
