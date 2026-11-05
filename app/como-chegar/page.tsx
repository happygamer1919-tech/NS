import type { Metadata } from "next";
import { site, fullAddress } from "@/lib/content";
import { mapsUrl, telUrl } from "@/lib/links";
import { Fill } from "@/components/Fill";
import { Hours } from "@/components/Hours";
import { JsonLd, PageHeader, PhotoPlaceholder, Section } from "@/components/ui";
import { breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Como chegar",
  description: "R. Manuel Ferreira 19B, 1.º andar, Gabinete 2, Linda-a-Velha. Entrada, estacionamento e transportes.",
  alternates: { canonical: "/como-chegar" },
};

export default function Page() {
  const f = site.findUs;
  const rows = [
    { t: "Entrada", v: f.entrance },
    { t: "Estacionamento", v: f.parking },
    { t: "Transportes", v: f.transport },
    { t: "Acessibilidade", v: f.accessibility },
  ];
  return (
    <>
      <PageHeader eyebrow="Morada" title={f.title} intro={fullAddress} />
      <Section className="!pt-0">
        <p className="rounded-xl border-l-4 border-clay bg-linen px-4 py-4 text-lg">{f.warning}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center rounded-full bg-ink px-6 font-semibold text-porcelain">Abrir no Google Maps</a>
          <a href={telUrl} className="inline-flex h-12 items-center rounded-full border border-ink/20 px-6 font-semibold">Ligar se não encontrar</a>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <dl className="divide-y divide-line border-y border-line">
            {rows.map((r) => (
              <div key={r.t} className="py-4">
                <dt className="font-semibold">{r.t}</dt>
                <dd className="mt-1 text-muted"><Fill text={r.v} /></dd>
              </div>
            ))}
          </dl>
          <div className="grid gap-4">
            <PhotoPlaceholder label="Fachada do prédio com a porta de entrada" className="aspect-[4/3] w-full" />
            <PhotoPlaceholder label="Porta do Gabinete 2 no 1.º andar" className="aspect-[4/3] w-full" />
          </div>
        </div>
        <h2 className="mt-12 font-serif text-2xl font-semibold">Horário</h2>
        <div className="mt-4 max-w-md"><Hours /></div>
      </Section>
      <JsonLd data={breadcrumb("Como chegar", "/como-chegar")} />
    </>
  );
}
