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
  videoLayout: "alternate" | "2" | "3" | "4";
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
    subheading: "Trusted partner for premium Japonica rice procurement",
    description:
      "Serving hotel chains, restaurant groups, and modern retail with international QC standards, nationwide logistics, and free consultation.",
  },
  stats: [
    { label: "Key Partners", value: "19+" },
    { label: "Provinces", value: "20+" },
    { label: "Satisfaction", value: "98%" },
    { label: "Support", value: "24/7" },
  ],
  credentials: [],
  quality: {
    title: "How We Maintain Quality",
    description:
      "See how every Kyohikari grain is processed to international standards - from paddy selection to final packaging.",
    videoUrls: ["/Vidio/Vidio produk hikaru.mp4", "/Vidio/Vidio produk kyohikari.mp4"],
    videoLayout: "2",
  },
};