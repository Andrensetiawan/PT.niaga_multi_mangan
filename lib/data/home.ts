export interface HomeHeroContent {
  badge: string;
  titleMain: string;
  titleSub: string;
  subheading: string;
  description: string;
}

export interface HomeStat {
  label: string;
  value: string;
}

export interface HomeCredential {
  label: string;
  href: string;
}

export interface HomeQualityContent {
  title: string;
  description: string;
  videoUrls: string[];
}

export interface HomePageContent {
  hero: HomeHeroContent;
  stats: HomeStat[];
  credentials: HomeCredential[];
  quality: HomeQualityContent;
}

export const DEFAULT_HOME_CONTENT: HomePageContent = {
  hero: {
    badge: "",
    titleMain: "Kyohikari & Hikaru",
    titleSub: "Certified Quality Since 2020",
    subheading: "Partner terpercaya untuk procurement beras Japonica premium",
    description:
      "Melayani hotel chains, restaurant groups, dan modern retail dengan standar QC internasional, logistik nasional, dan konsultasi gratis.",
  },
  stats: [
    { label: "Mitra Utama", value: "19+" },
    { label: "Provinsi", value: "20+" },
    { label: "Kepuasan", value: "98%" },
    { label: "Support", value: "24/7" },
  ],
  credentials: [],
  quality: {
    title: "Proses Kami Menjaga Kualitas",
    description:
      "Lihat langsung bagaimana setiap butir beras Kyohikari diproses dengan standar internasional - dari pemilihan padi hingga pengemasan final.",
    videoUrls: ["/Vidio produk hikaru.mp4", "/Vidio produk kyohikari.mp4"],
  },
};