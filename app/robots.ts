// app/robots.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // <- required for static export
// optional: export const revalidate = 60 * 60 * 24; // 1 day

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://swirecreative.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
