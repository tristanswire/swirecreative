// components/OfferSection.tsx
import Link from "next/link";

export default function OfferSection() {
  return (
    <section id="pricing" className="bg-brand-white">
      <div className="container mx-auto px-6 py-12 max-w-7xl lg:py-20">
        {/* Header – matches the new minimal style */}
        <header className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-[0.7rem] tracking-widest uppercase text-brand-black/60 mb-2">
            Core offer
          </span>
          <h2 className="font-sans font-light text-3xl md:text-4xl lg:text-5xl text-brand-black">
            Your Dev Partner on Demand.
          </h2>
          <p className="mt-3 text-brand-black/70">
            Ship polished, functional websites and product updates—on time, every two weeks. You focus on the big picture, we’ll handle the build.
          </p>
        </header>

        {/* Content */}
        <div
          className="mt-10 mx-auto  grid md:grid-cols-[1.2fr_.8fr] gap-6"
        >
          {/* What's included */}
          <div className="rounded-xl border border-brand-black/10 bg-white p-6 pb-0 hover:border-brand-black/20 transition">
            <div className="relative text-sm uppercase tracking-wide text-brand-black/70 mb-2">What You Get Each Sprint</div>
            <h3 className="text-xl md:text-xl font-medium text-brand-black mb-4">
              What&apos;s included each sprint
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-brand-black/90">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                Two priorities tackled per sprint (with unlimited queued in your backlog).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                Production-ready builds in WordPress or custom HTML/CSS/JS.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                Built-in QA and UX notes to keep designs pixel-perfect.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                Async updates keep you in the loop without draining your calendar.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                Each sprint ends with a launch-ready deliverable.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-black/90" />
                Email comms, 24–48h replies on business days
              </li>
            </ul>

            <div className="mt-6 mb-4 pt-5 border-t border-brand-black/10">
              <p className="text-lg font-medium text-brand-black mb-2">
                Baseline Setup <span className="text-xs">(if applicable)</span>
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-brand-black/80">
                <li>• Audit + plugin update plan for site stability</li>
                <li>• Nightly backups + monitoring for peace of mind</li>
              </ul>
            </div>

            <p className="text-xs text-brand-black/60 pb-6">
              Optional upgrades (count as tasks): Core Web Vitals Pass (speed + SEO tune-up)
              <br />
              Editor Mini-Course (train your team to manage content safely)
            </p>
          </div>

          {/* Price + CTAs (light, minimal card) */}
          <aside className="rounded-xl border border-brand-black/10 bg-white p-6 flex flex-col">
            <div className="mb-6">
              <div className="text-sm uppercase tracking-wide text-brand-black/70 pb-1">Membership</div>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-5xl font-semibold text-brand-black">$4,995</span>
                <span className="mb-1 text-sm text-brand-black/70">/mo</span>
              </div>
              <p className="mt-2 text-sm text-brand-black/70 pb-8">Month-to-month. Cancel anytime.</p>
            

              <div className="mt-auto space-y-3">
                <Link
                  href="https://cal.com/swiredev/introductory-call"
                  target="_blank"
                  className="block text-center w-full px-5 py-3 rounded-md border-2 border-brand-yellow bg-brand-yellow text-brand-black font-semibold hover:bg-brand-yellow hover:text-brand-black hover:border-brand-yellow hover:brightness-90 duration-350 transition"
                >
                  Book a Call
                </Link>
                <a
                  href="#how"
                  className="block text-center w-full px-5 py-3 rounded-md border-2 duration-350 border-brand-black text-brand-black font-semibold hover:bg-brand-black hover:text-brand-white transition"
                >
                  See how sprints work
                </a>
              </div>
            </div>

            <div className="mt-5 rounded-md border border-brand-black/10 bg-brand-black/[0.03] p-3">
              <div className="text-sm font-semibold text-brand-black">Kickoff Sprint — $2,500</div>
              <div className="text-xs text-brand-black/70 mt-1">
                Kick off with a single 2-week sprint. See how we work—no commitment.
                <ul className="lg:pt-2">
                  <li>✅ One complete website build or marketing page</li>
                  <li>✅ Code, QA, and handoff</li>
                  <li className="pb-2">✅ Try before subscribing</li>
                  <li>👉 Perfect for first-time clients.</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
