import Link from "next/link";
import { Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-white text-brand-black border-t border-brand-black/10">
      <div className="container mx-auto px-6 py-10 max-w-6xl text-center">
        {/* Social / contact */}
        <div className="mb-6 flex justify-center flex-wrap items-center gap-6 text-sm">
          <a
            href="mailto:tristan@swirecreative.com"
            aria-label="Email Swire Creative"
            className="inline-flex items-center gap-2 hover:text-brand-black/60 transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
          <a
            href="https://www.instagram.com/swirecreative"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Swire Creative on Instagram"
            className="inline-flex items-center gap-2 hover:text-brand-black/60 transition-colors"
          >
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        {/* Legal */}
        <div className="flex justify-center flex-wrap gap-6 text-xs items-center">
          <Link
            href="/terms-of-service"
            className="relative pb-1 hover:text-brand-black/70 transition-colors
              after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-brand-black/30
              after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy"
            className="relative pb-1 hover:text-brand-black/70 transition-colors
              after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-brand-black/30
              after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-[11px] text-brand-black/70">
          © {new Date().getFullYear()} <span className="font-semibold">Swire Creative</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
