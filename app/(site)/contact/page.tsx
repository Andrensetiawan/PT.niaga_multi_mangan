import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "Hotline Center",
    value: "(021) 2279 5730",
  },
  {
    icon: Mail,
    label: "Email Inquiry",
    value: "lumbungmakananutama@gmail.com",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value:
      "Jl. Pala I No. 50 A.LKMD, Pd Cabe Udik, Kec. Pamulang, Kota Tangerang Selatan, Banten 15418",
  },
];

const whatsappLink =
  "https://wa.me/6282112561613?text=Halo%20Lumbung%20Group%2C%20saya%20ingin%20berkonsultasi%20mengenai%20pengadaan.";

const siteUrl = "https://lumbunggrup.id";

export function generateMetadata(): Metadata {
  const title = "Hubungi Lumbung Group | B2B Procurement Desk";
  const description =
    "Terhubung langsung dengan tim penjualan Kyohikari & Hikaru untuk kebutuhan retail, hotel, dan industri dengan respon cepat melalui WhatsApp atau hotline.";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/contact`,
      images: [
        {
          url: `${siteUrl}/owner.png`,
          width: 1200,
          height: 630,
          alt: "Kontak Lumbung Group",
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

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-emerald-950 py-28 text-white">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-12 bg-emerald-900/30 lg:block" aria-hidden />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="serif mb-8 text-5xl font-bold">
            Hubungi Departemen Penjualan Lumbung Group
          </h1>
          <p className="mb-10 text-lg text-emerald-100/80">
            Kami melayani pengadaan B2B untuk restoran, hotel, dan reseller di seluruh Indonesia dengan harga kompetitif.
          </p>
          <div className="space-y-6">
            {contacts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-gold-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">
                    {label}
                  </p>
                  <p className="text-xl font-bold leading-snug">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[3rem] bg-white p-10 text-stone-900 shadow-2xl">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">
                Respons Instan
              </p>
              <h3 className="mt-3 text-2xl font-bold text-emerald-950">
                Chat langsung dengan tim pengadaan kami via WhatsApp.
              </h3>
              <p className="mt-2 text-sm text-stone-500">
                Kirimkan pertanyaan, kebutuhan volume, atau jadwal kunjungan pabrik kapan saja. Kami siap menjawab cepat melalui nomor pribadi owner.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-emerald-900 py-4 text-sm font-black uppercase tracking-[0.4em] text-white transition hover:bg-emerald-800"
            >
              <MessageCircle className="h-5 w-5" />
              Hubungi via WhatsApp
            </a>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm">
              <p className="font-semibold text-emerald-900">Nomor WhatsApp</p>
              <p className="text-stone-600">082112561613</p>
              <p className="mt-2 text-xs text-stone-400">
                *Tidak diperlukan backend tambahan—semua pesan dikirim langsung ke WhatsApp official owner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
