"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      const nextVisible = window.scrollY > 200;
      setIsVisible((prev) => (prev !== nextVisible ? nextVisible : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="/contact"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl md:bottom-8 md:right-8 md:px-5 md:py-3.5 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 pointer-events-none opacity-0"
      }`}
      aria-label="Hubungi Kami"
      title="Hubungi Kami"
    >
      <MessageCircle className="h-5 w-5 text-white" strokeWidth={1.8} />
      <span>Hubungi Kami</span>
    </Link>
  );
}
