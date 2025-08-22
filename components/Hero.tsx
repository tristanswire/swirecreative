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
    { src: "/images/reliava.png", alt: "reliava" },
    { src: "/images/rangr-box-logo.png", alt: "rangr" },
    { src: "/images/featherfuel.png", alt: "lightning" },
    { src: "/images/lightning.png", alt: "lightning" },
    { src: "/images/devstride.png", alt: "devstride" },
  ];

  return (
    <section className="relative bg-brand-white text-brand-black px-6 py-12 md:py-28">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 text-center max-w-2xl m-auto lg:text-left lg:max-w-none lg:grid-cols-12 lg:gap-10 items-start">
          {/* Left: Copy + CTAs */}
          <div className="md:col-span-7">
            {/* Eyebrow/Pill */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-black/30 px-3 py-1 text-[0.75rem] tracking-wide uppercase text-brand-black/70"
            >
              Dev that ships
              <span className="h-1 w-1 rounded-full bg-brand-black/50" />
              2-week sprints
            </motion.div>

            {/* Headline (thin) */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="mt-4 font-sans font-light tracking-tight text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              Reliable web development, minus the hiring headache.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-4 max-w-2xl text-base md:text-lg text-brand-black/70"
            >
              Efficient and reliable development on a simple subscription: prioritized tasks, clear updates, and dependable two-week releases.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-8 pb-2 flex flex-row sm:flex-row items-center gap-3 justify-self-center lg:justify-self-auto"
            >
              <a
                href="https://cal.com/swirecreative/introductory-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={primaryCtaClicked}
                className="text-sm md:text-md inline-flex justify-center items-center rounded-md border-2 border-brand-yellow bg-brand-yellow text-brand-black px-6 py-3 font-semibold tracking-wide hover:bg-brand-yellow hover:text-brand-black hover:border-brand-yellow hover:brightness-90 transition duration-300 w-full sm:w-auto min-w-[200px]"
              >
                Book a 15-min intro
              </a>
              <Link
                href="#pricing"
                onClick={secondaryCtaClicked}
                className="text-sm md:text-md inline-flex justify-center items-center rounded-md border-2 border-brand-black bg-transparent text-brand-black px-6 py-3 font-semibold tracking-wide hover:bg-brand-black hover:text-brand-white transition duration-300 w-full sm:w-auto min-w-[200px]"
              >
                See pricing
              </Link>
            </motion.div>

            {/* Small proof points */}
            <motion.ul
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.35 }}
              className="mt-5 pb-2 block justify-self-center items-center flex flex-wrap lg:justify-self-auto gap-2 gap-y-2 text-xs md:text-sm text-brand-black/70"
            >
              {[
                "Month-to-month",
                "Start in ~7 business days",
                "2 active tasks / sprint",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 pb-4">
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
              className="mt-6"
            >
              {/* <div className="text-xs uppercase font-bold tracking-wide text-brand-black/60 mb-4">
                Trusted by
              </div> */}
              <div className="flex  justify-self-center lg:justify-self-auto items-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
                {logos.map(({ src, alt }, i) => (
                  <div key={i} className="opacity-50 grayscale-90 hover:grayscale-0 hover:opacity-100 transition duration-350">
                    <Image
                      src={src}
                      alt={alt}
                      width={120}
                      height={28}
                      className="h-4 w-auto object-contain"
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
            <div className="hidden lg:block rounded-2xl h-130 overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1714674731657-05fcb6a0222a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            {/* <div className="rounded-xl border-2 border-brand-black bg-white p-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.9)]">
              <div className="text-xs uppercase tracking-wide text-brand-black/60">
                Next sprint opening
              </div>
              <div className="mt-1 text-2xl font-semibold">
                Monday, {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </div>
              <p className="mt-2 text-sm text-brand-black/70">
                Reserve your kickoff. Onboarding typically wraps within 7 days.
              </p>
              <div className="mt-4">
                <a
                  href="https://cal.com/swirecreative/introductory-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={primaryCtaClicked}
                  className="inline-flex justify-center items-center rounded-md border-2 border-brand-black bg-brand-white text-brand-black px-4 py-2 text-sm font-semibold hover:bg-brand-black hover:text-brand-white transition duration-300"
                >
                  Hold a slot
                </a>
              </div>
            </div> */}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
