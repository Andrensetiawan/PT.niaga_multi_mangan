"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FileText, MessageCircle } from "lucide-react";
import type { Product, ProductFilter } from "../lib/data/products";
import { buildProductInquiryLink } from "../lib/data/products";
import { useSiteLocale } from "./useSiteLocale";
import { localizeProduct } from "../lib/product-translation";

interface ProductGridProps {
  products: Product[];
  filters: readonly ProductFilter[];
}

type FilterValue = ProductFilter["value"];

export default function ProductGrid({ products, filters }: ProductGridProps) {
  const { locale } = useSiteLocale();
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const localizedProducts = useMemo(
    () => products.map((product) => localizeProduct(product, locale)),
    [products, locale],
  );

  const filterLabelMap: Record<FilterValue, string> =
    locale === "id"
      ? {
          all: "Semua Produk",
          kyohikari: "Kyohikari",
          hikaru: "Hikaru",
        }
      : {
          all: "All Products",
          kyohikari: "Kyohikari",
          hikaru: "Hikaru",
        };

  const isHikaruProduct = (product: Product) =>
    product.id.startsWith("hikaru") ||
    product.title.toLowerCase().includes("hikaru") ||
    product.badge.toLowerCase().includes("hikaru");

  const visibleProducts =
    activeFilter === "all"
      ? localizedProducts
      : activeFilter === "kyohikari"
        ? localizedProducts.filter((product) => !isHikaruProduct(product))
        : localizedProducts.filter((product) => isHikaruProduct(product));

  return (
    <div className="space-y-16">
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`tab-btn rounded-full border border-stone-200 px-8 py-3 text-xs font-bold uppercase tracking-[0.35em] transition ${
              activeFilter === filter.value ? "active" : "text-emerald-950"
            }`}
          >
            <span className="flex items-center gap-2">
              {filter.logo ? (
                <Image
                  src={filter.logo}
                  alt={`${filterLabelMap[filter.value]} logo`}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full object-cover"
                />
              ) : null}
              <span>{filterLabelMap[filter.value]}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <article
            key={product.id}
            className="product-card rounded-[2.5rem] border border-stone-100 bg-white p-4 shadow-sm"
          >
            <div className="relative mb-8 h-80 w-full overflow-hidden rounded-[2rem] bg-stone-100">
              {product.ribbon && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-emerald-900 px-4 py-1 text-[9px] font-bold uppercase tracking-[0.4em] text-white">
                  {product.ribbon}
                </span>
              )}
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                priority={product.id === "kyohikari-white-2kg"}
              />
            </div>
            <div className="px-4 pb-6">
              <span
                className={`mb-2 block text-[10px] font-bold uppercase tracking-[0.4em] ${product.badgeColor}`}
              >
                {product.badge}
              </span>
              <h4 className="serif mb-3 text-2xl font-bold text-emerald-950">
                {product.title}
              </h4>
              <p className="mb-6 text-sm text-stone-500">{product.description}</p>
              
              {/* B2B Action Buttons */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-900">
                    {product.size}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    href={buildProductInquiryLink(product.title, locale)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-900 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-emerald-800"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{locale === "id" ? "Tanya" : "Inquiry"}</span>
                  </Link>
                  <button
                    className="flex items-center justify-center rounded-full border-2 border-emerald-900 bg-white px-4 py-3 text-emerald-900 transition hover:bg-emerald-50"
                    title={locale === "id" ? "Minta Spec Sheet" : "Request Spec Sheet"}
                  >
                    <FileText className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
