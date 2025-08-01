import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/trailstack-branding.jpg",
  "/images/feather-fuel-branding.jpg",
  "/images/rangr-data-logo.jpg",
  "/images/flour-hearth-logo.jpg",
  "/images/trailstack-logo.jpg",
  "/images/rocket-burgers-logo.jpg",
  "/images/feather-fuel-texture.jpg",
];

export default function Carousel() {
  return (
    <section className="relative bg-brand-white py-10 overflow-hidden">
      {/* Section Title */}
      {/* <div className="text-center mb-10">
        <h2 className="font-sans text-3xl font-semibold text-brand-black">
          Featured Work & Brands
        </h2>
        <p className="text-gray-500 text-lg mt-2">
          A showcase of beautiful projects and collaborations
        </p>
      </div> */}

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        {/* Infinite Scrolling Wrapper */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate images for seamless infinite scroll */}
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[200px] h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={src}
                alt={`brand-${index}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
