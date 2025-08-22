import { TrackEvent } from "@/app/lib/TrackEvent";

export default function MembershipIncluded() {
  const handleCTA = () => {
    TrackEvent({
      action: "cta_click",
      category: "engagement",
      label: "Included -> Add-ons",
    });
  };

  const items = [
    {
      num: "1",
      title: "Two-Week Sprints",
      desc: "Work ships in focused 2-week cycles so timelines stay predictable.",
    },
    {
      num: "2",
      title: "2 Active Tasks",
      desc: "Two tasks in progress at a time, with unlimited items in your queue (story-pointed at kickoff).",
    },
    {
      num: "3",
      title: "CMS Builds & Iteration",
      desc: "Clean WordPress or Shopify theme work (HTML/CSS/vanilla JS—no React/Vue).",
    },
    {
      num: "4",
      title: "Landing Pages",
      desc: "From design handoff to publish-ready, wired to your forms, analytics, and SEO basics.",
    },
    {
      num: "5",
      title: "QA + Accessibility",
      desc: "Cross-browser checks, a11y basics, light UX notes, and launch support.",
    },
    {
      num: "6",
      title: "Async Updates",
      desc: "Clear email updates during the sprint plus a weekly summary recap—no standing meetings needed.",
    },
  ];

  return (
    <section id="benefits" className="bg-brand-white">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        {/* Header (matches the new clean/hero style) */}
        <header className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-[0.7rem] tracking-widest uppercase text-brand-black/60 mb-2">
            What’s included
          </span>
          <h2 className="font-sans font-light text-3xl md:text-4xl lg:text-5xl text-brand-black">
            Membership essentials that keep you shipping
          </h2>
          <p className="mt-3 text-brand-black/70">
            Everything you need to move marketing sites and iterations—without hiring headaches.
          </p>
        </header>

        {/* Items */}
        <ol className="mt-10 max-w-7xl mx-auto grid text-center gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, num }, i) => (
            <li
              key={i}
              className="rounded-xl border border-brand-black/10 bg-white p-6 hover:border-brand-black/20 transition"
            >

              <span className="h-7 w-7 m-auto mb-4 rounded-full bg-brand-yellow text-brand-black border-brand-yellow flex items-center justify-center text-[12px] font-semibold">
                {String(num).padStart(2, "0")}
              </span>
              <div className="flex justify-center items-center gap-3">
                <h3 className="font-sans text-brand-black text-lg md:text-xl font-medium">
                  {title}
                </h3>
              </div>
              <p className="mt-3 text-brand-black/80 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>

        {/* Subtext / Add-ons link */}
        <p className="mt-8 text-center text-sm text-brand-black/55 max-w-2xl mx-auto">
          Need performance hardening, monitoring, or tighter comms? See the{" "}
          <a
            href="#addons"
            onClick={handleCTA}
            className="underline underline-offset-4 hover:no-underline font-medium"
          >
            add-ons
          </a>{" "}
          for Stability Pack, Rush Ticket, Emergency Incident, Slack Bridge + Loom, and the optional CWV Pass.
          The owner-friendly <span className="font-medium">Editor Mini-Course</span> is included during onboarding.
        </p>
      </div>
    </section>
  );
}
