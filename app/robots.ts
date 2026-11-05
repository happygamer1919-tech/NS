import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/links";

/** Vercel preview deployments already send "X-Robots-Tag: noindex", so previews stay out of Google. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/marcar/formulario"] }],
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
