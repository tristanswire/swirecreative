export default function Comparison() {
    const options = [
        {
            title: "🧍‍♂️ Hiring a Full-Time Developer",
            points: [
                "💸 $8,000–$12,000/month (plus benefits & overhead)",
                "🕐 Requires onboarding, payroll & management",
                "🛠 Limited skill set – one dev can’t do it all",
                "🧭 You manage scope, priorities & process",
            ],
            highlight: false,
        },
        {
            title: "🧑‍💻 Freelancers or Agencies",
            points: [
                "💸 $75–$150/hr or $5K–$15K/project",
                "🎯 Hard to scope, manage, or retain long-term",
                "⏳ Inconsistent timelines & mixed reliability",
                "📋 You juggle tasks, communication & follow-up",
            ],
            highlight: false,
        },
        {
            title: "✅ Swire Dev",
            points: [
                "💵 Flat monthly rate — no surprises",
                "🧠 Sprint-based delivery with your priorities in focus",
                "🔁 Unlimited requests via shared Trello board",
                "📆 Biweekly check-ins (Core plan+)",
                "🛠 CMS, frontend, and API expertise in one seat",
                "🚫 No micromanagement, no hiring headaches",
            ],
            highlight: true,
        },
    ];
    
    return (
        <section className="bg-brand-white py-24 px-6" id="comparison">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-brand-black mb-6">
            Why Not Just Hire a Developer?
            </h2>
            <p className="text-lg text-brand-black font-light max-w-2xl mx-auto mb-16">
            See how Swire Dev stacks up against hiring or outsourcing. One flat rate, zero overhead, real results.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
            {options.map((option, idx) => (
                <div
                key={idx}
                className={`bg-white shadow-md rounded-xl p-6 ${
                    option.highlight ? "border-2 border-brand-black" : ""
                }`}
                >
                <h3 className="text-xl font-semibold text-brand-black mb-4">
                    {option.title}
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                    {option.points.map((point, i) => (
                    <li key={i}>{point}</li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};
