import type { Metadata } from "next";
import { site, isMissing } from "@/lib/content";
import { Fill } from "@/components/Fill";
import { PageHeader, Section } from "@/components/ui";
import { StarIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Avaliações",
  description: "5,0 no Google. Leia as opiniões reais das clientes da Veronica Miron em Linda-a-Velha.",
  alternates: { canonical: "/avaliacoes" },
};

export default function Page() {
  const r = site.reviews;
  const url = site.business.googleProfileUrl;
  const items = r.items as { author: string; text: string }[];
  return (
    <>
      <PageHeader eyebrow="Avaliações" title={r.title} />
      <Section className="!pt-0">
        <div className="rounded-3xl bg-linen p-8">
          <p className="flex items-center gap-3">
            <span className="font-serif text-6xl font-semibold">{site.business.googleRating}</span>
            <span className="flex text-clay"><StarIcon className="h-6 w-6" /><StarIcon className="h-6 w-6" /><StarIcon className="h-6 w-6" /><StarIcon className="h-6 w-6" /><StarIcon className="h-6 w-6" /></span>
          </p>
          <p className="mt-3 text-lg">{r.text}</p>
          {isMissing(url) ? (
            <p className="mt-4">Link do perfil Google: <Fill text={url} /></p>
          ) : (
            <a href={url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex h-12 items-center rounded-full bg-clay px-6 font-semibold text-white">Ver avaliações no Google</a>
          )}
        </div>
        {items.length > 0 && (
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {items.map((i) => (
              <li key={i.author} className="rounded-2xl border border-line p-6">
                <blockquote>{i.text}</blockquote>
                <p className="mt-3 text-sm text-muted">{i.author}, Google</p>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
