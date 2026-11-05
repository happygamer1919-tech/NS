import { site, isMissing } from "./content";
import { siteUrl } from "./links";
import type { WithContext, NailSalon, FAQPage, BreadcrumbList, DayOfWeek } from "schema-dts";

/** NailSalon JSON-LD. Only facts from content/site.json; unknown values are omitted, never guessed. */
export function salonSchema(): WithContext<NailSalon> {
  const b = site.business;
  const url = siteUrl();
  const hours = site.hours.filter((h) => h.open);
  const groups = new Map<string, string[]>();
  for (const h of hours) {
    const k = `${h.open}-${h.close}`;
    groups.set(k, [...(groups.get(k) ?? []), h.schema]);
  }
  const sameAs = [b.instagramUrl, ...(isMissing(b.googleProfileUrl) ? [] : [b.googleProfileUrl])];
  return {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    "@id": `${url}/#salon`,
    name: b.name,
    alternateName: b.handle,
    description: site.seo.description,
    url,
    image: `${url}/opengraph-image`,
    telephone: b.phone,
    ...(isMissing(b.email) ? {} : { email: b.email }),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${b.address.street}, ${b.address.detail}`,
      postalCode: b.address.postalCode,
      addressLocality: b.address.locality,
      addressRegion: b.address.region,
      addressCountry: b.address.country,
    },
    hasMap: b.mapsUrl,
    areaServed: [b.address.locality, b.address.municipality].map((n) => ({ "@type": "City", name: n })),
    openingHoursSpecification: [...groups.entries()].map(([k, days]) => {
      const [opens, closes] = k.split("-");
      return { "@type": "OpeningHoursSpecification", dayOfWeek: days as DayOfWeek[], opens, closes };
    }),
    sameAs,
    founder: { "@type": "Person", name: b.owner, jobTitle: b.role },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.summary },
        ...(isMissing(s.price) ? {} : { price: s.price.replace(/[^0-9.,]/g, "").replace(",", "."), priceCurrency: "EUR" }),
      })),
    },
  };
}

export function faqSchema(): WithContext<FAQPage> {
  const items = site.faq.filter((f) => !isMissing(f.a));
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumb(name: string, path: string): WithContext<BreadcrumbList> {
  const url = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${url}/` },
      { "@type": "ListItem", position: 2, name, item: `${url}${path}` },
    ],
  };
}
