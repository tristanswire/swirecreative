import Link from "next/link";
import { Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white text-center py-8 border-t border-brand-white">
       <div className="mb-8 flex justify-center flex-wrap gap-6 text-sm items-center">
        <a
          href="mailto:tristan@swirecreative.com"
          className="flex items-center gap-1 hover:text-brand-white/50 transition-color duration-350"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://www.instagram.com/swirecreative"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-brand-white/50 transition-color duration-350"
        >
          <Instagram size={24} />
        </a>
      </div>

      <p className="text-xs block pb-2">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Swire Creative</span>. All rights reserved.
      </p>

      <div className="flex justify-center flex-wrap gap-6 text-xs items-center">
        <Link
          href="/terms-of-service"
          className="relative text-brand-white hover:text-brand-white/50 transition-all duration-300 pb-1
            after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-brand-white 
            after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Terms of Service
        </Link>

        <Link
          href="/privacy-policy"
          className="relative text-brand-white hover:text-brand-white/50 transition-all duration-300 pb-1
            after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-brand-white 
            after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Privacy Policy
        </Link>
      </div>

    </footer>
  );
}
