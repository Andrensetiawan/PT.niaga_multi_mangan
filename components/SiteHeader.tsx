"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "/home" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Produk", href: "/products" },
  { label: "Galeri", href: "/galeri" },
  { label: "Berita & Acara", href: "/berita-acara" },
  { label: "Karir", href: "/karir" },
  { label: "Kontak", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-stone-200/70 bg-white/90 py-2 shadow-lg backdrop-blur-md"
          : "border-b border-transparent bg-white/70 py-3 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link href="/home" className="flex items-center gap-3">
          <Image
            src="/lumbung-group-logo.jpeg"
            alt="NPM niaga multi pangan logo"
            width={56}
            height={56}
            priority
            className={`rounded-xl object-cover shadow-sm transition-all duration-300 ${
              isScrolled ? "h-10 w-10" : "h-12 w-12"
            }`}
          />
          <span className="leading-none">
            <span
              className={`block font-black tracking-tight text-emerald-950 transition-all duration-300 ${
                isScrolled ? "text-lg" : "text-xl"
              }`}
            >
              NPM
            </span>
            <span className="text-[9px] font-semibold tracking-[0.18em] text-emerald-700">
              Niaga Multi Pangan
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-900 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 ${
                pathname === link.href
                  ? "text-amber-500"
                  : "text-emerald-700 hover:-translate-y-0.5 hover:text-emerald-900"
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="rounded-full border border-emerald-100 bg-white/70 p-2 text-emerald-950 shadow-sm transition hover:scale-105 lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white/90 px-6 text-emerald-950 backdrop-blur-md transition-all duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute right-8 top-8 transition hover:scale-110"
          aria-label="Close navigation"
        >
          <X className="h-8 w-8" />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-2xl font-semibold transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            } ${pathname === link.href ? "text-amber-500" : "text-emerald-900"}`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
