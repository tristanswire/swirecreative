import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { TrackEvent } from "@/app/lib/TrackEvent";

export default function HeroHeader() {
  const primaryCtaClicked = () => {
    TrackEvent({
      action: "cta_click",
      category: "engagement",
      label: "Hero Primary CTA",
    });
  };

  const secondaryCtaClicked = () => {
    TrackEvent({
      action: "cta_click",
      category: "engagement",
      label: "Hero Secondary Pricing",
    });
  };

  const logos = [
    { src: "/images/magnetic-logo.png", alt: "magnetic creative" },
    { src: "/images/rangr-box-logo.png", alt: "rangr" },
    { src: "/images/featherfuel.png", alt: "feather fuel" },
    { src: "/images/lightning.png", alt: "lightning" },
    { src: "/images/reliava.png", alt: "reliava" },
  ];

  return (
    <section className="relative bg-brand-white text-brand-black px-6 py-12 md:py-18 lg:py-24 border-b border-brand-black/10">
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 text-center max-w-2xl m-auto lg:text-left lg:max-w-none lg:grid-cols-12 lg:gap-10 items-center">
          {/* Left: Copy + CTAs */}
          <div className="md:col-span-7">
            {/* Eyebrow/Pill */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-black/30 px-3 py-1 text-[0.7rem] tracking-wide uppercase text-brand-black/70"
            >
              Dev Partner
              <span className="h-1 w-1 rounded-full bg-brand-black/50" />
              On Demand
            </motion.div>

            {/* Headline (thin) */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="pb-4 font-sans font-light tracking-tight text-4xl md:text-5xl lg:text-6xl leading-tight lg:w-[90%]"
            >
              You design. We code.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="pb-4 max-w-2xl md:text-lg md:pb-6 text-brand-black/70 font-light"
            >
              Built for designers, marketers, and agencies who need high-quality sites—without hiring full-time devs. Get pixel-perfect websites in 2 weeks—no dev hiring, no headaches.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mx-auto pb-6 flex flex-wrap md:flex-nowrap max-w-xs md:max-w-[26rem] lg:m-0 sm:flex-row items-center gap-3 justify-center lg:justify-left"
            >
              <a
                href="https://cal.com/swiredev/introductory-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={primaryCtaClicked}
                className="text-sm md:text-[1rem] inline-flex justify-center items-center rounded-md border-2 border-brand-yellow bg-brand-yellow text-brand-black px-6 py-3 font-semibold tracking-wide hover:bg-brand-yellow hover:text-brand-black hover:border-brand-yellow hover:brightness-90 transition duration-300 w-full"
              >
                Book a Call
              </a>
              <Link
                href="#pricing"
                onClick={secondaryCtaClicked}
                className="text-sm md:text-[1rem] inline-flex justify-center items-center rounded-md border-2 border-brand-black bg-transparent text-brand-black px-6 py-3 font-semibold tracking-wide hover:bg-brand-black hover:text-brand-white transition duration-300 w-full"
              >
                See pricing
              </Link>
            </motion.div>

            {/* Small proof points */}
            <motion.ul
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.35 }}
              className="pb-6 lg:pb-19 block justify-center items-center flex flex-wrap lg:justify-start gap-2 gap-y-2 md:gap-6 text-xs md:text-sm text-brand-black/70"
            >
              {[
                "Month-to-month",
                "Start in 5-7 business days",
                "2 active tasks / sprint",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 pb-4 font-light">
                  <HiCheck className="text-brand-black/70" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* Trusted By strip */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.35 }}
              className="lg:absolute lg:left-0 lg:bottom-0"
            >
              <div className="text-xs uppercase font-bold tracking-wide text-brand-black/50 pb-3 lg:pb-4">
                Trusted by
              </div>
              <div className="flex justify-center lg:justify-normal items-center gap-6 md:gap-8 flex-wrap">
                {logos.map(({ src, alt }, i) => (
                  <div key={i} className="opacity-50 md:w-auto grayscale-100 hover:grayscale-0 hover:opacity-100 transition duration-350">
                    <Image
                      src={src}
                      alt={alt}
                      width={120}
                      height={28}
                      className="h-3.5 lg:h-4.5 w-auto object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Minimal side card (optional visual, no giant image) */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="md:col-span-5"
          >
            <div className="hidden lg:block rounded-2xl h-150 overflow-hidden grayscale-25"> 
              <img src="https://images.unsplash.com/photo-1636138390674-c9f30acc38b5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
