import { motion } from "framer-motion";

const images = [
  "/images/feather-fuel-branding.jpg",
  "/images/feather-fuel-texture.jpg",
  "/images/feather-fuel-tableshot.jpg",
  "/images/trailstack-logo.jpg",
  "/images/trailstack-branding.jpg",
  "https://images.unsplash.com/photo-1633533446349-9040bad8260b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJyYW5kc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1617091076336-03dc99aff1df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJyYW5kc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1681702334647-9159c675dde1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJyYW5kc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1633533446213-a438ff5f0629?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJyYW5kc3xlbnwwfHwwfHx8MA%3D%3D",
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
              className="flex-shrink-0 w-[300px] h-[300px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
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
