import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Fill } from "@/components/Fill";
import { BookButtons, PageHeader, PhotoPlaceholder, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sobre a Veronica",
  description: "Veronica Miron, nail artist com mais de 10 anos de experiência em Linda-a-Velha. Trabalha sozinha, uma cliente de cada vez.",
  alternates: { canonical: "/sobre" },
};

export default function Page() {
  const a = site.about;
  return (
    <>
      <PageHeader eyebrow="Sobre" title={a.title} />
      <Section className="!pt-0">
        <div className="grid gap-8 md:grid-cols-2">
          <PhotoPlaceholder label="Retrato da Veronica" className="aspect-[4/5] w-full" />
          <div>
            <p className="text-xl">{a.lead}</p>
            {a.body.map((p) => (
              <p key={p} className="mt-4 text-muted"><Fill text={p} /></p>
            ))}
            <h2 className="mt-8 font-serif text-2xl font-semibold">{site.hygiene.title}</h2>
            <p className="mt-3">{site.hygiene.text}</p>
            <p className="mt-2 text-muted"><Fill text={site.hygiene.steps} /></p>
            <BookButtons className="mt-8" />
          </div>
        </div>
      </Section>
    </>
  );
}
