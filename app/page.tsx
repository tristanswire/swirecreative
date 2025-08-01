"use client";
import Addons from "@/components/Addons";
import Carousel from "@/components/Carousel";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Membership from "@/components/Membership";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="text-brand-black">
      <Header />
      <Hero />
      <Carousel />
      <How />
      <Membership />
      <Pricing />
      <Addons />
      <Faq />
      <Footer />
    </main>
  );
}
