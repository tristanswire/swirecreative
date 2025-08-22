// components/Proof.tsx
export default function Proof() {
  const cases = [
    {
      logo: "/logos/logo-1.svg",
      alt: "Client A",
      title: "Client A — Marketing site overhaul",
      bullets: [
        "Launched new homepage + pricing in one sprint",
        "Fixed CLS + LCP; +22% form starts (30 days post-launch)",
        "Theme cleanup; editor now updates copy in minutes",
      ],
      image: "/images/case-1.jpg",
    },
    {
      logo: "/logos/logo-2.svg",
      alt: "Client B",
      title: "Client B — Launch stack & iterations",
      bullets: [
        "3 landing pages shipped across 2 sprints",
        "Consolidated plugins; faster admin & safer updates",
        "Set up backups + uptime alerting",
      ],
      image: "/images/case-2.jpg",
    },
  ];

  return (
    <section id="proof" className="bg-brand-white">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        {/* Header — minimal, like the new hero/how-it-works style */}
        <header className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-[0.7rem] tracking-widest uppercase text-brand-black/60 mb-1">
            Case studies
          </span>
          <h2 className="font-sans font-light text-3xl md:text-4xl text-brand-black">
            Proof that sprints ship
          </h2>
          <p className="mt-2 text-brand-black/70">
            Before → after, shipped in focused two-week sprints.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <article
              key={i}
              className="rounded-xl border border-brand-black/10 bg-white overflow-hidden shadow-sm transition hover:-translate-y-0.5 hover:border-brand-black/20"
            >
              <div className="aspect-[16/9] bg-brand-black/5">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img src={c.logo} alt={c.alt} className="h-6 w-auto" />
                  <h3 className="font-semibold text-brand-black leading-snug">
                    {c.title}
                  </h3>
                </div>

                <ul className="space-y-2 text-sm text-brand-black/80">
                  {c.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-black/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
