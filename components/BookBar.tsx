import Link from "next/link";
import { WhatsAppIcon } from "./Icons";
import { whatsappUrl } from "@/lib/links";

/** Mobile: fixed bottom bar, Book + WhatsApp always 1 tap away. Desktop: floating WhatsApp button. */
export function BookBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-porcelain/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <div className="flex gap-3">
          <Link
            href="/marcar"
            className="flex h-12 flex-1 items-center justify-center rounded-full bg-clay text-base font-semibold text-white active:bg-clay-dark"
          >
            Marcar agora
          </Link>
          <a
            href={whatsappUrl()}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-wa text-white"
            aria-label="Marcar por WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
      <a
        href={whatsappUrl()}
        className="fixed right-6 bottom-6 z-50 hidden h-14 items-center gap-2 rounded-full bg-wa pr-5 pl-4 font-semibold text-white shadow-lg hover:brightness-110 md:flex"
        
      >
        <WhatsAppIcon className="h-7 w-7" />
        WhatsApp
      </a>
    </>
  );
}
