"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-black/5 py-4" 
          : "bg-transparent border-transparent py-6 text-foreground"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center">
          
          {/* Left Spacer */}
          <div className="hidden md:block"></div>

          {/* Centered Logo */}
          <div className="col-span-3 md:col-span-1 flex justify-center">
            <Link href="/" className="flex flex-col items-center justify-center transition-transform hover:scale-105 active:scale-95">
              <Image 
                src="/logo.png" 
                alt="Salong Treat Gustavsberg" 
                width={300} 
                height={150} 
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-16 md:h-12" : "h-24 md:h-16"
                }`} 
                priority 
              />
            </Link>
          </div>

          {/* Right Navigation Links (Desktop) */}
          <div className="hidden md:flex justify-end space-x-8 text-xs font-medium tracking-[0.15em]">
            <Link href="#rituals" className="hover:text-amber-700 transition-colors">
              RITUALS
            </Link>
            <Link href="#about" className="hover:text-amber-700 transition-colors">
              OUR ESSENCE
            </Link>
            <Link href="#contact" className="hover:text-amber-700 transition-colors">
              CONNECT
            </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
}
