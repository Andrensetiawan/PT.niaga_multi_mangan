"use client";

import Image from "next/image";
import { Shield, Truck, HeadphonesIcon, Award } from "lucide-react";
import Link from "next/link";
import { useSiteLocale } from "./useSiteLocale";

const benefits = [
  {
    icon: Shield,
    title: "Kontrol Kualitas Tersertifikasi",
    description: "Setiap batch Kyohikari dan Hikaru melalui 4 lapis inspeksi QC dengan standar BPOM dan keamanan pangan internasional. Tim QC kami bekerja 24/7 untuk memastikan tanpa cacat.",
    stat: "Tingkat Lolos 98%",
  },
  {
    icon: Truck,
    title: "Jaringan Logistik Nasional",
    description: "Armada distribusi dengan kontrol suhu ke 20+ provinsi dan sistem pelacakan real-time. Lead time 3-7 hari dengan garansi kesegaran produk sampai lokasi Anda.",
    stat: "20+ Provinsi",
  },
  {
    icon: HeadphonesIcon,
    title: "Dukungan B2B Khusus",
    description: "Meja procurement khusus untuk volume besar, konsultasi menu engineering, dan dukungan purna jual. Responsif via WhatsApp atau jalur langsung untuk pesanan mendesak.",
    stat: "Respon < 2 Jam",
  },
  {
    icon: Award,
    title: "Dipercaya Sejak 2020",
    description: "Dipercaya oleh jaringan hotel, grup restoran, dan retail modern untuk menjaga konsistensi pasokan. Portofolio mitra kami mencakup nama-nama besar di industri hospitality Indonesia.",
    stat: "19+ Klien Utama",
  },
];

const copy = {
  id: {
    badge: "Mengapa Bermitra dengan Kami",
    title: "Mengapa Memilih Niaga Multi Pangan?",
    description:
      "Lebih dari sekadar distributor, kami adalah partner strategis yang memahami tantangan procurement di industri hospitality dan retail modern.",
    successStory: "Kisah Sukses",
    successTitle: '"Konsistensi rasa yang sama setiap bulannya"',
    successDescription:
      "Hotel chain dengan 12 outlet di Jakarta & Bali memilih Kyohikari sebagai exclusive rice partner sejak 2019. Volume procurement mencapai 2 ton/bulan dengan zero complaint record.",
    personRole: "Manajer Procurement, Premium Hotel Group",
    monthlyVolume: "Volume Bulanan",
    nationwideCoverage: "Cakupan Nasional",
    since2019: "Sejak 2019",
    allPartners: "Lihat Semua Mitra",
    ctaTitle: "Siap untuk Kemitraan?",
    ctaDescription:
      "Diskusikan kebutuhan procurement Anda langsung dengan tim sales kami. Kami siap support mulai dari sample testing, trial order, hingga kontrak tahunan.",
    scheduleConsultation: "Jadwalkan Konsultasi",
    whatsappNow: "WhatsApp Sekarang",
  },
  en: {
    badge: "Mengapa Bermitra dengan Kami",
    title: "Mengapa Memilih Niaga Multi Pangan?",
    description:
      "Lebih dari sekadar distributor, kami adalah partner strategis yang memahami tantangan procurement di industri hospitality dan retail modern.",
    successStory: "Kisah Sukses",
    successTitle: '"Konsistensi rasa yang sama setiap bulannya"',
    successDescription:
      "Hotel chain dengan 12 outlet di Jakarta & Bali memilih Kyohikari sebagai exclusive rice partner sejak 2019. Volume procurement mencapai 2 ton/bulan dengan zero complaint record.",
    personRole: "Manajer Procurement, Premium Hotel Group",
    monthlyVolume: "Volume Bulanan",
    nationwideCoverage: "Cakupan Nasional",
    since2019: "Sejak 2019",
    allPartners: "Lihat Semua Mitra",
    ctaTitle: "Siap untuk Kemitraan?",
    ctaDescription:
      "Diskusikan kebutuhan procurement Anda langsung dengan tim sales kami. Kami siap support mulai dari sample testing, trial order, hingga kontrak tahunan.",
    scheduleConsultation: "Jadwalkan Konsultasi",
    whatsappNow: "WhatsApp Sekarang",
  },
} as const;

export default function WhyChooseSection() {
  const { locale } = useSiteLocale();
  const t = copy[locale];

  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-emerald-50 px-5 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-700">
            {t.badge}
          </span>
          <h2 className="serif mb-6 text-4xl font-bold text-emerald-950 sm:text-5xl">
            {t.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-stone-600">
            {t.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-stone-200 bg-gradient-to-br from-white to-emerald-50/30 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-900 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <benefit.icon size={28} strokeWidth={2} />
                </div>
                <div className="rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-900">
                  {benefit.stat}
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-emerald-950">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Case Study Teaser */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-800 p-10 text-white shadow-2xl sm:p-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">
                {t.successStory}
              </span>
              <h3 className="serif mb-4 text-3xl font-bold sm:text-4xl">
                {t.successTitle}
              </h3>
              <p className="mb-6 text-emerald-100">
                {t.successDescription}
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/10">
                  <Image
                    src="/fake/budi-santoso-fake.svg"
                    alt="Foto profil Budi Santoso"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Budi Santoso</p>
                  <p className="text-sm text-emerald-200">{t.personRole}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-3xl font-black">2 Ton</p>
                <p className="text-sm text-emerald-200">{t.monthlyVolume}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-3xl font-black">12 Outlets</p>
                <p className="text-sm text-emerald-200">{t.nationwideCoverage}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-3xl font-black">0 Complaints</p>
                <p className="text-sm text-emerald-200">{t.since2019}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/partners"
              className="inline-block rounded-full border-2 border-white/80 px-8 py-3 text-xs font-bold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
            >
              {t.allPartners}
            </Link>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl border-2 border-dashed border-emerald-200 bg-emerald-50 p-8 text-center sm:p-12">
          <h3 className="serif mb-4 text-2xl font-bold text-emerald-950 sm:text-3xl">
            {t.ctaTitle}
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-stone-600">
            {t.ctaDescription}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-emerald-950 px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-900"
            >
              {t.scheduleConsultation}
            </Link>
            <a
              href="https://wa.me/6285811848112?text=Halo%20NMP%2C%20saya%20ingin%20diskusi%20procurement"
              target="_blank"
              className="inline-block rounded-full border-2 border-emerald-950 px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-emerald-950 transition hover:bg-emerald-100"
            >
              {t.whatsappNow}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
