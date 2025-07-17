"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="text-brand-black">
      <header className="bg-brand-white py-4 shadow-sm">
        <div className="relative container mx-auto flex items-center justify-center">
          {/* Logo */}
          <div className="absolute left-0 text-brand-black font-bold tracking-wider text-md">
            swire
          </div>

          {/* Navigation */}
          <nav className="flex gap-6">
            {[
              { label: "how it works", target: "how" },
              { label: "membership", target: "benefits" },
              { label: "pricing", target: "pricing" },
              { label: "add-ons", target: "addons" },
              { label: "faq", target: "faq" },
            ].map(({ label, target }, i) => (
              <a
                key={i}
                href={`#${target}`}
                className="relative text-md font-medium font-sans text-brand-black pb-1 
                          hover:after:content-[''] hover:after:absolute hover:after:left-0 
                          hover:after:bottom-0 hover:after:w-full hover:after:border-opacity-1 hover:after:border-b-2 
                          hover:after:border-brand-purple transition-all duration-500"
              >
                {label}
              </a>
            ))}

          </nav>


          {/* CTA Button */}
          <Link href="#" className="absolute right-0 inline-block px-8 py-2 rounded-md border-2 border-brand-purple bg-brand-white text-brand-purple  text-md tracking-wider font-medium hover:bg-brand-purple hover:text-brand-white hover:border-brand-purple transition duration-350">
              login
          </Link>
        </div>
      </header>
      {/* Hero Section */}
      <section
        className="relative py-46 px-6 text-center text-brand-white overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1668708034279-ab8fa3a9e19b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-brand-purple-hover/70" />
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
          className="relative flex mx-auto w-1/10 justify-center pr-6 pl-5 py-3 rounded-md border-2 border-brand-black bg-brand-white text-brand-black font-medium hover:bg-brand-black hover:text-brand-white hover:border-brand-black transition duration-350"
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


      {/* How It Works */}
      <section id="how" className="bg-brand-white text-center py-32 pb-40 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-sans text-4xl font-semibold mb-4 text-brand-black"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="font-sans text-lg max-w-xl mx-auto mb-10 text-brand-black"
        >
          Our streamlined process ensures your project moves from concept to completion efficiently and effectively.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto text-center">
          {[
            {
              title: "Discovery",
              desc: "Project kickoff, goal alignment, and scope definition for successful execution.",
              svg: (
                <svg className="mx-auto w-12 h-12" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clip-rule="evenodd" d="M9.0625 18.0453C9.01679 16.914 8.26885 15.8509 7.26013 14.8658C5.86655 13.5048 5 11.6029 5 9.49987C5 5.35781 8.35781 2 12.4999 2C16.6419 2 19.9997 5.35781 19.9997 9.49987C19.9997 11.6027 19.1333 13.5046 17.7399 14.8655C16.6988 15.8824 15.9355 16.9822 15.9355 18.1544V19.75C15.9355 20.9926 14.9282 22 13.6855 22H11.3125C10.0699 22 9.0625 20.9926 9.0625 19.75V18.0453ZM6.5 9.49987C6.5 6.18624 9.18624 3.5 12.4999 3.5C15.8135 3.5 18.4997 6.18624 18.4997 9.49987C18.4997 11.1824 17.8082 12.7021 16.6918 13.7925C15.9506 14.5164 15.1802 15.4257 14.7589 16.5H10.2412C9.81983 15.4258 9.04933 14.5165 8.30817 13.7927C7.19168 12.7023 6.5 11.1825 6.5 9.49987ZM10.5625 18.2129C10.564 18.1938 10.5647 18.1744 10.5647 18.1549C10.5647 18.1088 10.564 18.063 10.5625 18.0175V18H14.4355V19.75C14.4355 20.1642 14.0998 20.5 13.6855 20.5H11.3125C10.8983 20.5 10.5625 20.1642 10.5625 19.75V18.2129Z" fill="#5F4BB6"/>
                  <path d="M1.75 9.5C1.75 9.08579 2.08579 8.75 2.5 8.75H3.5C3.91421 8.75 4.25 9.08579 4.25 9.5C4.25 9.91421 3.91421 10.25 3.5 10.25H2.5C2.08579 10.25 1.75 9.91421 1.75 9.5Z" fill="#5F4BB6"/>
                  <path d="M4.21484 3.85048C3.85612 3.64337 3.39743 3.76628 3.19032 4.125C2.98322 4.48372 3.10612 4.94241 3.46484 5.14952L4.33087 5.64952C4.68959 5.85663 5.14828 5.73372 5.35539 5.375C5.56249 5.01628 5.43959 4.55759 5.08087 4.35048L4.21484 3.85048Z" fill="#5F4BB6"/>
                  <path d="M3.19032 14.875C2.98322 14.5163 3.10612 14.0576 3.46484 13.8505L4.33087 13.3505C4.68959 13.1434 5.14828 13.2663 5.35539 13.625C5.56249 13.9837 5.43959 14.4424 5.08087 14.6495L4.21484 15.1495C3.85612 15.3566 3.39743 15.2337 3.19032 14.875Z" fill="#5F4BB6"/>
                  <path d="M21.5 8.75C21.0858 8.75 20.75 9.08579 20.75 9.5C20.75 9.91421 21.0858 10.25 21.5 10.25H22.5C22.9142 10.25 23.25 9.91421 23.25 9.5C23.25 9.08579 22.9142 8.75 22.5 8.75H21.5Z" fill="#5F4BB6"/>
                  <path d="M19.6454 13.625C19.8525 13.2663 20.3112 13.1434 20.6699 13.3505L21.5359 13.8505C21.8947 14.0576 22.0176 14.5163 21.8105 14.875C21.6034 15.2337 21.1447 15.3566 20.7859 15.1495L19.9199 14.6495C19.5612 14.4424 19.4383 13.9837 19.6454 13.625Z" fill="#5F4BB6"/>
                  <path d="M19.9199 4.35048C19.5612 4.55759 19.4383 5.01628 19.6454 5.375C19.8525 5.73372 20.3112 5.85663 20.6699 5.64952L21.5359 5.14952C21.8947 4.94241 22.0176 4.48372 21.8105 4.125C21.6034 3.76628 21.1447 3.64337 20.7859 3.85048L19.9199 4.35048Z" fill="#5F4BB6"/>
                </svg>
              )
            },
            {
              title: "Design",
              desc: "Collaborate with expert designers to turn concepts into beautiful, functional UI.",
              svg: (
                <svg className="mx-auto w-12 h-12" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clip-rule="evenodd" d="M6.1068 3.19153C6.31391 2.83281 6.7726 2.70991 7.13132 2.91701L9.02379 4.00964C9.04575 4.02231 9.06682 4.03593 9.08699 4.05042L18.7336 9.61988L18.7357 9.61623L19.3852 9.99123C20.03 10.3635 21.005 10.9995 21.6855 11.8237C22.0293 12.2401 22.3303 12.7428 22.4483 13.3189C22.5705 13.9153 22.4858 14.5419 22.1331 15.1528C21.4111 16.4032 19.8122 16.8317 18.5618 16.1097C18.0163 15.7948 17.6496 15.3622 17.4404 14.862L14.4395 20.0596C13.8182 21.1358 12.4421 21.5045 11.366 20.8832L3.62538 16.4141C2.54922 15.7928 2.1805 14.4167 2.80182 13.3406L7.64772 4.94721L6.38132 4.21605C6.0226 4.00894 5.89969 3.55025 6.1068 3.19153ZM4.25736 13.8195L8.9449 5.70043L17.0649 10.3885L4.25736 13.8195ZM4.64239 15.2692L12.116 19.5841C12.4747 19.7912 12.9334 19.6683 13.1405 19.3096L17.4549 11.8369L4.64239 15.2692ZM18.764 13.2516C18.8509 12.735 19.0615 12.1891 19.2951 11.7039C19.74 12.0073 20.1953 12.3747 20.5289 12.7787C20.7778 13.0802 20.9263 13.3635 20.9788 13.62C21.0272 13.8562 21.0037 14.109 20.834 14.4028C20.5263 14.9358 19.8448 15.1184 19.3118 14.8107C19.018 14.6411 18.8712 14.4339 18.795 14.2051C18.7123 13.9567 18.6992 13.6372 18.764 13.2516Z" fill="#5F4BB6"/>
                </svg>
              )
            },
            {
              title: "Development",
              desc: "Scalable custom code built on reliable frameworks and modern architecture.",
              svg: (
                <svg className="mx-auto w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0302 4.34304C15.3231 4.63584 15.3233 5.11071 15.0305 5.4037L13.0603 7.37514L15.0305 9.34673C15.3233 9.63973 15.3231 10.1146 15.0301 10.4074C14.7371 10.7002 14.2623 10.7 13.9695 10.407L11.4695 7.90527C11.1768 7.61241 11.1768 7.13781 11.4695 6.84496L13.9695 4.34337C14.2623 4.05039 14.7372 4.05024 15.0302 4.34304Z" fill="#5F4BB6"/>
                  <path d="M18.2198 4.34304C17.9269 4.63584 17.9267 5.11071 18.2195 5.4037L20.1897 7.37514L18.2195 9.34673C17.9267 9.63973 17.9269 10.1146 18.2199 10.4074C18.5129 10.7002 18.9877 10.7 19.2805 10.407L21.7805 7.90527C22.0732 7.61241 22.0732 7.13781 21.7805 6.84496L19.2805 4.34337C18.9877 4.05039 18.5128 4.05024 18.2198 4.34304Z" fill="#5F4BB6"/>
                  <path d="M22 15.344V11.6622C21.5725 12.1975 21.0667 12.6675 20.5 13.0549V15.344C20.5 15.7582 20.1642 16.094 19.75 16.094H4.25C3.83579 16.094 3.5 15.7582 3.5 15.344V6.75021C3.5 6.33599 3.83579 6.00021 4.25 6.00021H9.88753C9.99391 5.47609 10.1599 4.97363 10.3782 4.50021H4.25C3.00736 4.50021 2 5.50757 2 6.75021V15.344C2 16.5866 3.00736 17.594 4.25 17.594H11.25V19.2502H9.00003C8.58582 19.2502 8.25003 19.586 8.25003 20.0002C8.25003 20.4144 8.58582 20.7502 9.00003 20.7502H15C15.4142 20.7502 15.75 20.4144 15.75 20.0002C15.75 19.586 15.4142 19.2502 15 19.2502H12.75V17.594H19.75C20.9926 17.594 22 16.5866 22 15.344Z" fill="#5F4BB6"/>
                </svg>

              )
            },
          ].map(({ title, desc, svg }, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-md shadow text-brand-black border-brand-purple"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-xs text-center fill-brand-purple mx-auto">{svg}</div>
              <h3 className="text-lg mb-6 lowercase tracking-wider font-medium text-brand-purple">{title}</h3>
              <p className="font-sans text-md">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Membership Benefits */}
      <section id="benefits" className="bg-brand-black text-brand white py-40 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-sans text-4xl font-semibold text-center mb-12 text-brand-white"
        >
          Membership Benefits
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          {[
            "Priority Support",
            "Exclusive Resources",
            "Design Collaboration",
            "Discounted Services",
          ].map((title, i) => (
            <motion.div
              key={i}
              className="bg-brand-yellow p-6 rounded-md text-brand-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="font-sans text-base font-medium mb-2">{title}</h3>
              <p className="font-sans text-sm">
                Short explanation of what this benefit provides and how it helps your team or product.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-brand-white py-40 px-6 border-y border-brand-gray">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-sans text-4xl font-semibold text-center mb-12 text-brand-black"
        >
          Pricing Plans
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { name: "Starter", price: 499, highlighted: false },
            { name: "Professional", price: 999, highlighted: true },
            { name: "Enterprise", price: 1999, highlighted: false }
          ].map((plan, i) => (
            <motion.div
              key={i}
              className={`rounded-md p-6 text-center shadow-md ${
                plan.highlighted ? "bg-brand-yellow" : "bg-white"
              } text-brand-black`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="font-sans font-semibold text-sm mb-1">{plan.name}</h3>
              <p className="font-sans text-3xl font-bold mb-4">${plan.price}</p>
              <ul className="font-sans text-sm text-left space-y-1 mb-6">
                <li>✓ Feature 1</li>
                <li>✓ Feature 2</li>
                <li>✓ Feature 3</li>
              </ul>
              <a href="#contact" className="inline-block text-xs underline font-sans">
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
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

      {/* FAQ */}
      <section id="faq" className="bg-brand-white py-40 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-sans text-4xl font-semibold text-center mb-10 text-brand-black"
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
              className="border-b pb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <summary className="font-sans font-medium cursor-pointer text-sm mb-1 text-brand-black">
                {q}
              </summary>
              <p className="font-sans text-sm mt-1 text-brand-black">{a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-brand-white text-center py-8">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Swire Creative</span>. All rights reserved.
        </p>
      </footer>
    </main>
    
  );
}
