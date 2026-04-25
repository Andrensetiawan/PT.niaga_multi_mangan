import type { Metadata } from "next";
import ContactPageClient from "../../../components/ContactPageClient";

const siteUrl = "https://lumbunggrup.id";

export function generateMetadata(): Metadata {
  const title = "Contact NMP | B2B Procurement Desk";
  const description =
    "Connect directly with the Kyohikari & Hikaru sales team for retail, hotel, and industrial needs with fast responses via WhatsApp or hotline.";

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
          alt: "NMP contact",
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
  return <ContactPageClient />;
}
