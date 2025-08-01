import { motion } from "framer-motion";

export default function Addons() {
  return (
    <section id="addons" className="bg-brand-white text-brand-white py-12 pb-30 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="font-sans text-3xl font-semibold text-center mb-12 text-brand-black"
      >
        Add-on Services
      </motion.h2>

      <div className="grid gap-10 lg:grid-cols-3 max-w-5xl mx-auto">
        {[
          {
            category: "oneTime",
            title: "Same-Day Bug Fix",
            desc: "Submit a bug by noon (CST) — and we’ll fix it before the day is done.",
            price: 500,
            color: "#252627",
            icon: (
              <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="none">
                <path d="M12 6v6l4 2" stroke="#FBF9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="#FBF9FF" strokeWidth="2"/>
              </svg>
            ),
          },
          {
            category: "monthly",
            title: "Slack + Loom",
            desc: "Talk directly with your developer in real-time and get async sprint recaps via video.",
            price: 500,
            color: "#252627",
            icon: (
              <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="none">
                <path d="M2 8h20M2 16h20M6 12h12" stroke="#FBF9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
          },
          {
            category: "oneTime",
            title: "Emergency Fix",
            desc: "Got a critical issue? We’ll jump in and resolve it fast — usually within 48–72 hours.",
            price: 2000,
            color: "#252627",
            icon: (
              <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#FBF9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
          }
        ].map(({ category, title, desc, price, color, icon }, i) => (
          <motion.div
            key={i}
            className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center relative z-10 text-brand-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="w-14 h-14 mx-auto rounded-full flex items-center justify-center shadow-md mb-6"
              style={{ background: color }}
            >
              {icon}
            </div>

            <h3 className="text-lg font-semibold text-brand-black">{title}</h3>

            <div
              className="w-10 h-[2px] mx-auto my-3 rounded-full"
              style={{ background: color }}
            ></div>

            <p className="text-md text-brand-black leading-relaxed mb-2">{desc}</p>
            <p className="text-2xl font-bold text-brand-black">
              {category === "monthly" ? (
                <>
                  ${price}
                  <span className="text-[0.65rem]">/month</span>
                </>
              ) : (
                <>
                  ${price}
                  <span className="text-[0.65rem] ml-1">per use</span>
                </>
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
