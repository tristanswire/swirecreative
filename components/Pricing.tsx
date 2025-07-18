import { motion } from "framer-motion";

export default function Carousel() {
  return (
    <section id="pricing" className="bg-brand-white pb-32 py-26 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-sans text-4xl font-semibold text-center mb-6 text-brand-black"
      >
        Pricing Plans
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="font-light text-lg max-w-2xl mx-auto mb-16 text-brand-black text-center"
      >
        Choose the plan that best fits your business. Upgrade or downgrade anytime.
      </motion.p>

      {/* Pricing Grid */}
      <div className="relative grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            name: "Starter",
            price: 499,
            color: "#564E58",
            features: [
              { text: "Landing pages", included: true },
              { text: "Basic integrations", included: true },
              { text: "Email support", included: true },
              { text: "Custom API work", included: false },
              { text: "Priority queue", included: false },
            ],
            cta: "Get Started",
            highlight: false,
          },
          {
            name: "Professional",
            price: 999,
            color: "#904E55",
            features: [
              { text: "Landing pages", included: true },
              { text: "Backend systems", included: true },
              { text: "Priority support", included: true },
              { text: "Custom API work", included: true },
              { text: "Weekly sprint insights", included: true },
            ],
            cta: "Most Popular",
            highlight: true,
          },
          {
            name: "Enterprise",
            price: 1999,
            color: "#BFB48F",
            features: [
              { text: "All Pro features", included: true },
              { text: "Dedicated developer", included: true },
              { text: "Custom roadmap", included: true },
              { text: "Slack + Loom updates", included: true },
              { text: "Same-day bug fixes", included: true },
            ],
            cta: "Contact Us",
            highlight: false,
          },
        ].map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="rounded-xl shadow-lg bg-white flex flex-col"
          >
            {/* Colored Header */}
            <div
              className="p-6 text-center rounded-tl-xl rounded-tr-xl"
              style={{ backgroundColor: plan.color }}
            >
              <h3 className="font-sans text-lg font-semibold text-white uppercase tracking-wide">
                {plan.name}
              </h3>
              <p className="font-sans text-4xl font-bold text-white mt-2">
                ${plan.price}
              </p>
              <span className="text-white text-sm">per month</span>

              {plan.highlight && (
                <div className="z-10 absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-brand-black text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}
            </div>

            {/* Feature List */}
            <ul className="flex-1 p-6 space-y-3 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                  {feature.included ? (
                    <span className="text-green-500 text-lg">✓</span>
                  ) : (
                    <span className="text-red-500 text-lg">✗</span>
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="p-6">
              <a
                href="#contact"
                className="block text-center py-3 rounded-md text-white font-medium transition-colors duration-300"
                style={{ backgroundColor: plan.color }}
              >
                {plan.highlight ? "Buy Now" : "Get Started"}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
