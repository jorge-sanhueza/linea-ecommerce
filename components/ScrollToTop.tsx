"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when scrolled down 300px
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-8 z-50 p-3 rounded-full transition-all duration-300 shadow-lg 
        /* Colors: Dark slate with a subtle border and glass effect hover */
        bg-slate-900 text-white border border-slate-700
        hover:bg-slate-800 hover:scale-110 active:scale-95
        /* Position: Moved to bottom-24 to sit ABOVE the WhatsApp button */
        ${
          isVisible
            ? "bottom-24 opacity-100 translate-y-0"
            : "bottom-24 opacity-0 translate-y-4 pointer-events-none"
        }`}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
