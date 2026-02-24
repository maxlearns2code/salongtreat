"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BottomBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Reveal the bar shortly after load for a smooth entrance
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center space-y-12 text-center text-xl font-medium tracking-[0.2em] text-foreground">
          <Link 
            href="#rituals" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-amber-700 transition-colors active:scale-95"
          >
            RITUALS
          </Link>
          <Link 
            href="#about" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-amber-700 transition-colors active:scale-95"
          >
            OUR ESSENCE
          </Link>
          <Link 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-amber-700 transition-colors active:scale-95"
          >
            CONNECT
          </Link>
        </div>
      </div>

      {/* Bottom Bar Container */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-700 ease-out md:hidden ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-black/10 px-5 py-4 pb-8 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xs font-semibold tracking-widest flex items-center gap-3 text-foreground transition-opacity hover:opacity-70 active:opacity-50"
          >
            <div className="relative w-5 h-3 flex flex-col justify-between">
              <span className={`w-5 h-[1.5px] bg-foreground block transition-all duration-300 ${isMenuOpen ? "absolute top-1/2 -translate-y-1/2 rotate-45" : ""}`}></span>
              <span className={`w-5 h-[1.5px] bg-foreground block transition-all duration-300 ${isMenuOpen ? "absolute top-1/2 -translate-y-1/2 -rotate-45" : ""}`}></span>
            </div>
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
          <Link 
            href="#rituals"
            onClick={() => setIsMenuOpen(false)}
            className="bg-foreground text-background text-[11px] font-semibold tracking-widest px-6 py-3.5 rounded-sm active:scale-95 transition-all uppercase shadow-md shadow-black/10 inline-block"
          >
            Discover Rituals
          </Link>
        </div>
      </div>
    </>
  );
}
