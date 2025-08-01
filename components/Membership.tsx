import { motion } from "framer-motion";

export default function Carousel() {
  return (
        <section id="benefits" className="bg-brand-black py-32 px-6 text-center">
            {/* Title + Subtitle */}
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="font-sans text-4xl font-semibold text-brand-white mb-4"
            >
                Membership Benefits
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-lg font-light text-brand-white max-w-2xl mx-auto mb-16"
            >
                Unlock exclusive perks and resources designed to help you move from concept to completion faster and easier.
            </motion.p>

            {/* Cards Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {[
                    {
                    title: "Reliable Delivery",
                    desc: "Work is shipped in focused sprints — reviewed, tested, and delivered on time.",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto lucide lucide-package-check-icon lucide-package-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="#FBF9FF" d="m16 16 2 2 4-4"/>
                            <path stroke="#FBF9FF" d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
                            <path stroke="#FBF9FF" d="m7.5 4.27 9 5.15"/>
                            <polyline stroke="#FBF9FF" points="3.29 7 12 12 20.71 7"/>
                            <line stroke="#FBF9FF" x1="12" x2="12" y1="22" y2="12"/>
                        </svg>
                    ),
                },
                {
                    title: "Organized Task Workflow",
                    desc: "Requests are triaged, prioritized, and moved through a clear sprint cycle — no guesswork, no chaos.",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto lucide lucide-trello-icon lucide-trello" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect stroke="#FBF9FF" width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                            <rect stroke="#FBF9FF" width="3" height="9" x="7" y="7"/>
                            <rect stroke="#FBF9FF" width="3" height="5" x="14" y="7"/>
                        </svg>

                    ),
                },
                {
                    title: "Priority Support",
                    desc: "Get urgent needs addressed faster with prioritized task handling via add-ons like Fast Track and Emergency Fix.",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto lucide lucide-zap-icon lucide-zap" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="#FBF9FF" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
                        </svg>
                    ),
                },
                {
                    title: "Seamless Design Handoff",
                    desc: "Work with your own designer or one of ours — we’ll turn static mockups into responsive, production-ready code.",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto lucide lucide-handshake-icon lucide-handshake" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                            <path stroke="#FBF9FF" d="m11 17 2 2a1 1 0 1 0 3-3"/>
                            <path stroke="#FBF9FF" d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
                            <path stroke="#FBF9FF" d="m21 3 1 11h-2"/>
                            <path stroke="#FBF9FF" d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
                            <path stroke="#FBF9FF" d="M3 4h8"/>
                        </svg>
                    ),
                },
                {
                    title: "Sprint Based Collaboration",
                    desc: "You submit requests anytime — we organize your backlog and deliver in focused two-week sprints.",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto lucide lucide-refresh-cw-icon lucide-refresh-cw" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="#FBF9FF" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                            <path stroke="#FBF9FF" d="M21 3v5h-5"/>
                            <path stroke="#FBF9FF" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                            <path stroke="#FBF9FF" d="M8 16H3v5"/>
                        </svg>
                    ),
                },
                {
                    title: "Discounted Services",
                    desc: "Enjoy exclusive pricing on one-off requests and select add-ons, available only to active plan members.",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto lucide lucide-badge-percent-icon lucide-badge-percent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="#FBF9FF" d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                            <path stroke="#FBF9FF" d="m15 9-6 6"/>
                            <path stroke="#FBF9FF" d="M9 9h.01"/>
                            <path stroke="#FBF9FF" d="M15 15h.01"/>
                        </svg>
                    ),
                }
                ].map(({ title, desc, icon }, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md text-center"
                >
                    {/* Icon in gradient circle */}
                    <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-brand-black mb-4 shadow-md">
                        {icon}
                    </div>

                    <h3 className="text-lg font-semibold text-brand-black">{title}</h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{desc}</p>
                </motion.div>
                ))}
            </div>
        </section>
    )
}
