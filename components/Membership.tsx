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
      title: "Predictable Sprints",
      desc: "Focused delivery in set 2-week sprints means you always know when work lands.",
    },
    {
      num: "2",
      title: "Task Flow That Scales",
      desc: "We manage your backlog with story points at kickoff so priorities move without chaos.",
    },
    {
      num: "3",
      title: "CMS Builds That Last",
      desc: "Clean, stable WordPress theme work in HTML/CSS/JS.",
    },
    {
      num: "4",
      title: "Launch-Ready Pages",
      desc: "Pixel-perfect landing pages wired with forms, analytics, and SEO essentials.",
    },
    {
      num: "5",
      title: "QA + Accessibility Baked In",
      desc: "Cross-browser testing, accessibility basics, and light UX notes—plus launch support.",
    },
    {
      num: "6",
      title: "Async by Default",
      desc: "Stay updated with clear async check-ins—no meetings required.",
    },
  ];

  return (
    <section id="benefits" className="bg-brand-white border-brand-black/10 border-t border-b">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        {/* Header (matches the new clean/hero style) */}
        <header className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-[0.7rem] tracking-widest uppercase text-brand-black/60 mb-2">
            What’s included
          </span>
          <h2 className="font-sans font-light text-3xl md:text-4xl lg:text-5xl text-brand-black leading-tight">
            Development essentials. <br/> Every sprint.
          </h2>
          <p className="mt-3 text-brand-black/70">
            Ship marketing sites and iterations on schedule—without adding headcount.
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
      </div>
    </section>
  );
}
