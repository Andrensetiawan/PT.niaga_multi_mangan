import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PartnersSection from "../../../components/PartnersSection";
import StructuredData from "../../../components/StructuredData";
import TestimonialsCarousel from "../../../components/TestimonialsCarousel";

const heroStats = [
  { label: "Mulai Beroperasi", value: "2019" },
  { label: "Quality Control", value: "24/7" },
];

const credentialDownloads = [
  {
    label: "Download Company Profile",
    href: "/docs/Company-Profile-Lumbung-Group.pdf",
  },
  {
    label: "Biodata Owner & Legalitas",
    href: "/docs/Biodata-Owner-Lumbung-Group.pdf",
  },
];

const siteUrl = "https://lumbunggrup.id";
const logoImage = "/lumbung-group-logo.jpeg";
const showcaseImage = "/beras-jepang-10kg.jpeg";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Lumbung Group",
  url: siteUrl,
  logo: `${siteUrl}${logoImage}`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+62-21-2279-5730",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Pala I No. 50 A.LKMD, Pd Cabe Udik",
    addressLocality: "Tangerang Selatan",
    addressRegion: "Banten",
    postalCode: "15418",
    addressCountry: "ID",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lumbung Group Procurement Desk",
  url: `${siteUrl}/home`,
  telephone: "+62-821-1256-1613",
  priceRange: "$$$",
  servesCuisine: ["Japanese", "Indonesian"],
  areaServed: "Indonesia",
  image: `${siteUrl}${showcaseImage}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Pala I No. 50 A.LKMD, Pd Cabe Udik",
    addressLocality: "Tangerang Selatan",
    addressRegion: "Banten",
    postalCode: "15418",
    addressCountry: "ID",
  },
};

export function generateMetadata(): Metadata {
  const title = "Lumbung Group | Kyohikari & Hikaru Specialist";
  const description =
    "Distributor resmi Kyohikari dan Hikaru dengan dukungan QC 24/7 untuk kebutuhan retail, hotel, dan industri kuliner di Indonesia.";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/home`,
      type: "website",
      images: [
        {
          url: `${siteUrl}${showcaseImage}`,
          width: 1200,
          height: 630,
          alt: "Fasilitas Lumbung Group",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${showcaseImage}`],
    },
  };
}

export default function HomePage() {
  return (
    <div className="relative">
      <section className="hero-gradient relative flex min-h-[90vh] items-center text-white">
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-28 text-left sm:px-6 sm:text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-2 text-[9px] font-extrabold uppercase tracking-[0.25em] backdrop-blur sm:text-[10px] sm:tracking-[0.35em]">
            Mastering the Art of Grains
          </div>
          <h1 className="serif mb-6 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            Standard Premium
            <span className="block text-white/80">Untuk Meja Anda</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base text-stone-100/90 sm:text-lg">
            Lumbung Group menghadirkan Kyohikari dan Hikaru — standar emas beras Japonica dan palawija pilihan dengan kualitas ekspor untuk pasar Indonesia.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/products"
              className="w-full rounded-full bg-white px-10 py-4 text-center text-xs font-bold uppercase tracking-[0.35em] text-emerald-950 shadow-2xl transition hover:bg-emerald-50 sm:w-auto sm:text-sm"
            >
              Lihat Produk
            </Link>
            <Link
              href="/contact"
              className="w-full rounded-full border border-white/60 px-10 py-4 text-center text-xs font-bold uppercase tracking-[0.35em] text-white transition hover:bg-white/10 sm:w-auto sm:text-sm"
            >
              Bicara Dengan Ahli
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/70 sm:bottom-10">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-700">
              Bukti Sosial
            </span>
            <h2 className="serif text-4xl font-bold text-emerald-950">
              Dipercaya jaringan Horeca dan retail nasional
            </h2>
            <p className="mt-4 text-stone-500">
              98% pengiriman on-time, dokumentasi QC lengkap, dan dukungan edukasi etalase untuk meningkatkan repeat order mitra.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-emerald-700">
              The Heritage
            </span>
            <h2 className="serif mb-6 text-4xl font-bold text-emerald-950">
              Elevating Every Grain to Perfection
            </h2>
            <p className="text-lg text-stone-500">
              Lumbung Group adalah kurator kualitas. Melalui brand unggulan <strong>Kyohikari</strong> untuk segmen premium dan <strong>Hikaru</strong> untuk kebutuhan profesional, kami memastikan ketahanan pangan dengan cita rasa tak tertandingi.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2rem] bg-emerald-900/5 p-8 text-center shadow-sm"
              >
                <p className="text-3xl font-black text-emerald-900">{stat.value}</p>
                <p className="text-xs font-extrabold uppercase tracking-[0.4em] text-stone-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />

      <section className="bg-emerald-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-emerald-200">
            Credential Deck
          </span>
          <h2 className="serif text-4xl font-bold">Akses dokumen legal & company profile</h2>
          <p className="mx-auto mt-4 max-w-3xl text-emerald-100/80">
            Gunakan dokumen resmi kami untuk presentasi internal, proses vendor, atau verifikasi awal sebelum kunjungan pabrik.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {credentialDownloads.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full bg-white px-8 py-4 text-center text-xs font-black uppercase tracking-[0.4em] text-emerald-900 transition hover:bg-emerald-100 sm:w-auto"
              >
                {doc.label}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs text-emerald-200">
            NPWP & NIB terbaru akan dibagikan langsung oleh tim legal kami setelah proses finalisasi selesai.
          </p>
        </div>
      </section>

      <StructuredData data={[organizationSchema, localBusinessSchema]} id="home-schema" />
    </div>
  );
}
