import "./globals.css"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from './lib/analytics';
import ClientLayout from './ClientLayout';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plusjakarta",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata = {
  title: "Swire Creative",
  description: "Reliable web development, without the growing pains.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className={`font-sans bg-[#F5F2ED] text-[#2F3B20]`}>
        <GoogleAnalytics />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
