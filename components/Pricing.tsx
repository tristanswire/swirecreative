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
            name: "Lite",
            price: 2499,
            color: "#564E58",
            features: [
              { text: "WordPress or Shopify support", included: true },
              { text: "Minor theme & template edits", included: true },
              { text: "Security & performance updates", included: true },
              { text: "1 active task at a time", included: true },
              { text: "1 sprint per month", included: true },
            ],
            cta: "Get Started",
            highlight: false,
          },
          {
            name: "Core",
            price: 4995,
            color: "#904E55",
            features: [
              { text: "Everything in Lite", included: true },
              { text: "Biweekly 2-week sprints", included: true },
              { text: "2 active tasks at a time", included: true },
              { text: "Custom WordPress/Shopify builds", included: true },
              { text: "Basic API integrations", included: true },
            ],
            cta: "Most Popular",
            highlight: true,
          },
          {
            name: "Advanced",
            price: "Custom",
            color: "#BFB48F",
            features: [
              { text: "All Core features", included: true },
              { text: "React or Vue development", included: true },
              { text: "Advanced API integrations", included: true },
              { text: "Complex UI/UX implementations", included: true },
              { text: "Tailored sprint planning", included: true },
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
            className="rounded-xl shadow-lg bg-white flex flex-col p-6"
          >
            {/* Header */}
            <h3 className="font-sans text-xl font-semibold text-brand-black mb-6">
              {plan.name} Plan
            </h3>

            {/* Feature List */}
            <ul className="space-y-3 mb-8 text-left">
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

            {/* Price */}
            <div className="mt-auto mb-4">
              {typeof plan.price === "number" ? (
                <>
                  <div className="font-sans text-4xl font-bold text-brand-black">
                    ${plan.price.toLocaleString()}
                    <span className="text-base font-normal ml-1 align-baseline">
                      per month
                    </span>
                  </div>
                  <p className="text-sm text-brand-black mt-1">billed monthly</p>
                </>
              ) : (
                <div className="font-sans text-4xl font-bold text-brand-black">
                  {plan.price}
                  <p className="font-normal text-sm text-brand-black mt-1">billed monthly</p>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-block w-full text-center py-3 rounded-md text-white font-medium transition-colors duration-300"
              style={{ backgroundColor: plan.color }}
            >
              {plan.highlight ? "Buy Now →" : plan.cta + " →"}
            </a>
          </motion.div>
        ))}
      </div>
    </section>

  );
}
