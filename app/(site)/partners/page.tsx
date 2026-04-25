import type { Metadata } from "next";
import PartnersPageClient from "../../../components/PartnersPageClient";
import { getCmsData } from "../../../lib/cms-store";

export const metadata: Metadata = {
  title: "Our Partners | NMP - Niaga Multi Pangan",
  description:
    "NMP's strategic partner network across Indonesia includes premium restaurants, retail, hotels, and professional distributors that trust Kyohikari and Hikaru.",
};

export default async function PartnersPage() {
  const { partners, partnersPage } = await getCmsData();

  return <PartnersPageClient partners={partners} content={partnersPage} />;
}
