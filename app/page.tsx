import Link from "next/link";
import { site, fullAddress } from "@/lib/content";
import { mapsUrl } from "@/lib/links";
import { Fill } from "@/components/Fill";
import { Hours } from "@/components/Hours";
import { BookButtons, FaqList, H2, PhotoPlaceholder, Section, ServiceList } from "@/components/ui";
import { ClockIcon, EuroIcon, PinIcon, ShieldIcon, StarIcon } from "@/components/Icons";

export default function Home() {
  const b = site.business;
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pt-8 pb-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-16">
        <div>
          <a href={b.googleProfileUrl.startsWith("http") ? b.googleProfileUrl : "/avaliacoes"} className="inline-flex items-center gap-1.5 rounded-full bg-linen px-3 py-1.5 text-sm">
            <span className="flex text-clay"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>
            <span className="font-semibold">{b.googleRating}</span> no Google
          </a>
          <h1 className="mt-5 font-serif text-[2.6rem] font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Unhas cuidadas, sem pressa, em <span className="whitespace-nowrap">Linda-a-Velha.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            {b.owner}, nail artist com mais de 10 anos de experiência. Manicure, pedicure sem água, verniz gel e unhas de gel, com a unha natural sempre em primeiro lugar.
          </p>
          <BookButtons className="mt-6" />
        </div>
        <PhotoPlaceholder label="Mãos da Veronica a trabalhar, formato vertical 4:5" className="aspect-[4/5] w-full" />
      </section>

      <Section className="!py-4">
        <ul className="grid gap-3 sm:grid-cols-3">
          <li>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex h-full gap-3 rounded-2xl border border-line bg-linen/60 p-4 hover:border-clay">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
              <span>
                <span className="block font-semibold">Onde</span>
                <span className="text-sm text-muted">{b.address.street}, <strong className="text-ink">{b.address.detail}</strong>, {b.address.locality}</span>
              </span>
            </a>
          </li>
          <li>
            <Link href="/servicos" className="flex h-full gap-3 rounded-2xl border border-line bg-linen/60 p-4 hover:border-clay">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
              <span>
                <span className="block font-semibold">Quanto tempo</span>
                <span className="text-sm text-muted">Duração de cada serviço na lista abaixo</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/servicos" className="flex h-full gap-3 rounded-2xl border border-line bg-linen/60 p-4 hover:border-clay">
              <EuroIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
              <span>
                <span className="block font-semibold">Quanto custa</span>
                <span className="text-sm text-muted">Preço de cada serviço na lista abaixo</span>
              </span>
            </Link>
          </li>
        </ul>
      </Section>

      <Section>
        <div className="flex items-end justify-between gap-4">
          <H2>Serviços</H2>
          <Link href="/servicos" className="text-sm font-semibold text-clay underline underline-offset-4">Ver detalhes</Link>
        </div>
        <div className="mt-6"><ServiceList /></div>
      </Section>

      <Section>
        <div className="grid gap-6 rounded-3xl bg-linen p-6 md:grid-cols-[auto_1fr] md:p-10">
          <ShieldIcon className="h-10 w-10 text-sage" />
          <div>
            <H2>{site.hygiene.title}</H2>
            <p className="mt-3 max-w-2xl text-lg">{site.hygiene.text}</p>
            <p className="mt-3 text-muted"><Fill text={site.hygiene.steps} /></p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <PhotoPlaceholder label="Retrato da Veronica no estúdio" className="aspect-square w-full" />
          <div>
            <H2>{site.about.title}</H2>
            <p className="mt-4 text-lg">{site.about.lead}</p>
            <Link href="/sobre" className="mt-4 inline-block font-semibold text-clay underline underline-offset-4">Conhecer a Veronica</Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <H2>Como chegar</H2>
            <p className="mt-4 text-lg">{fullAddress}</p>
            <p className="mt-3 rounded-xl border-l-4 border-clay bg-linen px-4 py-3">{site.findUs.warning}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center rounded-full bg-ink px-5 font-semibold text-porcelain">Abrir no Google Maps</a>
              <Link href="/como-chegar" className="inline-flex h-12 items-center rounded-full border border-ink/20 px-5 font-semibold">Entrada e estacionamento</Link>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold">Horário</h2>
            <div className="mt-4"><Hours /></div>
          </div>
        </div>
      </Section>

      <Section>
        <H2>Perguntas frequentes</H2>
        <div className="mt-6"><FaqList items={site.faq.slice(0, 4)} /></div>
        <Link href="/faq" className="mt-4 inline-block font-semibold text-clay underline underline-offset-4">Todas as perguntas</Link>
      </Section>

      <Section>
        <div className="rounded-3xl bg-ink p-8 text-porcelain md:p-12">
          <p className="font-serif text-3xl font-semibold">{site.booking.headline}</p>
          <p className="mt-3 text-porcelain/80">{site.booking.intro}</p>
          <Link href="/marcar" className="mt-6 inline-flex h-12 items-center rounded-full bg-porcelain px-6 font-semibold text-ink">Marcar agora</Link>
        </div>
      </Section>
    </>
  );
}
