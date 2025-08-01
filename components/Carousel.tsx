import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/trailstack-branding.jpg",
  "/images/feather-fuel-branding.jpg",
  "/images/rangr-data-logo.jpg",
  "/images/amanda-swire.jpg",
  "/images/flour-hearth-logo.jpg",
  "/images/trailstack-logo.jpg",
  "/images/rocket-burgers-logo.jpg",
  "/images/feather-fuel-texture.jpg",
];

export default function Carousel() {
  return (
    <section className="relative bg-brand-black/10 py-6 mb-6 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Duplicate images for seamless infinite scroll */}
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={src}
                alt={`brand-${index}`}
                className="h-[250px] w-[250px] object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
