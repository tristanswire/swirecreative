import { motion } from "framer-motion";

export default function Addons() {
  return (
    <section className="relative py-40 px-6 text-center text-brand-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503418895522-46f9804cda40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        className="relative font-sans text-4xl md:text-5xl font-bold max-w-3xl mx-auto mb-6"
      >
        Reliable web development, without the growing pains.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative font-sans text-base md:text-lg max-w-xl mx-auto mb-10"
      >
        Ongoing development, landing pages, and backend systems — handled for you on a simple subscription.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        href="#pricing"
        className="relative max-w-[12rem] flex mx-auto justify-center pr-6 pl-5 py-3 rounded-md border-2 border-brand-white bg-brand-white text-brand-black font-medium hover:bg-brand-black hover:text-brand-white hover:border-brand-white transition duration-350"
      >
        See Pricing
      </motion.a>
    </section>
  );
}
