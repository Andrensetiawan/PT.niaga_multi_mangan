"use client";

import { Mail, MapPin, Phone, Globe } from "lucide-react";
import ContactForm from "./ContactForm";
import { useSiteLocale } from "./useSiteLocale";

const officePhone = "021-27846285";
const externalWebsite = "https://kyohikari.com";

const copy = {
  id: {
    badge: "Pusat Pengadaan B2B",
    title: "Hubungi Tim Sales NMP",
    desc: "Diskusikan kebutuhan pengadaan volume besar, MOQ fleksibel, dan kemitraan eksklusif langsung dengan spesialis sales kami.",
    contacts: {
      hotline: "Pusat Hotline",
      website: "Website Lain",
      email: "Email Inquiry",
      office: "Kantor Pusat",
    },
  },
  en: {
    badge: "B2B Procurement Desk",
    title: "Contact the NMP Sales Team",
    desc: "Discuss large-volume procurement needs, flexible MOQ, and exclusive partnerships directly with our sales specialist.",
    contacts: {
      hotline: "Hotline Center",
      website: "Other Website",
      email: "Email Inquiry",
      office: "Head Office",
    },
  },
} as const;

export default function ContactPageClient() {
  const { locale } = useSiteLocale();
  const t = copy[locale];

  const contacts = [
    {
      icon: Phone,
      label: t.contacts.hotline,
      value: officePhone,
    },
    {
      icon: Globe,
      label: t.contacts.website,
      value: externalWebsite,
    },
    {
      icon: Mail,
      label: t.contacts.email,
      value: "admin@niagamultipangan.com",
    },
    {
      icon: MapPin,
      label: t.contacts.office,
      value:
        "Jl. Pala I No.50 A, RT.002/RW.001, LKMD, Pd. Cabe Udik, Kec. Pamulang, Kota Tangerang Selatan, Banten 15418",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 to-emerald-900 py-28 text-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-start lg:gap-20">
        <div>
          <span className="mb-4 inline-block rounded-full border border-white/40 px-5 py-2 text-[10px] font-black uppercase tracking-[0.35em] backdrop-blur">
            {t.badge}
          </span>
          <h1 className="serif mb-6 text-4xl font-bold sm:text-5xl">{t.title}</h1>
          <p className="mb-10 text-lg text-emerald-100">{t.desc}</p>

          <div className="mb-12 space-y-6">
            {contacts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                  <Icon className="h-5 w-5 text-emerald-300" />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-300">{label}</p>
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
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
