"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import images from "../data/heroImages.json";

export default function HeroSliderForDesktop() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // When animation finishes, if we've reached the duplicate set, reset instantly
  const handleAnimationComplete = () => {
    // If we've slided 5 times, we are viewing the start of the duplicate array
    if (index === images.length) {
      setIsTransitioning(false); // disable animation
      setIndex(0); // jump back to absolute beginning
      
      // Re-enable animation for the next tick
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#Dacfc0]">
      {/* The container holds 10 images (2 sets of 5).
          We want to show exactly 4 images visible in the viewport at once.
          So 4 images = 100% of container parent width.
          Therefore 1 image = 25% of parent width.
          10 images = 10 * 25% = 250% of parent width.
      */}
      <motion.div
        className="flex h-full w-[250%]"
        animate={{ x: `-${index * 10}%` }} // 10% of 250% = 25% (1 image width)
        transition={isTransitioning ? { duration: 1.2, ease: "easeInOut" } : { duration: 0 }}
        onAnimationComplete={handleAnimationComplete}
      >
        {[...images, ...images].map((src, i) => (
          <div key={`${src}-${i}`} className="relative h-full w-[10%] flex-shrink-0 border-r-[0.5px] border-foreground/10 last:border-r-0">
            <Image
              src={src}
              alt={`Salong Treat Desktop Slide ${i}`}
              fill
              className="object-cover"
              sizes="25vw"
              priority={i < 5} // Priority load first few
            />
          </div>
        ))}
      </motion.div>
      
      {/* Light beige overlay to ensure readability */}
      <div className="absolute inset-0 bg-[#Dacfc0]/20 z-10 pointer-events-none" />
    </div>
  );
}
