import type { Metadata } from "next";
import GalleryPageClient from "../../../components/GalleryPageClient";

const siteUrl = "https://lumbunggrup.id";

export const metadata: Metadata = {
  title: "Galeri | PT Niaga Multi Pangan",
  description: "Lihat fasilitas, proses quality control, dan momen kemitraan PT Niaga Multi Pangan dalam galeri foto kami.",
  openGraph: {
    title: "Galeri | PT Niaga Multi Pangan",
    description: "Lihat fasilitas, proses quality control, dan momen kemitraan PT Niaga Multi Pangan dalam galeri foto kami.",
    url: `${siteUrl}/gallery`,
    type: "website",
  },
};

const galleryCategories = [
  {
    id: "facilities",
    title: "Fasilitas & Gudang",
    description: "Warehouse modern dengan sistem temperature-controlled",
    images: [
      { src: "/tempat_nmp.webp", alt: "Area gudang modern" },
      { src: "/gallery/warehouse/foto-gudang-terbaru.jpeg", alt: "Gudang terbaru" },
      { src: "/machine-shifter.png", alt: "Area mesin shifter" },
      { src: "/machine-cdcs25.png", alt: "Area packaging dan timbang otomatis" },
    ],
  },
  {
    id: "quality-control",
    title: "Quality Control",
    description: "Proses inspeksi dan pengujian kualitas 24/7",
    images: [
      { src: "/machine-color-sorter.png", alt: "Mesin color sorting" },
      { src: "/machine-color-sorter-1.png", alt: "Proses sortir beras" },
      { src: "/machine-cdcs25.png", alt: "Mesin timbang otomatis CDCS25" },
      { src: "/machine-shifter.png", alt: "Mesin shifter untuk quality control" },
    ],
  },
  {
    id: "partnership",
    title: "Kemitraan & Distribusi",
    description: "Produk kami di hotel, restaurant, dan retail nasional",
    images: [
      { src: "/gallery/activities/customer-shigeru.jpg", alt: "Foto bersama customer shigeru" },
      { src: "/gallery/activities/customer-sushi-tei.jpg", alt: "Foto bersama customer sushi tei" },
      { src: "/gallery/activities/customer-marugame.jpg", alt: "Foto bersama customer marugame" },
      { src: "/gallery/activities/foto-bersama-dinas-pangan.jpg", alt: "Foto bersama dinas pangan" },
    ],
  },
  {
    id: "events",
    title: "Event & Training",
    description: "Workshop, cooking demo, dan exhibition",
    images: [
      { src: "/gallery/activities/foto-bersama-petani.jpeg", alt: "Kegiatan bersama petani" },
      { src: "/gallery/harvest/hasil-panen.jpg", alt: "Dokumentasi hasil panen" },
      { src: "/gallery/harvest/hasil-panen-2.jpg", alt: "Proses panen lapangan" },
      { src: "/gallery/harvest/panen-mesin-harvester.jpg", alt: "Panen dengan mesin harvester" },
    ],
  },
  {
    id: "team",
    title: "Team & Culture",
    description: "Orang-orang di balik kesuksesan NMP",
    images: [
      { src: "/gallery/activities/foto-bersama-tim-management.jpg", alt: "Foto bersama tim management" },
      { src: "/team-management.jpg", alt: "Team management NMP" },
    ],
  },
  {
    id: "logistics",
    title: "Fleet & Logistics",
    description: "Armada dan proses distribusi ke seluruh Indonesia",
    images: [
      { src: "/gallery/logistics/armada-pengiriman.jpeg", alt: "Armada pengiriman" },
      { src: "/gallery/logistics/muat-ke-logistik.jpeg", alt: "Proses loading" },
      { src: "/gallery/logistics/muatan-kiriman.jpeg", alt: "Distribusi produk" },
      { src: "/gallery/logistics/pengiriman-ke-gudang-customer.jpeg", alt: "Tracking pengiriman" },
    ],
  },
];

export default function GalleryPage() {
  return <GalleryPageClient categories={galleryCategories} />;
}
