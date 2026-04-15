"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryCategory = {
  id: string;
  title: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
};

type Props = {
  categories: GalleryCategory[];
};

export default function GalleryWithPreview({ categories }: Props) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="space-y-20">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="mb-8 text-center">
              <h2 className="serif mb-3 text-3xl font-bold text-emerald-950">
                {category.title}
              </h2>
              <p className="text-stone-600">{category.description}</p>
            </div>

            <div className={`grid gap-6 ${category.images.length === 1 ? 'justify-center' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
              {category.images.map((image, index) => (
                <button
                  key={`${category.id}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`group relative overflow-hidden rounded-2xl bg-stone-100 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${category.images.length === 1 ? 'max-w-2xl w-full' : ''}`}
                  aria-label={`Buka preview ${image.alt}`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-sm font-semibold">{image.alt}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-800"
            >
              Tutup
            </button>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <p className="mt-3 text-center text-sm text-white/90">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
