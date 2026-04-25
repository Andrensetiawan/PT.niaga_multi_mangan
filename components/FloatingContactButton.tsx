"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    let detachScrollListener: (() => void) | null = null;

    const attachDesktopScrollListener = () => {
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
      detachScrollListener = () => window.removeEventListener("scroll", handleScroll);
    };

    const syncBehaviorByViewport = () => {
      if (detachScrollListener) {
        detachScrollListener();
        detachScrollListener = null;
      }

      if (desktopQuery.matches) {
        attachDesktopScrollListener();
      } else {
        // Keep mobile always visible to avoid scroll-driven JS work.
        setIsVisible(true);
      }
    };

    syncBehaviorByViewport();
    desktopQuery.addEventListener("change", syncBehaviorByViewport);

    return () => {
      if (detachScrollListener) {
        detachScrollListener();
      }
      desktopQuery.removeEventListener("change", syncBehaviorByViewport);
    };
  }, []);

  return (
    <Link
      href="/contact"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition-[transform,opacity,box-shadow] duration-300 hover:scale-105 hover:shadow-2xl md:bottom-8 md:right-8 md:px-5 md:py-3.5 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 pointer-events-none opacity-0"
      }`}
      aria-label="Contact Us"
      title="Contact Us"
    >
      <MessageCircle className="h-5 w-5 text-white" strokeWidth={1.8} />
      <span>Contact Us</span>
    </Link>
  );
}
