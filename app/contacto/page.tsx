import type { Metadata } from "next";
import { site, fullAddress } from "@/lib/content";
import { instagramUrl, mapsUrl, telUrl, whatsappUrl } from "@/lib/links";
import { Fill } from "@/components/Fill";
import { Hours } from "@/components/Hours";
import { PageHeader, Section } from "@/components/ui";
import { InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contacto",
  description: "WhatsApp, telefone e Instagram da Veronica Miron, nail artist em Linda-a-Velha.",
  alternates: { canonical: "/contacto" },
};

export default function Page() {
  const b = site.business;
  const items = [
    { icon: <WhatsAppIcon className="h-6 w-6 text-wa" />, t: "WhatsApp", v: b.phoneDisplay, href: whatsappUrl() },
    { icon: <PhoneIcon className="h-6 w-6" />, t: "Telefone", v: b.phoneDisplay, href: telUrl },
    { icon: <InstagramIcon className="h-6 w-6" />, t: "Instagram", v: `@${b.handle}`, href: instagramUrl },
    { icon: <PinIcon className="h-6 w-6" />, t: "Morada", v: fullAddress, href: mapsUrl },
  ];
  return (
    <>
      <PageHeader eyebrow="Contacto" title="Fale com a Veronica" intro="A forma mais rápida é o WhatsApp." />
      <Section className="!pt-0">
        <ul className="grid gap-3 md:grid-cols-2">
          {items.map((i) => (
            <li key={i.t}>
              <a href={i.href} {...(i.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex min-h-16 items-center gap-4 rounded-2xl border border-line p-5 hover:border-clay">
                {i.icon}
                <span><span className="block font-semibold">{i.t}</span><span className="text-muted">{i.v}</span></span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-muted">Email: <Fill text={b.email} /></p>
        <h2 className="mt-10 font-serif text-2xl font-semibold">Horário</h2>
        <div className="mt-4 max-w-md"><Hours /></div>
      </Section>
    </>
  );
}
