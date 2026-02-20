"use client";

import { useEffect, useState } from "react";

export default function BottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reveal the bar shortly after load for a smooth entrance
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-700 ease-out md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl border-t border-black/10 px-5 py-4 pb-8 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button className="text-xs font-semibold tracking-widest flex items-center gap-3 text-foreground transition-opacity hover:opacity-70 active:opacity-50">
          <div className="flex flex-col gap-[4px]">
            <span className="w-5 h-[1.5px] bg-foreground block transition-transform"></span>
            <span className="w-5 h-[1.5px] bg-foreground block transition-transform"></span>
          </div>
          MENU
        </button>
        <button className="bg-foreground text-background text-[11px] font-semibold tracking-widest px-6 py-3.5 rounded-sm active:scale-95 transition-all uppercase shadow-md shadow-black/10">
          Discover Rituals
        </button>
      </div>
    </div>
  );
}
