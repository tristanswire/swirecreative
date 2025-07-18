import { motion } from "framer-motion";

export default function Faq() {
  return (
    <section id="faq" className="bg-brand-black py-40 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-sans text-4xl font-semibold text-center mb-10 text-brand-white"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              q: "What types of requests can I submit?",
              a: "You can request landing pages, backend systems, integrations, WordPress development, and more."
            },
            {
              q: "Do you work with custom code?",
              a: "Yes — we handle custom WordPress themes, plugins, and API integrations."
            },
            {
              q: "How fast is delivery?",
              a: "Work is delivered in biweekly sprint cycles with prioritized tasks each cycle."
            },
            {
              q: "Is design included?",
              a: "No — this is development-only. You can bring your designs or we can coordinate with trusted designers."
            }
          ].map(({ q, a }, i) => (
            <motion.details
              key={i}
              className="border-b pb-4 text-brand-white"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <summary className="font-sans font-medium cursor-pointer text-sm mb-1 text-brand-white">
                {q}
              </summary>
              <p className="font-sans text-sm mt-1 text-brand-white">{a}</p>
            </motion.details>
          ))}
        </div>
      </section>
  );
}
