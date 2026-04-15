"use client";

import Image from "next/image";
import { useSiteLocale } from "./useSiteLocale";
import type { Partner } from "../lib/data/partners";

type Props = {
  partners: Partner[];
};

const copy = {
  id: {
    heroBadge: "Kemitraan Strategis",
    heroTitle: "Mitra Kami di Seluruh Indonesia",
    heroDesc:
      "Dipercaya oleh restoran premium, hotel bintang lima, retailer modern, dan distributor profesional di lebih dari 20 provinsi. Bersama menciptakan pengalaman kuliner berkualitas ekspor.",
    statPartners: "Mitra Utama",
    statProvince: "Provinsi",
    statSatisfaction: "Kepuasan",
    statSupport: "Support",
    sectionTitle: "Jaringan Mitra Terpercaya",
    sectionDesc:
      "Mitra kami mencakup berbagai segmen industri dari hospitality premium hingga retail modern yang semuanya berkomitmen pada kualitas terbaik.",
    voiceBadge: "Client Voice",
    voiceTitle: "Apa Kata Mitra Kami",
    voiceDesc: "Testimoni langsung dari procurement managers dan head chefs yang telah bermitra dengan NMP.",
    benefitsTitle: "Mengapa Bergabung dengan NMP?",
    benefitsDesc: "Kami menawarkan lebih dari sekadar produk - kami adalah partner dalam kesuksesan Anda.",
    ctaTitle: "Ingin Menjadi Mitra NMP?",
    ctaDesc: "Hubungi tim partnership kami untuk diskusi peluang kolaborasi yang saling menguntungkan.",
    ctaButton: "Hubungi Kami via WhatsApp",
  },
  en: {
    heroBadge: "Strategic Partnership",
    heroTitle: "Our Partners Across Indonesia",
    heroDesc:
      "Trusted by premium restaurants, five-star hotels, modern retailers, and professional distributors in more than 20 provinces.",
    statPartners: "Key Partners",
    statProvince: "Provinces",
    statSatisfaction: "Satisfaction",
    statSupport: "Support",
    sectionTitle: "Trusted Partner Network",
    sectionDesc:
      "Our partners span industries from premium hospitality to modern retail, all committed to top quality.",
    voiceBadge: "Client Voice",
    voiceTitle: "What Our Partners Say",
    voiceDesc: "Direct testimonials from procurement managers and head chefs partnering with NMP.",
    benefitsTitle: "Why Join NMP?",
    benefitsDesc: "We offer more than products - we are your growth partner.",
    ctaTitle: "Interested in Partnering with NMP?",
    ctaDesc: "Contact our partnership team to discuss mutually beneficial collaboration opportunities.",
    ctaButton: "Contact Us via WhatsApp",
  },
} as const;

export default function PartnersPageClient({ partners }: Props) {
  const { locale } = useSiteLocale();
  const t = copy[locale];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-12">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-2 text-[9px] font-extrabold uppercase tracking-[0.25em] backdrop-blur sm:text-[10px] sm:tracking-[0.35em]">
            {t.heroBadge}
          </div>
          <h1 className="serif mb-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">{t.heroTitle}</h1>
          <p className="mx-auto max-w-2xl text-base text-emerald-100/90 sm:text-lg">{t.heroDesc}</p>
        </div>
      </section>

      <section className="bg-emerald-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8">
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 text-center sm:p-8"><p className="text-3xl font-black text-emerald-950 sm:text-4xl">19+</p><p className="mt-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">{t.statPartners}</p></div>
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 text-center sm:p-8"><p className="text-3xl font-black text-emerald-950 sm:text-4xl">20+</p><p className="mt-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">{t.statProvince}</p></div>
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 text-center sm:p-8"><p className="text-3xl font-black text-emerald-950 sm:text-4xl">98%</p><p className="mt-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">{t.statSatisfaction}</p></div>
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 text-center sm:p-8"><p className="text-3xl font-black text-emerald-950 sm:text-4xl">24/7</p><p className="mt-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">{t.statSupport}</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="mb-16 text-center">
            <h2 className="serif mb-4 text-3xl font-bold text-emerald-950 sm:text-4xl">{t.sectionTitle}</h2>
            <p className="mx-auto max-w-2xl text-stone-600">{t.sectionDesc}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="group rounded-2xl border border-stone-200 bg-white p-4 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg sm:p-6">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-stone-100">
                  <Image src={partner.logo} alt={partner.name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-bold text-stone-900 line-clamp-2">{partner.name}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-emerald-600">{partner.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-stone-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-12">
          <h2 className="serif mb-6 text-3xl font-bold text-emerald-950 sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mb-8 text-lg text-stone-600">{t.ctaDesc}</p>
          <a href="https://wa.me/6285811848112" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-emerald-950 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-emerald-900 active:scale-95">{t.ctaButton}</a>
        </div>
      </section>
    </div>
  );
}
