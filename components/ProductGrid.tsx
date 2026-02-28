"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import type { Product, ProductCategory } from "../lib/data/products";
import { CONTACT_WHATSAPP } from "../lib/data/products";

interface ProductGridProps {
  products: Product[];
  filters: readonly { label: string; value: string }[];
}

type FilterValue = "all" | ProductCategory;

export default function ProductGrid({ products, filters }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const visibleProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div className="space-y-16">
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value as FilterValue)}
            className={`tab-btn rounded-full border border-stone-200 px-8 py-3 text-xs font-bold uppercase tracking-[0.35em] transition ${
              activeFilter === filter.value ? "active" : "text-emerald-950"
            }`}
          >
            {filter.label}
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
              <div className="flex items-center justify-between border-t border-stone-100 pt-6">
                <span className="text-xs font-black uppercase tracking-[0.5em] text-emerald-900">
                  {product.size}
                </span>
                <Link
                  href={CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-900 text-white transition hover:scale-110"
                >
                  <ShoppingCart className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
