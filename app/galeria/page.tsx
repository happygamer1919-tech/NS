import type { Metadata } from "next";
import { PageHeader, PhotoPlaceholder, Section } from "@/components/ui";
import { InstagramIcon } from "@/components/Icons";
import { site } from "@/lib/content";
import { instagramUrl } from "@/lib/links";

export const metadata: Metadata = {
  title: "Galeria",
  description: "Trabalhos reais da Veronica Miron: manicure, verniz gel e unhas de gel em Linda-a-Velha.",
  alternates: { canonical: "/galeria" },
};

const slots = ["Manicure natural", "Verniz gel", "Unhas de gel", "Pedicure sem água", "Detalhe de cutículas", "Antes e depois"];

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Galeria" title="Trabalhos reais" intro="Só fotografias de trabalhos feitos pela Veronica. Enquanto a galeria é preparada, veja os trabalhos mais recentes no Instagram." />
      <Section className="!pt-0">
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-clay px-6 font-semibold text-white hover:bg-clay-dark">
          <InstagramIcon /> Ver @{site.business.handle}
        </a>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {slots.map((s) => (
            <li key={s}><PhotoPlaceholder label={s} className="aspect-square w-full" /></li>
          ))}
        </ul>
      </Section>
    </>
  );
}
