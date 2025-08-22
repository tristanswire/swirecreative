"use client";
import Addons from "@/components/Addons";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Pricing from "@/components/Pricing";
import Proof from "@/components/Proof";

export default function Home() {
  return (
    <main className="text-brand-black">
      <Header />
      <Hero />
      <How />
      <Pricing />
      <Addons />
      <Faq />
      <Footer />
    </main>
  );
}
