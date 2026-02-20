"use client";

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
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col text-center">
            <span className="font-serif text-2xl tracking-wide font-light">
              SALONG TREAT
            </span>
            <span className="text-[10px] tracking-[0.2em] font-sans mt-0.5">
              GUSTAVSBERG
            </span>
          </Link>
          <div className="hidden md:flex space-x-8 text-xs font-medium tracking-[0.15em]">
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
