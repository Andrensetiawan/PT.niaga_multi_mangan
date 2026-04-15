import type { Metadata } from "next";
import PartnersPageClient from "../../../components/PartnersPageClient";
import { getCmsData } from "../../../lib/cms-store";

export const metadata: Metadata = {
  title: "Mitra Kami | NMP - Niaga Multi Pangan",
  description:
    "Jaringan mitra strategis NMP di seluruh Indonesia meliputi restoran premium, retail, hotel, dan distributor profesional yang mempercayai Kyohikari dan Hikaru.",
};

export default async function PartnersPage() {
  const { partners } = await getCmsData();

  return <PartnersPageClient partners={partners} />;
}
