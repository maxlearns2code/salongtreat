"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full pt-36 md:pt-32 px-5 md:px-10 flex justify-center items-center min-h-screen pb-20">
      <div className="relative w-full max-w-4xl aspect-[4/5] md:aspect-[3/2] overflow-hidden bg-accent/20 flex flex-col justify-center items-center">
        
        {/* Animated Background layer */}
        <motion.div 
          className="absolute inset-0 bg-[#Dacfc0] z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* L-Shape Borders Top-Left and Bottom-Right */}
        <div className="absolute top-6 left-6 w-12 h-12 md:w-20 md:h-20 border-t-[0.5px] border-l-[0.5px] border-foreground/40 z-10" />
        <div className="absolute bottom-6 right-6 w-12 h-12 md:w-20 md:h-20 border-b-[0.5px] border-r-[0.5px] border-foreground/40 z-10" />

        {/* Text Content */}
        <div className="relative z-20 text-center px-4 mix-blend-multiply text-foreground">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-sans uppercase mb-6 block opacity-80">
              The Essence of Beauty
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight">
              THE ART<br className="md:hidden" /> OF HAIR
            </h1>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
