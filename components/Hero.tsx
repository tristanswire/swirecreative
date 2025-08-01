import { motion } from "framer-motion";
import Image from "next/image";

export default function Addons() {
  return (
    <section className="relative py-40 px-6 text-center text-brand-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          fill={true}
          src="/images/hero.jpg"
          alt="Hero background"
          className=" w-full h-full object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute top-0 inset-0 bg-brand-black/85" />
      </div>

      {/* Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative font-sans text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl lg:max-w-4xl mx-auto mb-6"
      >
        Reliable web development, without the growing pains.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative font-sans text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-10"
      >
        Ongoing development, landing pages, and backend systems — handled for you on a simple subscription.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        href="#pricing"
        className="relative font-semibold text-md lg:text-lg max-w-[12rem] lg:max-w-[16rem] flex mx-auto justify-center px-6 py-3 lg:py-4 rounded-md border-2 border-brand-white bg-brand-white text-brand-black hover:bg-brand-sand hover:text-brand-black hover:border-brand-black transition duration-350"
      >
        See Pricing
      </motion.a>
    </section>
  );
}
