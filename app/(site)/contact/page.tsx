import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle, Globe } from "lucide-react";
import ContactForm from "../../../components/ContactForm";

const officePhone = "021-27846285";
const whatsappNumber = "+62 858-1184-8112";
const externalWebsite = "https://kyohikari.com";

const contacts = [
  {
    icon: Phone,
    label: "Hotline Center",
    value: officePhone,
  },
  {
    icon: Globe,
    label: "Website Lain",
    value: externalWebsite,
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
  "https://wa.me/6285811848112?text=Halo%20Admin!%20%F0%9F%91%8B%0A%0ASaya%20tertarik%20untuk%20membeli%20produk%20%5BNama%20Produk%5D.%20Bolehkah%20dibantu%20untuk%20proses%20pemesanannya%3F";

const siteUrl = "https://lumbunggrup.id";

export function generateMetadata(): Metadata {
  const title = "Hubungi NMP | B2B Procurement Desk";
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
          url: `${siteUrl}/owner.jpg`,
          width: 1200,
          height: 630,
          alt: "Kontak NMP",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/owner.jpg`],
    },
  };
}

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 to-emerald-900 py-28 text-white">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />
      
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-start lg:gap-20">
        {/* Left Column - Contact Info */}
        <div>
          <span className="mb-4 inline-block rounded-full border border-white/40 px-5 py-2 text-[10px] font-black uppercase tracking-[0.35em] backdrop-blur">
            B2B Procurement Desk
          </span>
          <h1 className="serif mb-6 text-4xl font-bold sm:text-5xl">
            Hubungi Tim Sales NMP
          </h1>
          <p className="mb-10 text-lg text-emerald-100">
            Diskusikan kebutuhan procurement volume besar, MOQ fleksibel, dan kerja sama eksklusif langsung dengan sales specialist kami.
          </p>
          
          <div className="space-y-6 mb-12">
            {contacts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                  <Icon className="h-5 w-5 text-emerald-300" />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-300">
                    {label}
                  </p>
                  {value.startsWith("http") ? (
                    <a
                      href={value}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-base font-semibold leading-snug underline underline-offset-4"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base font-semibold leading-snug">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick WhatsApp */}
          <div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur">
            <div className="mb-4 flex items-center gap-3">
              <MessageCircle className="h-6 w-6 text-emerald-300" />
              <p className="text-lg font-bold">Direct WhatsApp Owner</p>
            </div>
            <p className="mb-6 text-sm text-emerald-100">
              Untuk pertanyaan urgent, quotation cepat, atau jadwal kunjungan fasilitas — hubungi langsung via WhatsApp.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-white py-4 px-6 text-sm font-bold uppercase tracking-[0.3em] text-emerald-950 transition hover:bg-emerald-50"
            >
              <MessageCircle className="h-5 w-5" />
              {whatsappNumber}
            </a>
          </div>
        </div>

        {/* Right Column - B2B Inquiry Form */}
        <ContactForm />
      </div>
    </section>
  );
}
