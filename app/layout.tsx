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

export const metadata = {
  title: "Swire Creative",
  description: "Reliable web development, without the growing pains.",
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
