import type { Metadata } from "next";
import ProductGrid from "../../../components/ProductGrid";
import StructuredData from "../../../components/StructuredData";
import { PRODUCTS, PRODUCT_FILTERS } from "../../../lib/data/products";

const siteUrl = "https://lumbunggrup.id";

const productSchemas = PRODUCTS.map((product) => {
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

export function generateMetadata(): Metadata {
  const title = "Produk Kyohikari & Hikaru | Lumbung Group";
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

export default function ProductsPage() {
  return (
    <section className="bg-stone-50 py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-emerald-700">
          Collections
        </span>
        <h1 className="serif mb-6 text-5xl font-bold text-emerald-950">
          Signature Products
        </h1>
        <p className="mx-auto max-w-2xl text-stone-500">
          Diproses dengan teknologi penyosohan mutakhir untuk mempertahankan nutrisi dan kebersihan maksimal.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <ProductGrid products={PRODUCTS} filters={PRODUCT_FILTERS} />
      </div>
      <StructuredData data={productSchemas} id="products-schema" />
    </section>
  );
}
