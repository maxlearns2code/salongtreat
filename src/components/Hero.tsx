"use client";

import { motion } from "framer-motion";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] pt-[145px] pb-[93px] px-5 flex flex-col items-center justify-evenly py-6 md:pt-32 md:pb-20 md:px-10">
      
      {/* Image Container */}
      <div className="relative w-full max-w-4xl aspect-[4/5] md:aspect-[3/2] overflow-hidden bg-accent/20 shadow-md">
        
        {/* Animated Image Slider Background */}
        <HeroSlider />

        {/* L-Shape Borders Top-Left and Bottom-Right */}
        <div className="absolute top-6 left-6 w-12 h-12 md:w-20 md:h-20 border-t-[0.5px] border-l-[0.5px] border-foreground/40 z-10" />
        <div className="absolute bottom-6 right-6 w-12 h-12 md:w-20 md:h-20 border-b-[0.5px] border-r-[0.5px] border-foreground/40 z-10" />
      </div>

      {/* Text Content - Positioned Below Image */}
      <div className="relative z-20 w-full max-w-4xl flex flex-col items-center text-center px-4 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Decorative Divider */}
          <div className="w-12 h-[1px] bg-foreground/40 mb-6" />

          <h1 className="font-serif text-[32px] md:text-5xl lg:text-6xl font-normal tracking-wide leading-tight mb-3 text-foreground">
            THE ART OF HAIR
          </h1>
          <p className="font-sans text-[13px] md:text-sm text-foreground/80 font-light max-w-[280px] md:max-w-md mx-auto leading-relaxed">
            A bespoke salon experience in the heart of Gustavsberg
          </p>
        </motion.div>
      </div>

    </section>
  );
}
