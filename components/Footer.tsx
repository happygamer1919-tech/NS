import Link from "next/link";
import { site, fullAddress } from "@/lib/content";
import { mapsUrl, telUrl, instagramUrl } from "@/lib/links";
import { Hours } from "./Hours";
import { NAV } from "./nav";

export function Footer() {
  const b = site.business;
  return (
    <footer className="mt-20 border-t border-line bg-linen pb-28 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-semibold">{b.name}</p>
          <p className="mt-3 text-sm text-muted">
            <a href={mapsUrl} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">{fullAddress}</a>
          </p>
          <p className="mt-2 text-sm">
            <a href={telUrl} className="underline underline-offset-4">{b.phoneDisplay}</a>
          </p>
          <p className="mt-2 text-sm">
            <a href={instagramUrl} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">@{b.handle}</a>
          </p>
        </div>
        <div>
          <h2 className="font-serif text-lg font-semibold">Horário</h2>
          <div className="mt-3 max-w-xs"><Hours compact /></div>
        </div>
        <div>
          <h2 className="font-serif text-lg font-semibold">Páginas</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 text-sm">
            <li><Link href="/marcar" className="inline-block py-1.5 font-semibold text-clay">Marcar</Link></li>
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} className="inline-block py-1.5 hover:text-clay">{n.label}</Link></li>
            ))}
            <li><Link href="/privacidade" className="inline-block py-1.5 hover:text-clay">Privacidade e cookies</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-line px-5 pt-6 text-xs text-muted">
        <p>© {new Date().getFullYear()} {site.legal.controllerName}</p>
        <a
          href={site.legal.complaintsBookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-muted/40 bg-porcelain px-3 py-2 font-semibold text-ink"
        >
          Livro de Reclamações Eletrónico
        </a>
      </div>
    </footer>
  );
}
