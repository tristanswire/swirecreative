import Link from "next/link";
import {
  HiLightningBolt,
  HiShieldExclamation,
  HiChatAlt2,
  HiShieldCheck,
  HiTrendingUp,
} from "react-icons/hi";

type Addon = {
  title: string;
  blurb: string;
  price: string;
  unit: string;
  icon: React.ComponentType<{ className?: string }>;
  footnote?: string;
  featured?: boolean;
};

const addons: Addon[] = [
  {
    title: "Rush Ticket",
    blurb: "Delivered next business day when issue is submitted before noon (CST). Skip the queue.",
    price: "$500",
    unit: "per issue",
    icon: HiLightningBolt,
    footnote: "Limited to 2 rush slots/week.",
    featured: true,
  },
  {
    title: "Slack Bridge + Loom",
    blurb: "Shared Slack access for quick communication and sprint recaps included via Loom.",
    price: "$500",
    unit: "/ month",
    icon: HiChatAlt2,
  },
  {
    title: "Emergency Incident",
    blurb: "Site-down or security triage within 2-4 hours. 24 to 48 hour path to resolution.",
    price: "$2,000",
    unit: "per incident",
    icon: HiShieldExclamation,
  },
  {
    title: "Stability Pack",
    blurb: "Safe updates in staging environment, daily offsite backups and 24/7 uptime alerts.",
    price: "$350+",
    unit: "/ month",
    icon: HiShieldCheck,
  },
  // Optional fifth:
  // {
  //   title: "CWV Pass (Speed Tune)",
  //   blurb: "Audit → fixes → before/after report on key templates.",
  //   price: "from $1,500",
  //   unit: "one-time",
  //   icon: HiTrendingUp,
  // },
];

export default function AddonsMini() {
  return (
    <section id="addons" className="bg-brand-white border-t border-b border-brand-black/10">
      <div className="container mx-auto px-6 py-16 lg:py-20 max-w-7xl">
        {/* Header – minimal to match new hero/how-it-works style */}
        <header className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-[0.7rem] tracking-widest uppercase text-brand-black/60 mb-1">
            Optional add-ons
          </span>
          <h2 className="font-sans font-light text-3xl md:text-4xl text-brand-black">
            Add-ons you can toggle on
          </h2>
          <p className="mt-2 text-brand-black/70">
            Lightweight extras that layer neatly on the sprint model.
          </p>
        </header>

        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center justify-center">
          {addons.map(({ title, blurb, price, unit, icon: Icon, footnote, featured }, i) => (
            <li
              key={i}
              className={`group rounded-xl border border-brand-black/10 bg-white p-6 shadow-sm transition 
                          hover:border-brand-black/20 hover:-translate-y-0.5 ${
                            featured ? "ring-1 ring-brand-black/10" : ""
                          }`}
            >
               <span className="h-12 w-12 mb-4 m-auto rounded-full border-brand-yellow bg-brand-yellow text-brand-black flex items-center justify-center text-[12px] font-semibold">
                  <Icon className="text-xl" />
                </span>
              <div className="flex items-start gap-3">
               
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-brand-black leading-snug">{title}</h3>
                  <p className="mt-1 text-sm text-brand-black/80">{blurb}</p>
                </div>
              </div>

              <div className="mt-4 flex items-baseline gap-1 text-center justify-center">
                <span className="text-2xl font-bold text-brand-black">{price}</span>
                <span className="text-xs font-semibold text-brand-black/70 align-center">{unit}</span>
              </div>

              {footnote && (
                <p className="mt-2 text-[11px] text-brand-black/60">{footnote}</p>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-brand-black/60 pb-8">
          Owner-friendly <span className="font-bold">Editor Mini-Course</span> is included during onboarding.
        </p>

        <Link
            href="https://cal.com/swiredev/introductory-call"
            target="_blank"
            className="block max-w-[12rem] text-center m-auto rounded-md border-2 border-brand-yellow bg-brand-yellow text-brand-black px-6 py-3 font-semibold tracking-wide hover:bg-brand-yellow hover:text-brand-black hover:border-brand-yellow hover:brightness-90 transition duration-300 w-full sm:w-auto min-w-[200px]"
          >
            Book a Call
          </Link>
      </div>
    </section>
  );
}
