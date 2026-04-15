import type { Metadata } from "next";
import ProductsPageClient from "../../../components/ProductsPageClient";
import { getCmsData } from "../../../lib/cms-store";

const siteUrl = "https://lumbunggrup.id";

export function generateMetadata(): Metadata {
  const title = "Produk Kyohikari & Hikaru | NMP";
  const description =
    "Jelajahi katalog beras Japonica dan palawija profesional kami, lengkap dengan opsi filter untuk retail, Horeca, dan manufaktur.";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/products`,
      images: [
        {
          url: `${siteUrl}/beras-jepang-5kg.jpeg`,
          width: 1200,
          height: 630,
          alt: "Katalog Produk Kyohikari",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/beras-jepang-5kg.jpeg`],
    },
  };
}

export default async function ProductsPage() {
  const { products } = await getCmsData();
  const productSchemas = products.map((product) => {
    const brand = product.category === "hikaru" ? "Hikaru" : "Kyohikari";
    const image = product.image.startsWith("http")
      ? product.image
      : `${siteUrl}${product.image}`;

    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.title,
      description: product.description,
      brand: {
        "@type": "Brand",
        name: brand,
      },
      image,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "IDR",
        url: `${siteUrl}/products`,
      },
    };
  });

  return <ProductsPageClient products={products} productSchemas={productSchemas} />;
}
