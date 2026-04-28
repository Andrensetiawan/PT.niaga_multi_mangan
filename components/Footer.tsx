"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, AtSign } from "lucide-react";
import { useSiteLocale } from "./useSiteLocale";

const officePhone = "021-27846285";
const externalWebsite = "https://kyohikari.com";

const copy = {
  id: {
    title: "Spesialis Premium Kyohikari & Hikaru",
    subtitle:
      "Kami membantu restoran, hotel, dan retailer menjaga konsistensi rasa melalui pemilihan butir terbaik dan dukungan pengiriman nasional.",
    legal: "Legalitas",
    followUs: "Ikuti Kami",
    marketplace: "Marketplace",
    ownerDoc: "Lihat Biodata Owner",
    trust1: "BPOM Certified",
    trust2: "ISO 9001 Ready",
    trust3: "24/7 Quality Control",
    trust4: "Nationwide Distribution",
  },
  en: {
    title: "Premium Kyohikari & Hikaru Specialist",
    subtitle:
      "We help restaurants, hotels, and retailers maintain flavor consistency through premium grain selection and nationwide delivery support.",
    legal: "Legal",
    followUs: "Follow Us",
    marketplace: "Marketplace",
    ownerDoc: "View Owner Biodata",
    trust1: "BPOM Certified",
    trust2: "ISO 9001 Ready",
    trust3: "24/7 Quality Control",
    trust4: "Nationwide Distribution",
  },
} as const;

export default function Footer() {
  const { locale } = useSiteLocale();
  const t = copy[locale];

  return (
    <footer className="bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Niaga Multi Pangan
          </p>
          <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-[2rem]">
            {t.title}
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-emerald-100/85">
            {t.subtitle}
          </p>
          <div className="mt-6 space-y-3 text-[15px] leading-7 font-medium text-emerald-50">
            <p><span className="font-semibold text-white">Tel:</span> {officePhone}</p>
            <p><span className="font-semibold text-white">Email:</span> admin@niagamultipangan.com</p>
            <p>
              {locale === "id" ? "Website lain:" : "Other website:"}{" "}
              <a href={externalWebsite} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-emerald-100">
                {externalWebsite}
              </a>
            </p>
            <p>
              {locale === "id" ? "Kantor Pusat:" : "Head Office:"}{" "}
              Jl. Pala I No.50 A, RT.002/RW.001, LKMD, Pd. Cabe Udik, Kec. Pamulang, Kota Tangerang Selatan, Banten 15418
            </p>
          </div>
        </div>

        <div>
          <div className="text-sm text-emerald-200">
            <p>{t.legal}</p>
            <p className="mt-2">&copy; AFD Corp 2026</p>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-6">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
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

            <p className="mb-3 mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
              {t.marketplace}
            </p>
            <div className="flex gap-4">
              <a
                href="https://tk.tokopedia.com/ZSHpmrYkM/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-emerald-100 transition-transform duration-300 hover:-translate-y-0.5"
                aria-label="Tokopedia"
                title="Tokopedia"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-lg backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-white/40">
                  <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#03AC0E]/20 ring-1 ring-[#03AC0E]/50">
                    <Image src="/logo/tokopedia.png" alt="Tokopedia logo" width={32} height={32} className="h-7 w-7 scale-110 object-contain" />
                  </span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200/90">Tokopedia</span>
              </a>
              <a
                href="https://shopee.co.id/nmpfoods"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-emerald-100 transition-transform duration-300 hover:-translate-y-0.5"
                aria-label="Shopee"
                title="Shopee"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-lg backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-white/40">
                  <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#EE4D2D]/20 ring-1 ring-[#EE4D2D]/50">
                    <Image src="/logo/shoope.png" alt="Shopee logo" width={32} height={32} className="h-7 w-7 scale-110 object-contain" />
                  </span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200/90">Shopee</span>
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
