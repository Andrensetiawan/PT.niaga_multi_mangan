"use client";

import Link from "next/link";
import { Instagram, Facebook, AtSign } from "lucide-react";
import { useSiteLocale } from "./useSiteLocale";

const officePhone = "021-27846285";
const whatsappNumber = "+62 858-1184-8112";
const whatsappLink = "https://wa.me/6285811848112";
const externalWebsite = "https://kyohikari.com";

const quickLinks = [
  { label: "Beranda", href: "/home" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Produk", href: "/products" },
  { label: "Kontak", href: "/contact" },
  { label: "Masuk CMS", href: "/cms/login" },
];

const copy = {
  id: {
    title: "Spesialis Premium Kyohikari & Hikaru",
    subtitle:
      "Kami membantu restoran, hotel, dan retailer menjaga konsistensi rasa melalui pemilihan butir terbaik dan dukungan pengiriman nasional.",
    quickAccess: "Akses Cepat",
    contactDesk: "Kontak & Reseller",
    whatsappOwner: "WhatsApp Pemilik",
    available:
      "Tersedia 09.00 - 21.00 WIB untuk konsultasi volume, kerja sama private label, dan jadwal kunjungan fasilitas.",
    chatNow: "Chat Sekarang",
    legal: "Legalitas",
    followUs: "Ikuti Kami",
    ownerDoc: "Lihat Biodata Owner",
    links: {
      home: "Beranda",
      about: "Tentang Kami",
      products: "Produk",
      contact: "Kontak",
      cms: "Login CMS",
    },
    trust1: "Tersertifikasi BPOM",
    trust2: "Siap ISO 9001",
    trust3: "Kontrol Kualitas 24/7",
    trust4: "Distribusi Nasional",
  },
  en: {
    title: "Premium Kyohikari & Hikaru Specialist",
    subtitle:
      "We help restaurants, hotels, and retailers maintain flavor consistency through premium grain selection and nationwide delivery support.",
    quickAccess: "Quick Access",
    contactDesk: "Contact & Reseller Desk",
    whatsappOwner: "WhatsApp Owner",
    available:
      "Available 09.00 - 21.00 WIB for volume consultation, private-label collaboration, and facility visit scheduling.",
    chatNow: "Chat Now",
    legal: "Legal",
    followUs: "Follow Us",
    ownerDoc: "View Owner Biodata",
    links: {
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",
      cms: "CMS Login",
    },
    trust1: "BPOM Certified",
    trust2: "ISO 9001 Ready",
    trust3: "24/7 Quality Control",
    trust4: "Nationwide Distribution",
  },
} as const;

export default function Footer() {
  const { locale } = useSiteLocale();
  const t = copy[locale];

  const localizedQuickLinks = [
    { ...quickLinks[0], label: t.links.home },
    { ...quickLinks[1], label: t.links.about },
    { ...quickLinks[2], label: t.links.products },
    { ...quickLinks[3], label: t.links.contact },
    { ...quickLinks[4], label: t.links.cms },
  ];

  return (
    <footer className="bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">
            Niaga Multi Pangan
          </p>
          <h3 className="serif mt-3 text-3xl font-bold">{t.title}</h3>
          <p className="mt-4 text-sm text-emerald-100/80">
            {t.subtitle}
          </p>
          <div className="mt-6 space-y-3 text-sm font-semibold">
            <p>Tel: {officePhone}</p>
            <p>Email: lumbungmakananutama@gmail.com</p>
            <p>
              Website lain:{" "}
              <a href={externalWebsite} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-emerald-100">
                {externalWebsite}
              </a>
            </p>
            <p>Kantor Pusat: Jl. Pala I No. 50 A.LKMD, Pd Cabe Udik, Tangerang Selatan</p>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">
            {t.quickAccess}
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {localizedQuickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-emerald-100 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">
            {t.contactDesk}
          </p>
          <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg font-semibold text-white">{t.whatsappOwner}</p>
            <p className="text-sm text-emerald-100">{whatsappNumber}</p>
            <p className="mt-3 text-xs text-emerald-200">
              {t.available}
            </p>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.4em] text-emerald-900 transition hover:bg-emerald-100"
            >
              {t.chatNow}
            </Link>
          </div>
          <div className="mt-6 text-xs text-emerald-200">
            <p>{t.legal}</p>
            <p className="mt-2">&copy; AFD Corp 2026</p>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-6">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">
              {t.followUs}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/kyohikari_officialstore/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.threads.com/@kyohikari_officialstore?xmt=AQF0sXCA94sh9tsWeWgbbjdn7zL-Xo8DuQULqoLj2qsRvYk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
                aria-label="Threads"
              >
                <AtSign size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Bar - Replaces Visitor Counter */}
      <div className="border-t border-emerald-900/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-6">
          <div className="flex items-center gap-2 text-emerald-300">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold">{t.trust1}</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-300">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold">{t.trust2}</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-300">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold">{t.trust3}</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-300">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold">{t.trust4}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
