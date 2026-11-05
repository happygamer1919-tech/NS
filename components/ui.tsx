import Link from "next/link";
import { site, isMissing, type Service } from "@/lib/content";
import { whatsappUrl, telUrl } from "@/lib/links";
import { Fill } from "./Fill";
import { WhatsAppIcon, PhoneIcon } from "./Icons";

export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-10 pb-6 md:pt-16">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">{eyebrow}</p>}
      <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{title}</h1>
      {intro && <p className="mt-4 max-w-2xl text-lg text-muted"><Fill text={intro} /></p>}
    </div>
  );
}

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-6xl px-5 py-10 md:py-14 ${className}`}>{children}</section>;
}

export function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return <h2 id={id} className="font-serif text-3xl font-semibold tracking-tight">{children}</h2>;
}

export function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Espaço para fotografia real: ${label}`}
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-muted/40 bg-linen p-6 text-center ${className}`}
    >
      <p className="text-sm text-muted">
        <span className="block font-semibold tracking-wide text-ink">FOTO REAL</span>
        {label}
        <span className="mt-2 block"><mark className="fill">[PREENCHER]</mark></span>
      </p>
    </div>
  );
}

export function ServiceList({ services = site.services, withBook = true, level = 3 }: { services?: Service[]; withBook?: boolean; level?: 2 | 3 }) {
  const Hn = level === 2 ? "h2" : "h3";
  return (
    <ul className="divide-y divide-line border-y border-line">
      {services.map((s) => (
        <li key={s.id} id={s.id} className="py-5">
          <div className="flex items-baseline gap-3">
            <Hn className="font-serif text-xl font-semibold">{s.name}</Hn>
            <span aria-hidden className="flex-1 translate-y-[-0.3em] border-b border-dotted border-muted/50" />
            <p className="font-serif text-lg tabular-nums">
              {isMissing(s.price) ? <Fill text={s.price} /> : s.price}
            </p>
          </div>
          <p className="mt-1 text-muted">{s.summary}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span>
              <span className="text-muted">Duração: </span>
              <Fill text={s.duration} />
            </span>
            {withBook && (
              <a
                href={whatsappUrl(s.name)}
                className="ml-auto inline-flex h-11 items-center rounded-full border border-clay px-4 font-semibold text-clay hover:bg-clay hover:text-white"
              >
                Marcar {s.name.toLowerCase()}
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function BookButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="/marcar" className="inline-flex h-12 items-center rounded-full bg-clay px-6 font-semibold text-white hover:bg-clay-dark">
        Marcar agora
      </Link>
      <a href={whatsappUrl()} className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/20 bg-porcelain px-5 font-semibold hover:border-ink">
        <WhatsAppIcon className="h-5 w-5 text-wa" /> WhatsApp
      </a>
      <a href={telUrl} className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/20 bg-porcelain px-5 font-semibold hover:border-ink">
        <PhoneIcon /> Ligar
      </a>
    </div>
  );
}

export function FaqList({ items = site.faq }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((f) => (
        <details key={f.q} className="group py-1">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-medium">
            {f.q}
            <span aria-hidden className="text-2xl text-clay transition group-open:rotate-45">+</span>
          </summary>
          <p className="pb-4 text-muted"><Fill text={f.a} /></p>
        </details>
      ))}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
