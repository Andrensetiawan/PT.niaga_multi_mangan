import type { Metadata } from "next";
import AboutPageClient from "../../../components/AboutPageClient";

const siteUrl = "https://lumbunggrup.id";

export function generateMetadata(): Metadata {
  const title = "Tentang NMP | Kurator Kyohikari & Hikaru";
  const description =
    "Pelajari infrastruktur produksi, QC berlapis, dan profil founder PT Niaga Multi Pangan untuk memastikan pasokan Kyohikari dan Hikaru Anda aman.";

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
          url: `${siteUrl}/owner.jpg`,
          width: 1200,
          height: 630,
          alt: "Founder NMP",
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

export default function AboutPage() {
  return <AboutPageClient />;
}
