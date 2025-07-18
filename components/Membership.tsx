import { motion } from "framer-motion";

export default function Carousel() {
  return (
        <section id="benefits" className="bg-brand-black py-32 px-6 text-center">
            {/* Title + Subtitle */}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="font-sans text-4xl font-semibold text-brand-white mb-4"
            >
                Membership Benefits
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg font-light text-brand-white max-w-2xl mx-auto mb-16"
            >
                Unlock exclusive perks and resources designed to help you move from concept to completion faster and easier.
            </motion.p>

            {/* Grid of Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {[
                {
                    title: "Priority Support",
                    desc: "Get faster response times and dedicated help for urgent needs.",
                    icon: (
                    <svg
                        className="w-5 h-5 text-white"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.0625 18.0453C9.01679 16.914 8.26885 15.8509 7.26013 14.8658C5.86655 13.5048 5 11.6029 5 9.49987C5 5.35781 8.35781 2 12.4999 2C16.6419 2 19.9997 5.35781 19.9997 9.49987C19.9997 11.6027 19.1333 13.5046 17.7399 14.8655C16.6988 15.8824 15.9355 16.9822 15.9355 18.1544V19.75C15.9355 20.9926 14.9282 22 13.6855 22H11.3125C10.0699 22 9.0625 20.9926 9.0625 19.75V18.0453Z"
                        fill="currentColor"
                        />
                    </svg>
                    ),
                },
                {
                    title: "Exclusive Resources",
                    desc: "Access premium guides, templates, and curated content for your team.",
                    icon: (
                    <svg
                        className="w-5 h-5 text-white"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.1068 3.19153C6.31391 2.83281 6.7726 2.70991 7.13132 2.91701L9.02379 4.00964C9.04575 4.02231 9.06682 4.03593 9.08699 4.05042L18.7336 9.61988L18.7357 9.61623L19.3852 9.99123C20.03 10.3635 21.005 10.9995 21.6855 11.8237C22.0293 12.2401 22.3303 12.7428 22.4483 13.3189C22.5705 13.9153 22.4858 14.5419 22.1331 15.1528C21.4111 16.4032 19.8122 16.8317 18.5618 16.1097C18.0163 15.7948 17.6496 15.3622 17.4404 14.862L14.4395 20.0596C13.8182 21.1358 12.4421 21.5045 11.366 20.8832L3.62538 16.4141C2.54922 15.7928 2.1805 14.4167 2.80182 13.3406L7.64772 4.94721L6.38132 4.21605C6.0226 4.00894 5.89969 3.55025 6.1068 3.19153Z"
                        fill="currentColor"
                        />
                    </svg>
                    ),
                },
                {
                    title: "Design Collaboration",
                    desc: "Work seamlessly with designers to bring your vision to life with clean UI/UX.",
                    icon: (
                    <svg
                        className="w-5 h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M15.0302 4.34304C15.3231 4.63584 15.3233 5.11071 15.0305 5.4037L13.0603 7.37514L15.0305 9.34673C15.3233 9.63973 15.3231 10.1146 15.0301 10.4074C14.7371 10.7002 14.2623 10.7 13.9695 10.407L11.4695 7.90527C11.1768 7.61241 11.1768 7.13781 11.4695 6.84496L13.9695 4.34337C14.2623 4.05039 14.7372 4.05024 15.0302 4.34304Z"
                        fill="currentColor"
                        />
                    </svg>
                    ),
                },
                {
                    title: "Discounted Services",
                    desc: "Enjoy reduced pricing on additional services exclusive to members.",
                    icon: (
                    <svg
                        className="w-5 h-5 text-white"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.0625 18.0453C9.01679 16.914 8.26885 15.8509 7.26013 14.8658C5.86655 13.5048 5 11.6029 5 9.49987C5 5.35781 8.35781 2 12.4999 2C16.6419 2 19.9997 5.35781 19.9997 9.49987C19.9997 11.6027 19.1333 13.5046 17.7399 14.8655C16.6988 15.8824 15.9355 16.9822 15.9355 18.1544V19.75C15.9355 20.9926 14.9282 22 13.6855 22H11.3125C10.0699 22 9.0625 20.9926 9.0625 19.75V18.0453Z"
                        fill="currentColor"
                        />
                    </svg>
                    ),
                },
                {
                    title: "Faster Delivery",
                    desc: "Speed up your sprints and get results delivered in record time.",
                    icon: (
                    <svg
                        className="w-5 h-5 text-white"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2L15 8H9L12 2ZM2 22H22V20H2V22ZM2 18H22V16H2V18ZM2 14H22V12H2V14ZM2 10H22V8H2V10Z"
                        fill="currentColor"
                        />
                    </svg>
                    ),
                },
                {
                    title: "Custom Add-Ons",
                    desc: "Unlock exclusive member-only add-ons to expand functionality.",
                    icon: (
                    <svg
                        className="w-5 h-5 text-white"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5 2C6.70101 2 2 6.70101 2 12.5C2 18.299 6.70101 23 12.5 23C18.299 23 23 18.299 23 12.5C23 6.70101 18.299 2 12.5 2ZM12.5 21C7.80558 21 4 17.1944 4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5C21 17.1944 17.1944 21 12.5 21ZM13 7H11V11H7V13H11V17H13V13H17V11H13V7Z"
                        fill="currentColor"
                        />
                    </svg>
                    ),
                },
                ].map(({ title, desc, icon }, i) => (
                <motion.div
                    key={i}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    {/* Icon Circle */}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#5F4BB6] to-[#7A65C2] mb-4 shadow-sm">
                    {icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-brand-black">{title}</h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {desc}
                    </p>
                </motion.div>
                ))}
            </div>
        </section>
    )
}
