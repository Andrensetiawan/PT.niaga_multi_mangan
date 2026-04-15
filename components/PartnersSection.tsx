import Image from "next/image";
import { getCmsData } from "../lib/cms-store";

export default async function PartnersSection() {
  const { partners } = await getCmsData();

  return (
    <section className="bg-stone-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-emerald-700">
            Kemitraan Strategis
          </span>
          <h2 className="serif text-4xl font-bold text-emerald-950">
            Dipercaya oleh Mitra Kuliner Terbaik
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-stone-500">
            Brand Horeca nasional hingga jaringan retail spesialis menunjuk NMP sebagai penyedia beras Japonica dan palawija andalan untuk menjaga konsistensi rasa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="rounded-[2rem] border border-stone-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="relative mx-auto h-16 w-full max-w-[180px]">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 180px"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-base font-semibold text-emerald-950">
                {partner.name}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-stone-400">
                {partner.sector}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
