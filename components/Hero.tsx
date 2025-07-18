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
        href="#contact"
        className="relative max-w-[12rem] flex mx-auto justify-center pr-6 pl-5 py-3 rounded-md border-2 border-brand-black bg-brand-white text-brand-black font-medium hover:bg-brand-black hover:text-brand-white hover:border-brand-black transition duration-350"
      >
        {/* <svg
          className="mr-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 17.5C10.5858 17.5 10.25 17.8358 10.25 18.25C10.25 18.6642 10.5858 19 11 19H13C13.4142 19 13.75 18.6642 13.75 18.25C13.75 17.8358 13.4142 17.5 13 17.5H11Z"
            fill="#FBF9FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2C6.75736 2 5.75 3.00736 5.75 4.25V19.75C5.75 20.9926 6.75736 22 8 22H16C17.2426 22 18.25 20.9926 18.25 19.75V4.25C18.25 3.00736 17.2426 2 16 2H8ZM7.25 4.25C7.25 3.83579 7.58579 3.5 8 3.5H16C16.4142 3.5 16.75 3.83579 16.75 4.25V19.75C16.75 20.1642 16.4142 20.5 16 20.5H8C7.58579 20.5 7.25 20.1642 7.25 19.75V4.25Z"
            fill="#FBF9FF"
          />
        </svg> */}
        book a call
      </motion.a>
    </section>
  );
}
