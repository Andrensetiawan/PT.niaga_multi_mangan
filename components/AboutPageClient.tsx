"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { useSiteLocale } from "./useSiteLocale";

const primaryImage = "/tempat_nmp.webp";
const secondaryImage = "/Foto bersama tim management.jpg";

const copy = {
  id: {
    aboutBadge: "TENTANG PERUSAHAAN",
    companyName: "PT Niaga Multi Pangan",
    p1: "PT Niaga Multi Pangan merupakan perusahaan nasional yang bergerak di bidang perdagangan dan distribusi produk pangan. Perusahaan ini mulai aktif beroperasi pada tahun 2020, dengan fokus utama pada penyediaan beras berkualitas bagi pasar Indonesia.",
    p2: "Pada tahap awal, PT Niaga Multi Pangan memulai kegiatan usahanya dengan menyuplai beras ke berbagai supermarket, sebagai upaya menghadirkan produk beras berkualitas yang mudah dijangkau oleh masyarakat.",
    p3: "PT Niaga Multi Pangan juga merupakan distributor tunggal pemegang hak merek untuk beras khusus KYOHIKARI serta produk makanan Jepang premium dengan merek HIKARU.",
    award: "Hanya butiran terbaik yang masuk ke kemasan kami.",
    vision: "Visi",
    visionTitle: "Mendukung Program Ketahanan dan Kedaulatan Pangan Nasional",
    visionDesc: "Kami berkomitmen untuk menjadi bagian penting dalam menjaga stabilitas pasokan pangan berkualitas bagi masyarakat Indonesia.",
    mission: "Misi",
    missionTitle: "Fokus pada Kualitas & Efisiensi",
    missionList: [
      "Penyediaan produk berkualitas tinggi",
      "Efisiensi rantai pasok dari hulu ke hilir",
      "Peningkatan nilai tambah untuk mitra dan pelanggan",
    ],
    machineBadge: "Alat & Mesin",
    machineTitle: "Infrastruktur Produksi PT Niaga Multi Pangan",
    machineDesc: "Setiap batch Kyohikari dan Hikaru melalui rangkaian mesin modern agar hasil sortir bersih, pengemasan cepat, dan standar higienitas tetap konsisten.",
    machine1Subtitle: "Untuk proses produksi beras",
    machine1Desc: "Menggunakan mesin sortir terbaik di kelasnya untuk menjaga konsistensi warna dan kualitas beras.",
    machine2Subtitle: "Menjaga presisi filling",
    machine2Desc: "Unit timbang otomatis yang mengukur berat beras secara akurat dan konsisten demi efisiensi lini pengemasan.",
    qcBadge: "Quality Control Roadmap",
    qcTitle: "QC multi-layer untuk batch Kyohikari & Hikaru",
    qcDesc: "Setiap tahap tercatat di lembar QC digital sehingga partner tinggal meminta log untuk audit internal.",
    qc1: "Setiap panen diuji kadar air & broken rice menggunakan moisture meter industri.",
    qc2: "Sensor RGB & UV menolak butir rusak sehingga head rice ratio terjaga.",
    qc3: "Magnetic trap dan x-ray sampling harian menjauhkan kontaminan logam.",
    qc4: "Sertifikat analisa (COA) diterbitkan untuk setiap batch sebelum distribusi.",
    highlight1: "Mulai Beroperasi",
    highlight2: "Quality Control",
  },
  en: {
    aboutBadge: "ABOUT THE COMPANY",
    companyName: "PT Niaga Multi Pangan",
    p1: "PT Niaga Multi Pangan is an Indonesian company focused on food trading and distribution, operating since 2020 with a primary focus on quality rice supply.",
    p2: "In the early stage, the company supplied rice to supermarkets and later expanded to HORECA and Japanese restaurants requiring high quality standards.",
    p3: "PT Niaga Multi Pangan is also the exclusive rights holder and distributor for KYOHIKARI specialty rice and premium Japanese food products under HIKARU.",
    award: "Only the best grains make it into our packaging.",
    vision: "Vision",
    visionTitle: "Supporting National Food Security and Sovereignty",
    visionDesc: "We are committed to playing a key role in maintaining stable access to quality food supply in Indonesia.",
    mission: "Mission",
    missionTitle: "Focused on Quality and Efficiency",
    missionList: [
      "Deliver high-quality food products",
      "Optimize end-to-end supply-chain efficiency",
      "Create added value for partners and customers",
    ],
    machineBadge: "Equipment & Machines",
    machineTitle: "PT Niaga Multi Pangan Production Infrastructure",
    machineDesc: "Each Kyohikari and Hikaru batch passes through a modern processing chain for clean sorting and consistent hygiene standards.",
    machine1Subtitle: "For rice production process",
    machine1Desc: "Uses top-class sorting technology to maintain color consistency and grain quality.",
    machine2Subtitle: "Maintaining filling precision",
    machine2Desc: "Automatic weighing unit that measures rice weight accurately for efficient packaging lines.",
    qcBadge: "Quality Control Roadmap",
    qcTitle: "Multi-layer QC for Kyohikari & Hikaru batches",
    qcDesc: "Each stage is recorded in digital QC logs for transparent internal audits.",
    qc1: "Each harvest is tested for moisture and broken-rice ratio using industry-grade tools.",
    qc2: "RGB and UV sensors reject damaged grains to maintain head-rice ratio.",
    qc3: "Magnetic trap and daily x-ray sampling reduce contamination risk.",
    qc4: "Certificate of Analysis (COA) is issued for each batch before distribution.",
    highlight1: "Operating Since",
    highlight2: "Quality Control",
  },
} as const;

export default function AboutPageClient() {
  const { locale } = useSiteLocale();
  const t = copy[locale];

  return (
    <>
      <section className="relative bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-700">{t.aboutBadge}</span>
            <h1 className="serif mb-8 text-4xl font-bold text-emerald-950">{t.companyName}</h1>
            <p className="mb-6 text-base leading-relaxed text-stone-500">{t.p1}</p>
            <p className="mb-6 text-base leading-relaxed text-stone-500">{t.p2}</p>
            <p className="mb-8 text-base leading-relaxed text-stone-500">{t.p3}</p>
            <div className="grid grid-cols-2 gap-8">
              <div><p className="text-2xl font-black text-emerald-900">2020</p><p className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400">{t.highlight1}</p></div>
              <div><p className="text-2xl font-black text-emerald-900">24/7</p><p className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400">{t.highlight2}</p></div>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="relative h-80 overflow-hidden rounded-[2rem] shadow-2xl"><Image src={primaryImage} alt="Kyohikari grain" fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover" /></div>
              <div className="rounded-[2rem] bg-emerald-900 p-8 text-white"><Award className="mb-4 h-10 w-10 text-gold-soft" /><p className="text-base font-bold leading-tight">{t.award}</p></div>
            </div>
            <div className="relative hidden h-96 overflow-hidden rounded-[2rem] shadow-2xl lg:block"><Image src={secondaryImage} alt="Harvest" fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover" /></div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-emerald-900 to-emerald-800 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gold-soft/20 px-4 py-2"><span className="text-sm font-black uppercase tracking-[0.4em] text-gold-soft">{t.vision}</span></div>
              <h3 className="serif text-3xl font-bold leading-tight text-white">{t.visionTitle}</h3>
              <p className="mt-6 text-base leading-relaxed text-white">{t.visionDesc}</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gold-soft/20 px-4 py-2"><span className="text-sm font-black uppercase tracking-[0.4em] text-gold-soft">{t.mission}</span></div>
              <h3 className="serif text-3xl font-bold leading-tight text-white">{t.missionTitle}</h3>
              <ul className="mt-6 space-y-4">
                {t.missionList.map((item) => (<li key={item} className="flex gap-3 text-base text-white"><span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-gold-soft" /><span>{item}</span></li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-emerald-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="mb-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[9px] font-black uppercase tracking-[0.4em] text-emerald-700">{t.machineBadge}</span>
            <h2 className="serif text-3xl font-bold text-emerald-950">{t.machineTitle}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-stone-600">{t.machineDesc}</p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-emerald-100 bg-white/90 p-8 shadow-sm">
              <div className="mb-6 flex h-72 items-center justify-center rounded-3xl bg-stone-100 p-4"><Image src="/machine-color-sorter.png" alt="Mesin color sorter NMP" width={480} height={320} className="h-full w-auto object-contain" /></div>
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-600">{t.machine1Subtitle}</p>
              <h3 className="serif mt-2 text-2xl font-bold text-emerald-950">Mesin Color Sorter</h3>
              <p className="mt-4 text-sm text-stone-600">{t.machine1Desc}</p>
            </article>
            <article className="rounded-[2rem] border border-emerald-100 bg-white/90 p-8 shadow-sm">
              <div className="mb-6 flex h-72 items-center justify-center rounded-3xl bg-stone-100 p-4"><Image src="/machine-cdcs25.png" alt="Mesin timbang otomatis CDCS25" width={480} height={320} className="h-full w-auto object-contain" /></div>
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-600">{t.machine2Subtitle}</p>
              <h3 className="serif mt-2 text-2xl font-bold text-emerald-950">Mesin Timbang Otomatis CDCS25</h3>
              <p className="mt-4 text-sm text-stone-600">{t.machine2Desc}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-50 px-5 py-2 text-[9px] font-black uppercase tracking-[0.4em] text-emerald-700">{t.qcBadge}</span>
            <h2 className="serif text-3xl font-bold text-emerald-950">{t.qcTitle}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-stone-600">{t.qcDesc}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { title: "Incoming Raw Check", metric: "< 14% moisture", detail: t.qc1 },
              { title: "Optical Sorting", metric: "98% head rice", detail: t.qc2 },
              { title: "Metal & Foreign Control", metric: "0 ppm metal", detail: t.qc3 },
              { title: "Final Lab Report", metric: "COA 24 jam", detail: t.qc4 },
            ].map((stage) => (
              <article key={stage.title} className="rounded-[1.75rem] border border-emerald-100 bg-stone-50 p-6">
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-600">{stage.metric}</p>
                <h3 className="serif mt-3 text-xl font-bold text-emerald-950">{stage.title}</h3>
                <p className="mt-2 text-[13px] text-stone-600">{stage.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
