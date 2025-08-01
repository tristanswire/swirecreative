"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const hideNav = pathname === "/terms-of-service" || pathname === "/privacy-policy";

  const navItems = [
    { label: "How it works", target: "how" },
    { label: "Membership", target: "benefits" },
    { label: "Pricing", target: "pricing" },
    { label: "Add-ons", target: "addons" },
    { label: "FAQ", target: "faq" },
  ];

  return (
    <header className="bg-brand-white py-4 shadow-sm z-50 relative">
      <div className={`relative container mx-auto flex items-center px-4 max-w-[100%] ${ hideNav ? 'justify-center' : 'justify-between' }`} >
        {/* Logo */}
        <Link
          href="/"
          className="text-brand-black font-medium tracking-wider text-md"
        >
          Swire Creative
        </Link>

        {!hideNav && (
          <nav className="hidden md:flex gap-6">
            {navItems.map(({ label, target }, i) => (
              <a
                key={i}
                href={`#${target}`}
                className="relative text-sm font-medium font-sans text-brand-black pb-0 
                  hover:after:content-[''] hover:after:absolute hover:after:left-0 
                  hover:after:bottom-0 hover:after:w-full hover:after:border-opacity-1 hover:after:border-b-2 
                  hover:after:border-brand-purple transition-all duration-500"
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        {!hideNav && (
          <Link
            href="https://cal.com/swirecreative"
            target="_blank"
            className="hidden md:inline-block px-6 py-2 rounded-md border-2 border-brand-black bg-brand-black text-brand-white text-sm font-medium hover:bg-brand-white hover:text-brand-black transition"
          >
            Book a Call
          </Link>
        )}

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl text-brand-black cursor-pointer"
          aria-label="Open menu"
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-brand-black z-50 text-white flex flex-col"
          >
            <div className="flex justify-between items-center justify-center pb-0 pt-12">
              <span className="text-3xl font-semibold">Swire Creative</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl cursor-pointer position absolute right-[1rem] top-[1rem]"
                aria-label="Close menu"
              >
                <HiOutlineX />
              </button>
            </div>

            <nav className="flex flex-col items-center mt-10 space-y-6">
              {navItems.map(({ label, target }, i) => (
                <a
                  key={i}
                  href={`#${target}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white hover:text-brand-purple transition"
                >
                  {label}
                </a>
              ))}
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="mt-6 inline-block px-6 py-2 border-2 border-white text-white rounded-md hover:bg-white hover:text-brand-black transition"
              >
                Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
