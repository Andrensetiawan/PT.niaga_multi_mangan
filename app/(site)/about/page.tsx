import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";

const primaryImage = "/beras-jepang-5kg.jpeg";
const secondaryImage = "/beras-hitam-1kg.jpeg";

const ownerInfo = {
  name: "Imawan Purnama",
  birth: "Jakarta Selatan, 23 November 1980",
  status: "Menikah",
  education: "Sekolah Tinggi Ilmu Ekonomi dan Perbankan Indonesia",
  roles:
    "Direktur pada PT Lumbung Makanan Utama, PT Niaga Multi Pangan, PT Lumbung Cita Rasa, dan PT Lumbung Isi Lambung",
};

const highlights = [
  {
    value: "2019",
    label: "Mulai Beroperasi",
  },
  {
    value: "24/7",
    label: "Quality Control",
  },
];

const machines = [
  {
    title: "Mesin Color Sorter",
    subtitle: "Untuk proses produksi beras",
    description:
      "Menggunakan mesin sortir terbaik di kelasnya dengan akuisisi gambar canggih dan sistem operasi satu sentuhan untuk menjaga konsistensi warna dan kualitas beras.",
    highlights: [
      "Sistem proses gambar cerdas",
      "Kontrol jarak jauh satu sentuhan",
      "Transmisi kecepatan tinggi dan chute UV anti karat",
      "Katup peniup elektromagnetik berkecepatan tinggi",
      "Sumber cahaya LED kecerahan tinggi",
      "Mode fleksibel untuk berbagai aplikasi",
    ],
    image: "/machine-color-sorter.png",
    imageAlt: "Mesin color sorter Lumbung Group",
  },
  {
    title: "Mesin Timbang Otomatis CDCS25",
    subtitle: "Menjaga presisi filling",
    description:
      "Unit timbang otomatis yang mengukur berat beras secara akurat dan konsisten demi efisiensi lini pengemasan.",
    highlights: [
      "Mengukur berat beras secara presisi",
      "Menghemat waktu",
      "Mengurangi kesalahan manual",
      "Meningkatkan akurasi",
      "Meningkatkan produktivitas",
      "Mengurangi biaya operasional",
    ],
    image: "/machine-cdcs25.png",
    imageAlt: "Mesin timbang otomatis CDCS25",
  },
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

const qcFramework = [
  {
    title: "Incoming Raw Check",
    detail: "Setiap panen diuji kadar air & broken rice menggunakan moisture meter industri.",
    metric: "< 14% moisture",
  },
  {
    title: "Optical Sorting",
    detail: "Sensor RGB & UV menolak butir rusak sehingga head rice ratio terjaga.",
    metric: "98% head rice",
  },
  {
    title: "Metal & Foreign Control",
    detail: "Magnetic trap dan x-ray sampling harian menjauhkan kontaminan logam.",
    metric: "0 ppm metal",
  },
  {
    title: "Final Lab Report",
    detail: "Sertifikat analisa (COA) diterbitkan untuk setiap batch sebelum distribusi.",
    metric: "COA 24 jam",
  },
];

const siteUrl = "https://lumbunggrup.id";

export function generateMetadata(): Metadata {
  const title = "Tentang Lumbung Group | Kurator Kyohikari & Hikaru";
  const description =
    "Pelajari infrastruktur produksi, QC berlapis, dan profil founder PT Lumbung Group untuk memastikan pasokan Kyohikari dan Hikaru Anda aman.";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/about`,
      images: [
        {
          url: `${siteUrl}/owner.png`,
          width: 1200,
          height: 630,
          alt: "Founder Lumbung Group",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/owner.png`],
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-emerald-700">
              The Heritage
            </span>
            <h1 className="serif mb-8 text-5xl font-bold text-emerald-950">
              Elevating Every Grain to Perfection
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-stone-500">
              Kami menyatukan teknologi penyosohan modern dengan standar kurasi yang ketat. Brand premium <strong>Kyohikari</strong> menjaga kemewahan rasa di rumah, sementara <strong>Hikaru</strong> melayani jaringan restoran, hotel, dan industri kuliner berskala besar.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {highlights.map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-black text-emerald-900">{item.value}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-stone-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="relative h-80 overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src={primaryImage}
                  alt="Kyohikari grain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-[2rem] bg-emerald-900 p-8 text-white">
                <Award className="mb-4 h-10 w-10 text-gold-soft" />
                <p className="text-lg font-bold leading-tight">
                  Hanya butiran terbaik yang masuk ke kemasan kami.
                </p>
              </div>
            </div>
            <div className="relative hidden h-96 overflow-hidden rounded-[2rem] shadow-2xl lg:block">
              <Image
                src={secondaryImage}
                alt="Harvest"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="mb-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-700">
              Alat & Mesin
            </span>
            <h2 className="serif text-4xl font-bold text-emerald-950">
              Infrastruktur Produksi PT Lumbung Group
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-stone-600">
              Setiap batch Kyohikari dan Hikaru melalui rangkaian mesin modern agar hasil sortir bersih, pengemasan cepat, dan standar higienitas tetap konsisten.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {machines.map((machine) => (
              <article
                key={machine.title}
                className="rounded-[2rem] border border-emerald-100 bg-white/90 p-8 shadow-sm"
              >
                <div className="mb-6 flex h-52 items-center justify-center rounded-3xl bg-stone-100 p-4">
                  <Image
                    src={machine.image}
                    alt={machine.imageAlt}
                    width={320}
                    height={208}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600">
                  {machine.subtitle}
                </p>
                <h3 className="serif mt-2 text-3xl font-bold text-emerald-950">
                  {machine.title}
                </h3>
                <p className="mt-4 text-base text-stone-600">{machine.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-stone-600">
                  {machine.highlights.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-50 px-5 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-700">
              Quality Control Roadmap
            </span>
            <h2 className="serif text-4xl font-bold text-emerald-950">QC multi-layer untuk batch Kyohikari & Hikaru</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-stone-600">
              Setiap tahap tercatat di lembar QC digital sehingga partner tinggal meminta log untuk audit internal.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {qcFramework.map((stage) => (
              <article key={stage.title} className="rounded-[1.75rem] border border-emerald-100 bg-stone-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600">{stage.metric}</p>
                <h3 className="serif mt-3 text-2xl font-bold text-emerald-950">{stage.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{stage.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {credentialDownloads.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-emerald-900 px-8 py-4 text-center text-xs font-black uppercase tracking-[0.4em] text-white transition hover:bg-emerald-800"
              >
                {doc.label}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-stone-500">
            NPWP & NIB resmi akan dikirimkan langsung oleh tim legal setelah final release.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_320px] lg:items-center">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-700">
              Profil Owner
            </span>
            <h2 className="serif text-4xl font-bold text-emerald-950">
              RD Imawan Purnama
            </h2>
            <p className="mt-4 text-lg text-stone-500">
              Sosok di balik <strong>PT Lumbung Group</strong> yang memastikan setiap lini usaha pangan kami menjaga kualitas, keberlanjutan, dan kepercayaan mitra.
            </p>
            <dl className="mt-10 grid gap-6 text-sm text-stone-600 sm:grid-cols-2">
              <div>
                <dt className="font-bold uppercase tracking-[0.4em] text-stone-400">Nama</dt>
                <dd className="text-lg font-semibold text-emerald-950">{ownerInfo.name}</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-[0.4em] text-stone-400">Status</dt>
                <dd className="text-lg font-semibold text-emerald-950">{ownerInfo.status}</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-[0.4em] text-stone-400">TTL</dt>
                <dd className="text-lg font-semibold text-emerald-950">{ownerInfo.birth}</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-[0.4em] text-stone-400">Pendidikan</dt>
                <dd className="text-lg font-semibold text-emerald-950">{ownerInfo.education}</dd>
              </div>
            </dl>
            <div className="mt-10 rounded-3xl border border-emerald-100 bg-white/70 p-6">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-emerald-700">
                Peran Profesional
              </p>
              <p className="mt-3 text-base text-stone-600">{ownerInfo.roles}</p>
              <div className="mt-6 rounded-2xl bg-emerald-900/5 p-4">
                <p className="text-sm font-semibold text-emerald-900">Butuh bukti legalitas tertulis?</p>
                <p className="mt-1 text-xs text-stone-500">
                  Unduh file resmi perusahaan untuk proses vendor anda.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {credentialDownloads.map((doc) => (
                    <Link
                      key={doc.href}
                      href={doc.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-emerald-200 px-4 py-2 text-center text-[11px] font-black uppercase tracking-[0.4em] text-emerald-900 transition hover:bg-emerald-900 hover:text-white"
                    >
                      {doc.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-[2.5rem] shadow-2xl">
            <Image
              src="/owner.png"
              alt="Owner of Lumbung Group"
              fill
              sizes="(max-width: 768px) 70vw, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

