const logos = [
  { src: "/images/flour-hearth-logo.jpg", alt: "Flour & Hearth" },
  { src: "/images/reliava.png", alt: "Reliava" },
  { src: "/images/rangr-data-logo.jpg", alt: "Rangr Data" },
  { src: "/images/lightning.png", alt: "Lightning" },
  { src: "/images/dragdrop.png", alt: "Rocket Burgers" },
  { src: "/images/trailstack.png", alt: "Trailstack" },
];

export default function Carousel() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="text-center text-xs md:text-sm font-semibold tracking-widest uppercase text-brand-black/60 mb-6">
          Trusted By
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-2 items-center">
          {logos.map(({ src, alt }, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition"
            >
              <img
                src={src}
                alt={alt}
                className="h-12 md:h-20 w-auto object-contain rounded-[100%]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
