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
              q: "How do requests work?",
              a: "Once you're subscribed, you can submit requests at any time. We organize them into a prioritized backlog and tackle them two at a time, working in focused, two-week sprint cycles. You'll always know what's in progress, what's next, and what's done — without needing to manage developers directly."
            },
            {
              q: "What types of requests can I submit?",
              a: "You can request anything from landing pages and CMS updates to backend logic and frontend app features. We support WordPress, HTML/CSS/JS, API integrations, and light design-to-code work. If it's technical and web-based, it likely fits. If it doesn't, we'll let you know quickly."
            },
            {
              q: "Do you work with custom code?",
              a: "Yes — everything we build is custom. We don't rely on bloated templates or page builders unless you ask for them. Whether it's a custom WordPress theme, a React component, or a script to integrate an API, the work is tailored to your stack and needs."
            },
            {
              q: "How fast is delivery?",
              a: "Delivery happens in 2-week sprints, with clear deliverables and consistent progress. Need something faster? Add-ons like “Fast Track” or “Same-Day Fix” give you flexibility to speed things up when it matters most."
            },
            {
              q: "Is design included?",
              a: "Design isn't included by default, but you can bring your own or work with a trusted partner designer we recommend. If you need help with design, we offer a scoped add-on that pairs you with a pro for UI/UX or branding needs."
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
                <span className="marker-text pl-[0.5rem]">{q}</span>
              </summary>
              <p className="font-sans text-sm mt-4 mx-8 text-brand-white">{a}</p>
            </motion.details>
          ))}
        </div>
      </section>
  );
}
