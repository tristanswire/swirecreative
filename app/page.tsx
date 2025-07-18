"use client";

import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="text-brand-black">

      <Header />
      <Hero />
      <Carousel />
      <Membership />
      <Pricing />
      <Faq />

      {/* Footer */}
      <footer className="bg-brand-black text-brand-white text-center py-8 border-t-1 bt-brand-white">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Swire Creative</span>. All rights reserved.
        </p>
      </footer>
    </main>
    
  );
}
