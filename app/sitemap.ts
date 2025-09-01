// app/sitemap.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // <- required for static export
// optional: export const revalidate = 60 * 60 * 24;

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://swiredev.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date("2025-08-01");
  return [
    { url: `${baseUrl}/`, lastModified: lastMod, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/terms-of-service`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.5 },
  ];
}
