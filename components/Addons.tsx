import { motion } from "framer-motion";

export default function Addons() {
  return (
    <section id="addons" className="bg-brand-black text-brand-white py-40 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-sans text-4xl font-semibold text-center mb-12 text-brand-white"
        >
          Add-on Services
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { title: "Fast Track", desc: "Move a new request into the current sprint.", price: 500 },
            { title: "Emergency Fix", desc: "Critical bug resolved within 48–72h.", price: 1000 },
            { title: "Same-Day Bug Fix", desc: "Light bug resolved same business day (before 12pm CST).", price: 500 },
            { title: "Custom Design", desc: "Add professional design support for any scope.", price: "Custom" },
            { title: "Sprint Insights", desc: "Weekly sprint updates & planning calls.", price: 1000 },
            { title: "Slack + Loom", desc: "Real-time messaging + async updates.", price: 500 }
          ].map((addon, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-md text-brand-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-sans font-medium mb-1 text-sm">{addon.title}</h3>
              <p className="font-sans text-sm mb-2">{addon.desc}</p>
              <p className="font-sans text-xs font-semibold">
                {typeof addon.price === "number" ? `$${addon.price}` : addon.price}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
  );
}
