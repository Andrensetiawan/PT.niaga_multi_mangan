"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenuButton, setShowMobileMenuButton] = useState(true);

  useEffect(() => {
    let ticking = false;

    const updateFromScroll = () => {
      const nextScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled 
          ? "top-0 bg-white/95 shadow-lg backdrop-blur-lg" 
          : isHomePage
            ? "top-0 bg-transparent shadow-none"
            : "top-0 bg-white/95 shadow-md backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col px-4 lg:px-12">
        <div className={`px-1 lg:hidden ${isHomePage ? "pt-1" : "pt-2"}`}>
          <div className={`flex items-center justify-between rounded-[2rem] px-4 py-3 transition-all duration-300 ${
            isHomePage && !scrolled
              ? "bg-white/10 shadow-none ring-1 ring-white/35 backdrop-blur-md"
              : "bg-white shadow-sm ring-1 ring-stone-200/80"
          }`}>
            <Link href="/home" className="flex items-center gap-3">
              <div className="relative shrink-0">
                <Image
                  src="/Logo nmp.jpg"
                  alt="NMP PT.Niaga Multi Pangan logo"
                  width={44}
                  height={44}
                  priority
                  className="h-11 w-11 rounded-full object-cover shadow-sm ring-2 ring-emerald-100"
                />
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 shadow-sm" />
              </div>
              <div className="leading-none">
                <p className={`text-lg font-black tracking-tight ${isHomePage && !scrolled ? "text-white" : "text-stone-900"}`}>NMP</p>
                <p className={`mt-1 text-[10px] font-bold uppercase tracking-[0.22em] ${isHomePage && !scrolled ? "text-white/85" : "text-stone-500"}`}>
                  PT. Niaga Multi Pangan
                </p>
              </div>
            </Link>

            <Navbar scrolled={scrolled} hideMobileButton={!showMobileMenuButton} />
          </div>
        </div>

        {/* Logo - Top */}
        <div className={`hidden items-center justify-center transition-all duration-300 lg:flex ${
          scrolled
            ? "py-1"
            : isHomePage
              ? "py-0.5"
              : "py-2"
        }`}>
          <Link href="/home" className="group flex shrink-0 flex-col items-center gap-0.5 transition-all duration-300 hover:scale-105">
            <div className="relative">
              <Image
                src="/Logo nmp.jpg"
                alt="NMP PT.Niaga Multi Pangan logo"
                width={48}
                height={48}
                priority
                className={`rounded-xl object-cover shadow-lg transition-all duration-300 ${
                  scrolled
                    ? "h-10 w-10 ring-2 ring-white"
                    : isHomePage
                      ? "h-11 w-11 ring-2 ring-white/50"
                      : "h-12 w-12 ring-2 ring-white/50"
                }`}
              />
              <div className={`absolute -bottom-1 -right-1 rounded-full border-2 border-white bg-emerald-500 shadow-md transition-all duration-300 ${scrolled ? "h-2.5 w-2.5" : isHomePage ? "h-3 w-3" : "h-3.5 w-3.5"}`}></div>
            </div>
            {!scrolled && (
              <div className="flex flex-col items-center">
                <span
                  className={`font-black leading-none tracking-tight transition-all duration-300 ${
                    isHomePage && !scrolled ? "text-white" : "text-emerald-950"
                  } ${
                    isHomePage ? "text-base" : "text-lg"
                  }`}
                >
                  NMP
                </span>
                <span
                  className={`font-semibold leading-tight tracking-wide transition-all duration-300 ${
                    isHomePage && !scrolled ? "text-white/90" : "text-gray-800"
                  } ${
                    isHomePage ? "text-[13px]" : "text-[10px]"
                  }`}
                >
                  PT.Niaga Multi Pangan
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation - Bottom */}
        <div className={`hidden items-center justify-center transition-all duration-300 ${
          scrolled ? "py-2" : isHomePage ? "py-0.5" : "py-2"
        } lg:flex`}>
          <Navbar scrolled={scrolled} isHomePage={isHomePage} />
        </div>
      </div>
    </header>
  );
}
