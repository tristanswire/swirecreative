// components/FAQ.tsx
// Minimal, clean FAQ styled to match the new hero/how-it-works sections.

import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      q: "What exactly do I get each sprint?",
      a: "Two active tasks worked in a 2-week sprint, with unlimited items in your backlog. We pull the next highest-priority items into “active” as soon as one finishes.",
    },
    {
      q: "What counts as a task?",
      a: "A task is a clearly defined outcome like “build pricing page,” “implement header nav,” or “fix CLS on blog templates.” Oversized items (8+ points) get split so we keep momentum.",
    },
    {
      q: "Do you work in JavaScript frameworks?",
      a: "Not in this membership. I focus on WordPress, Shopify theme work, HTML/CSS, and vanilla JS. React/Vue or heavy API builds are quoted separately.",
    },
    {
      q: "How soon can we start?",
      a: "Onboarding starts within 7 days of sign-up. Your first sprint kicks off the next available Monday after onboarding wraps (usually the following Monday).",
    },
    {
      q: "How do we communicate?",
      a: "Primarily async. You’ll get clear email updates during the sprint and a weekly recap. Need faster back-and-forth? Add the “Slack Bridge + Loom” add-on.",
    },
    {
      q: "What if we need something live ASAP?",
      a: "Use a Rush Ticket: submit a ≤2-point issue before noon (CST) and it’s delivered next business day. See Add-ons for pricing and limits.",
    },
    {
      q: "Can we pause if we don’t have work for a sprint?",
      a: "Yes. You can pause once per quarter for one sprint. Your remaining time becomes a credit you can use later (credits expire after 90 days).",
    },
    {
      q: "Who owns the code and IP?",
      a: "You do. Everything I create under the membership is work-for-hire and transferred to you upon payment.",
    },
    {
      q: "Are there refunds?",
      a: "No refunds for past sprints, but you can cancel anytime before the next sprint begins.",
    },
    {
      q: "Do you offer performance/security hardening?",
      a: "Yes via add-ons: CWV Pass (speed tune), Plugin Safety Pack, and Uptime & Backups. These layer neatly on top of the sprint model.",
    },
  ];

  return (
    <section id="faq" className="bg-brand-white">
      <div className="container mx-auto px-6 py-16 lg:py-20 max-w-6xl">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-[0.7rem] tracking-widest uppercase text-brand-black/60 mb-1">
            FAQ
          </span>
          <h2 className="font-sans font-light text-3xl md:text-4xl text-brand-black">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-brand-black/70">
            Quick answers to the most common questions. Still unsure?{" "}
            <Link
              href="https://cal.com/swirecreative/introductory-call"
              target="_blank"
              className="underline underline-offset-2 font-semibold hover:no-underline"
            >
              Book a 15-min call
            </Link>
            
          </p>
        </header>

        {/* List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map(({ q, a }, i) => (
            <details
              key={i}
              className="group rounded-xl border border-brand-black/15 bg-white px-5 py-4 open:shadow-sm transition hover:border-brand-black/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-[0.95rem] md:text-base font-semibold text-brand-black">
                  {q}
                </h3>
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full pb-[0.25rem] border border-brand-black/40 text-brand-black/80 transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <div className="pt-3 text-brand-black/80 leading-relaxed text-sm md:text-[0.95rem]">
                {a}
              </div>
            </details>
          ))}
        </div>

        {/* Footer links */}
        <div className="text-center mt-10 text-sm text-brand-black/70">
          See{" "}
          <a
            href="#addons"
            className="underline underline-offset-2 font-semibold hover:no-underline"
          >
            Add-ons
          </a>{" "}
          and{" "}
          <a
            href="#pricing"
            className="underline underline-offset-2 font-semibold hover:no-underline"
          >
            Pricing
          </a>{" "}
          for more details.
        </div>
      </div>
    </section>
  );
}
