import { motion } from "framer-motion";

export default function Carousel() {
  return (
    <section id="pricing" className="bg-brand-white py-26 px-6 pb-6">
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
        Choose the plan that best fits your company&apos;s needs.
      </motion.p>
      
      {/* Pricing Grid */}
      <div className="relative grid gap-8 max-w-md lg:grid-cols-3 lg:max-w-7xl mx-auto">
        {[
          {
            name: "Maintenance",
            price: 2499,
            color: "#252627",
            features: [
              { text: "Ongoing WordPress or Shopify maintenance", included: true },
              { text: "Minor theme & template edits", included: true },
              { text: "Security & performance updates", included: true },
              { text: "Basic bug fixes and content changes", included: true },
              { text: "1 active task at a time", included: true },
              { text: "Requests Method: Email Only", included: true },
            ],
            cta: "Start Maintenance Plan",
            highlight: false,
          },
          {
            name: "Growth",
            price: 4995,
            color: "#252627",
            features: [
              { text: "Everything in Lite", included: true },
              { text: "Biweekly sprint planning with kickoff meetings", included: true },
              { text: "2 active tasks at a time", included: true },
              { text: "Custom WordPress or Shopify builds", included: true },
              { text: "Basic API integrations & workflow automations", included: true },
              { text: "Requests Method: Email & Trello Board", included: true },
            ],
            cta: "Start Growth Plan",
            highlight: false,
          },
          {
            name: "Custom",
            price: 9999,
            color: "#252627",
            features: [
              { text: "Everything in Growth", included: true },
              { text: "React or Vue development for modern frontend experiences", included: true },
              { text: "Advanced API integrations and custom workflows", included: true },
              { text: "Complex UI/UX implementations and tailored features", included: true },
              { text: "Tailored sprint planning based on project needs", included: true },
            ],
            cta: "Book a Call",
            custom: true,
          },
        ].map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className={`relative rounded-xl shadow-lg bg-white flex flex-col py-10 px-8 pb-6 ${
              i === 1 ? "lg:scale-[1.1] border-1 border-brand-sand/50" : ""
            }`}
          >
            {/* Most Popular Banner */}
            {i === 1 && (
              <div className="absolute top-0 left-[1rem] -translate-y-1/2 bg-brand-black text-brand-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                Most Popular
              </div>
            )}

            {/* Header */}
            <h3
              className={`font-sans ${
                i === 1 ? "text-4xl" : "text-4xl"
              } text-brand-black mb-6 font-bold`}
            >
              {plan.name}
            </h3>

            {/* Feature List */}
            <ul className="space-y-3 mb-8 text-left">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-brand-black text-sm"
                >
                  <span className="text-brand-black text-md">✓</span>
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-auto mb-4">
              <div className="font-sans text-4xl font-bold text-brand-black">
                {typeof plan.price === "number" ? (
                  <>
                    ${plan.price.toLocaleString()}
                    <span className="ml-[-0.15rem] font-semibold tracking-normal text-base text-xs ml-1 align-baseline">
                      /month
                    </span>
                  </>
                ) : (
                  <>
                    {plan.price}
                  </>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://cal.com/swirecreative"
              className="inline-block w-full text-center py-3 rounded-md text-white font-medium transition bg-brand-black border-brand-black border-2 text-brand-white duration-350 hover:scale-[1.03] hover:bg-brand-white hover:text-brand-black hover:border-brand-black"
              target="_blank"
            >
              {plan.custom ? "Book a Call" : plan.cta}
            </a>
          </motion.div>


        ))}
      </div>
    </section>
  );
}
