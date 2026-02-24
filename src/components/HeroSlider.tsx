"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/salong-treat-haircut-1.webp",
  "/images/salong-treat-balayage-2.webp",
  "/images/salong-treat-coloring-3.webp",
  "/images/salong-treat-hair-care-4.webp",
  "/images/salong-treat-styling-5.webp",
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#Dacfc0]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt="Salong Treat"
            fill
            className="object-cover"
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Light beige overlay to ensure dark text remains readable and keeps the brand aesthetic */}
      <div className="absolute inset-0 bg-[#Dacfc0]/20 z-10" />
    </div>
  );
}
