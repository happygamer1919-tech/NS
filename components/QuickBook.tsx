import { site } from "@/lib/content";
import { whatsappUrl, telUrl, instagramUrl } from "@/lib/links";
import { Fill } from "./Fill";
import { WhatsAppIcon } from "./Icons";

/** Fallback and companion to the embed: one tap per service opens WhatsApp with the message ready. */
export function QuickBook() {
  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold">1. Escolha o serviço</h2>
      <p className="mt-1 text-muted">2. Envie a mensagem no WhatsApp. 3. A Veronica confirma o horário.</p>
      <ul className="mt-5 grid gap-3">
        {site.services.map((s) => (
          <li key={s.id}>
            <a href={whatsappUrl(s.name)} className="flex min-h-16 items-center gap-4 rounded-2xl border border-line bg-white/60 p-4 hover:border-clay">
              <WhatsAppIcon className="h-7 w-7 shrink-0 text-wa" />
              <span className="flex-1">
                <span className="block text-lg font-semibold">{s.name}</span>
                <span className="text-sm text-muted"><Fill text={s.duration} /> · <Fill text={s.price} /></span>
              </span>
              <span aria-hidden className="text-2xl text-clay">›</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-muted">
        Prefere falar? <a href={telUrl} className="font-semibold text-ink underline underline-offset-4">Ligue {site.business.phoneDisplay}</a> ou{" "}
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">escreva no Instagram</a>.
      </p>
    </div>
  );
}
