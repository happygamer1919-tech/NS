import Link from "next/link";
import { NAV } from "./nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-porcelain/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="leading-none">
          <span className="block font-serif text-xl font-semibold tracking-tight">Veronica Miron</span>
          <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-muted">Nail artist · Linda-a-Velha</span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-clay">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/marcar"
            className="hidden rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay-dark md:inline-block"
          >
            Marcar agora
          </Link>
          <details className="group relative lg:hidden">
            <summary className="flex h-11 cursor-pointer list-none items-center rounded-full border border-line px-4 text-sm font-medium">
              Menu
            </summary>
            <nav aria-label="Menu" className="absolute right-0 mt-2 w-56 rounded-2xl border border-line bg-porcelain p-2 shadow-lg">
              <ul>
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="block rounded-xl px-4 py-3 hover:bg-linen">{n.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
