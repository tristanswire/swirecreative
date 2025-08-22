import "./globals.css";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from './lib/GoogleAnalytics';
import ClientLayout from './ClientLayout';
import { Suspense } from 'react';
import { PageViewTracker } from '@/app/lib/PageViewTracker'; // adjust path as needed

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plusjakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// --- SEO metadata ---
export const metadata = {
  // Brand first, then value prop
  title: "Swire Creative — Subscription Web Development That Scales",
  description:
    "Swire Creative helps startups, founders, and agencies ship faster with subscription-based WordPress, Shopify, and frontend development in biweekly sprints.",
  keywords: [
    "Swire Creative",
    "subscription web development",
    "WordPress development",
    "Shopify development",
    "frontend developer subscription",
    "biweekly sprints",
    "developer for hire"
  ],
  authors: [{ name: "Swire Creative" }],
  openGraph: {
    title: "Swire Creative — Subscription Web Development That Scales",
    description:
      "Reliable development without the headaches. Ongoing WordPress, Shopify, and frontend support on a simple subscription.",
    url: "https://swirecreative.com",
    siteName: "Swire Creative",
    images: [
      {
        url: "https://swirecreative.com/og-image.jpg", // update with a real OG image
        width: 1200,
        height: 630,
        alt: "Swire Creative — Subscription Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swire Creative — Subscription Web Development",
    description:
      "Subscription-based web development for startups, founders, and agencies.",
    images: ["https://swirecreative.com/og-image.jpg"], // same OG image
    creator: "@tristanswire", // update if you have a Twitter/X handle
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="font-sans bg-brand-white text-brand-black">
        <GoogleAnalytics />

        {/* Track page views via Google Analytics */}
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>

        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
