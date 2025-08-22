// components/OfferSection.tsx
import Link from "next/link";

export default function OfferSection() {
  return (
    <section id="membership" className="bg-brand-white border-brand-black/10 border-t ">
      <div className="container mx-auto px-6 py-12 max-w-7xl lg:py-20">
        {/* Header – matches the new minimal style */}
        <header className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-[0.7rem] tracking-widest uppercase text-brand-black/60 mb-2">
            Core offer
          </span>
          <h2 className="font-sans font-light text-3xl md:text-4xl lg:text-5xl text-brand-black">
            Development Partner
          </h2>
          <p className="mt-3 text-brand-black/70">
            Ship marketing sites, landing pages, and iteration work in predictable 2-week sprints.
          </p>
        </header>

        {/* Content */}
        <div
          id="pricing"
          className="mt-10 mx-auto  grid md:grid-cols-[1.2fr_.8fr] gap-6"
        >
          {/* What's included */}
          <div className="rounded-xl border border-brand-black/10 bg-white p-6 pb-0 hover:border-brand-black/20 transition">
            <div className="relative text-sm uppercase tracking-wide text-brand-black/70 mb-2">Sprint Details</div>
            <h3 className="text-xl md:text-xl font-medium text-brand-black mb-4">
              What’s included each sprint
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-brand-black/90">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                2 active tasks at a time (unlimited queued)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                WordPress / Shopify / HTML + CSS + vanilla JS
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                Quality checks + light UX notes
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                Asynchronous updates (no meetings required)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                Launch support at end of sprint
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                Email comms, 24–48h replies on business days
              </li>
            </ul>

            <div className="mt-6 mb-12 pt-6 border-t border-brand-black/10">
              <p className="text-lg font-semibold text-brand-black mb-2">
                Included baseline during onboarding (week 0)
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-brand-black/80">
                <li>• Plugin Safety Pack (audit + updates plan)</li>
                <li>• Uptime &amp; Backups (monitor + nightly backups)</li>
              </ul>
            </div>

            <p className="text-xs text-brand-black/60 pb-6">
              Optional upgrades (count as tasks): CWV Pass (speed tune), Editor Mini-Course for your team.
              <br />
              Guardrails: no React/Vue apps or heavy API builds (quoted separately).
            </p>
          </div>

          {/* Price + CTAs (light, minimal card) */}
          <aside className="rounded-xl border border-brand-black/10 bg-white p-6 flex flex-col">
            <div className="mb-6">
              <div className="text-sm uppercase tracking-wide text-brand-black/70">Membership</div>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-5xl font-semibold text-brand-black">$4,995</span>
                <span className="mb-1 text-sm text-brand-black/70">/mo</span>
              </div>
              <p className="mt-2 text-sm text-brand-black/70">Month-to-month. Cancel anytime.</p>
            </div>

            <div className="mt-auto space-y-3">
              <Link
                href="https://cal.com/swirecreative/intro"
                target="_blank"
                className="block text-center w-full px-5 py-3 rounded-md border-2 border-brand-yellow bg-brand-yellow text-brand-black font-semibold hover:bg-brand-yellow hover:text-brand-black hover:border-brand-yellow hover:brightness-90 duration-350 transition"
              >
                Book a 15-min Call
              </Link>
              <a
                href="#how"
                className="block text-center w-full px-5 py-3 rounded-md border-2 duration-350 border-brand-black text-brand-black font-semibold hover:bg-brand-black hover:text-brand-white transition"
              >
                See how sprints work
              </a>
            </div>

            <div className="mt-5 rounded-md border border-brand-black/10 bg-brand-black/[0.03] p-3">
              <div className="text-sm font-semibold text-brand-black">Kickoff Sprint — $2,500</div>
              <p className="text-xs text-brand-black/70 mt-1">
                Fixed 2-week starter to ship one meaningful outcome (e.g., new homepage + pricing, or clean WP theme migration).
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
