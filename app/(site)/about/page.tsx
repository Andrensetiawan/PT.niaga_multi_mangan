import type { Metadata } from "next";
import AboutPageClient from "../../../components/AboutPageClient";
import { getCmsData } from "../../../lib/cms-store";

const siteUrl = "https://lumbunggrup.id";

export function generateMetadata(): Metadata {
  const title = "About NMP | Kyohikari & Hikaru Curator";
  const description =
    "Learn about our production infrastructure, layered QC, and PT Niaga Multi Pangan founder profile to ensure your Kyohikari and Hikaru supply is secure.";

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
          alt: "NMP founder",
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

export default async function AboutPage() {
  const { about } = await getCmsData();
  return <AboutPageClient content={about} />;
}
