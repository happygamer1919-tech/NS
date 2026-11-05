import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const paths = ["", "/marcar", "/servicos", "/como-chegar", "/galeria", "/sobre", "/avaliacoes", "/faq", "/contacto", "/privacidade"];
  return paths.map((p, i) => ({
    url: `${base}${p || "/"}`,
    changeFrequency: "monthly",
    priority: i === 0 ? 1 : i < 4 ? 0.8 : 0.5,
  }));
}
