// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://swirecreative.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Note the use of `as const` and `satisfies` to keep types strict
  const routes = [
    { path: "/",                 lastModified: now,            changeFrequency: "monthly" as const, priority: 1.0 },
    { path: "/terms-of-service", lastModified: "2025-08-01",   changeFrequency: "yearly"  as const, priority: 0.5 },
    { path: "/privacy-policy",   lastModified: "2025-08-01",   changeFrequency: "yearly"  as const, priority: 0.5 },
  ] satisfies Array<{
    path: string;
    lastModified?: string | Date;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
  }>;

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
