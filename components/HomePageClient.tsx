"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import StructuredData from "./StructuredData";
import TestimonialsCarousel from "./TestimonialsCarousel";
import WhyChooseSection from "./WhyChooseSection";
import VideoPlayer from "./VideoPlayer";
import type { HomePageContent } from "../lib/data/home";
import { useSiteLocale } from "./useSiteLocale";

type Props = {
  content: HomePageContent;
  organizationSchema: Record<string, unknown>;
  localBusinessSchema: Record<string, unknown>;
};

const copy = {
  id: {
    requestQuotation: "Minta Penawaran",
    bpomCertified: "Tersertifikasi BPOM",
    qualityControl247: "Kontrol Kualitas 24/7",
    nationwideDistribution: "Distribusi Nasional",
    behindTheQuality: "Di Balik Kualitas",
    qualityControl: "Kontrol Kualitas",
    colorSorted: "Disortir Warna",
    certifiedProcess: "Proses Tersertifikasi",
    socialProof: "Bukti Sosial",
    socialProofTitle: "Dipercaya jaringan Horeca dan retail nasional",
    socialProofDescription:
      "98% pengiriman on-time, dokumentasi QC lengkap, dan dukungan edukasi etalase untuk meningkatkan repeat order mitra.",
    heritageBadge: "Warisan Kualitas",
    heritageTitle: "Menyempurnakan Setiap Butir",
    heritageDescription:
      "NMP adalah kurator kualitas. Melalui brand unggulan Kyohikari untuk segmen premium dan Hikaru untuk kebutuhan profesional, kami memastikan ketahanan pangan dengan cita rasa tak tertandingi.",
  },
  en: {
    requestQuotation: "Minta Penawaran",
    bpomCertified: "Tersertifikasi BPOM",
    qualityControl247: "Kontrol Kualitas 24/7",
    nationwideDistribution: "Distribusi Nasional",
    behindTheQuality: "Di Balik Kualitas",
    qualityControl: "Kontrol Kualitas",
    colorSorted: "Disortir Warna",
    certifiedProcess: "Proses Tersertifikasi",
    socialProof: "Bukti Sosial",
    socialProofTitle: "Dipercaya jaringan Horeca dan retail nasional",
    socialProofDescription:
      "98% pengiriman on-time, dokumentasi QC lengkap, dan dukungan edukasi etalase untuk meningkatkan repeat order mitra.",
    heritageBadge: "Warisan Kualitas",
    heritageTitle: "Menyempurnakan Setiap Butir",
    heritageDescription:
      "NMP adalah kurator kualitas. Melalui brand unggulan Kyohikari untuk segmen premium dan Hikaru untuk kebutuhan profesional, kami memastikan ketahanan pangan dengan cita rasa tak tertandingi.",
  },
} as const;

export default function HomePageClient({ content, organizationSchema, localBusinessSchema }: Props) {
  const { locale } = useSiteLocale();
  const t = copy[locale];

  return (
    <div className="relative">
      <section className="hero-gradient relative flex min-h-screen items-center text-white pt-10">
        <div className="absolute inset-0 bg-black/20" aria-hidden />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-32 text-left sm:px-6 sm:text-center">
          {content.hero.badge ? (
            <div className="mb-6 inline-flex items-center justify-center rounded-full border-2 border-white/50 px-6 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.3em] backdrop-blur sm:text-[11px] sm:tracking-[0.4em]">
              {content.hero.badge}
            </div>
          ) : null}

          <h1 className="serif mb-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">{content.hero.titleMain}</span>
            <span className="block text-white/90 text-3xl sm:text-4xl md:text-5xl mt-2">{content.hero.titleSub}</span>
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg text-stone-100 sm:text-xl font-semibold">{content.hero.subheading}</p>
          <p className="mx-auto mb-12 max-w-2xl text-base text-stone-200/80">{content.hero.description}</p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-full bg-white px-10 py-4 text-center text-xs font-bold uppercase tracking-[0.35em] text-emerald-950 shadow-2xl transition hover:bg-emerald-50 sm:w-auto sm:text-sm"
            >
              {t.requestQuotation}
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>{t.bpomCertified}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>{t.qualityControl247}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>{t.nationwideDistribution}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/70 sm:bottom-10">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      <section className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-50 px-5 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-700">
              {t.behindTheQuality}
            </span>
            <h2 className="serif mb-4 text-3xl font-bold text-emerald-950 sm:text-4xl">{content.quality.title}</h2>
            <p className="mx-auto max-w-2xl text-stone-600">{content.quality.description}</p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-stone-200">
              <div className="aspect-video bg-gradient-to-br from-emerald-100 to-stone-100">
                <VideoPlayer videos={content.quality.videoUrls} />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center sm:gap-8">
              <div>
                <p className="text-2xl font-black text-emerald-950 sm:text-3xl">5-Stage</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-stone-600">{t.qualityControl}</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-950 sm:text-3xl">100%</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-stone-600">{t.colorSorted}</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-950 sm:text-3xl">ISO</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-stone-600">{t.certifiedProcess}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseSection />

      <section className="relative bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-700">
              {t.socialProof}
            </span>
            <h2 className="serif text-4xl font-bold text-emerald-950">{t.socialProofTitle}</h2>
            <p className="mt-4 text-stone-500">{t.socialProofDescription}</p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="relative bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-emerald-700">{t.heritageBadge}</span>
            <h2 className="serif mb-6 text-4xl font-bold text-emerald-950">{t.heritageTitle}</h2>
            <p className="text-lg text-stone-500">{t.heritageDescription}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {content.stats.map((stat) => (
              <div key={stat.label} className="rounded-[2rem] bg-emerald-900/5 p-6 sm:p-8 text-center shadow-sm">
                <p className="text-3xl font-black text-emerald-900">{stat.value}</p>
                <p className="text-xs font-extrabold uppercase tracking-[0.4em] text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StructuredData data={[organizationSchema, localBusinessSchema]} id="home-schema" />
    </div>
  );
}