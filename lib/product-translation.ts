import type { Product } from "./data/products";
import type { SiteLocale } from "../components/useSiteLocale";

type ProductLocaleOverride = Partial<
  Pick<Product, "title" | "badge" | "description" | "ribbon">
>;

const productEnglishOverrides: Record<string, ProductLocaleOverride> = {
  "kyohikari-white-2kg": {
    title: "Kyohikari Rice 2KG",
    badge: "Premium White Rice",
    description:
      "2KG pack ideal for small families who prioritize fluffy texture and a clean aroma.",
  },
  "kyohikari-black": {
    title: "Kyohikari Black Rice",
    badge: "Premium Black Rice",
    description:
      "Aromatic black rice rich in antioxidants and natural anthocyanins for high-nutrition dishes.",
  },
  "kyohikari-mung": {
    title: "Kyohikari Mung Bean",
    badge: "Premium Pulses",
    description:
      "High-quality peeled mung beans, clean from husk residue and broken grains. Suitable for modern desserts.",
  },
  "kyohikari-merah": {
    title: "Kyohikari Red Bean",
    badge: "Premium Pulses",
    description:
      "Selected red beans with uniform sizing for soups and premium desserts.",
  },
  "kyohikari-jogo": {
    title: "Kyohikari Jogo Bean",
    badge: "Premium Pulses",
    description:
      "Premium-quality kidney beans rich in nutrients and plant-based protein.",
  },
  "kyohikari-peanut": {
    title: "Kyohikari Peanut",
    badge: "Premium Grains",
    description:
      "Clean peeled peanuts, fresh and ready to process for savory or sweet applications.",
  },
  "kyohikari-soy": {
    title: "Kyohikari Soybean",
    badge: "Premium Grains",
    description:
      "Selected non-GMO yellow soybeans for high-quality soy milk and tofu with rich umami notes.",
  },
  "kyohikari-tolo": {
    title: "Kyohikari Cowpea",
    badge: "Premium Grains",
    description:
      "Export-grade cowpeas with clean sorting and optimal dryness for food businesses.",
  },
  "kyohikari-chuka": {
    title: "Kyohikari Chuka Wakame",
    badge: "Japanese Side Dish",
    description:
      "Ready-to-serve chuka wakame with fresh umami flavor, suitable as a side dish for Japanese restaurants, sushi bars, and rice bowls.",
  },
  "kyohikari-red": {
    title: "Kyohikari Red Rice",
    badge: "Specialty Healthy Rice",
    description:
      "Selected red rice with high fiber, processed to stay tender when cooked and rich in nutrients.",
  },
  "hikaru-5": {
    title: "Hikaru Rice 5KG",
    badge: "Resto & Hotel Line",
    description:
      "5KG pack for restaurant and professional kitchen needs with consistent quality.",
    ribbon: "Professional Use",
  },
  "hikaru-10": {
    title: "Hikaru Rice 10KG",
    badge: "Resto & Hotel Line",
    description:
      "Rice specification for hotels and Japanese restaurants with a high head-rice ratio for perfect plating.",
    ribbon: "Professional Use",
  },
  "hikaru-20": {
    title: "Hikaru Rice 20KG",
    badge: "Supply Chain Line",
    description:
      "20KG pack for large kitchens and distribution with stable supply.",
    ribbon: "Industrial Scale",
  },
  "hikaru-25": {
    title: "Hikaru Rice 25KG",
    badge: "Supply Chain Line",
    description:
      "Economical packaging for large kitchens, catering, and food industry networks.",
    ribbon: "Industrial Scale",
  },
  "hikaru-tobiko-green": {
    title: "Hikaru Tobiko Green",
    badge: "Green Flying Fish Roe",
    description:
      "Premium green tobiko with a crunchy texture and fresh umami taste. Ideal for sushi, sashimi, rice bowls, and salads. Keep frozen.",
    ribbon: "Premium Seafood",
  },
  "hikaru-tobiko-orange": {
    title: "Hikaru Tobiko Orange Flying Fish Roe",
    badge: "Orange Flying Fish Roe",
    description:
      "Premium orange tobiko with a crunchy texture and fresh umami taste. Suitable for sushi, gunkan, sashimi, rice bowls, and salads. Keep frozen.",
    ribbon: "Premium Seafood",
  },
  "hikaru-tobiko-black": {
    title: "Hikaru Tobiko Black (Black) Flying Fish Roe",
    badge: "Flying Fish Roe Premium",
    description:
      "Premium black tobiko with a crunchy texture and fresh umami taste. Suitable for sushi, sashimi, rice bowls, gunkan, and salads. Keep frozen.",
    ribbon: "Premium Seafood",
  },
  "hikaru-chuka-kurage": {
    title: "Hikaru Chuka Kurage - Seasoned Jellyfish Salad",
    badge: "Hikaru",
    description:
      "Chuka Kurage is a seasoned jellyfish salad with a savory, fresh, slightly sweet taste and a crunchy-chewy texture.",
  },
  "hikaru-chuka-idako": {
    title: "Hikaru Chuka Idako - Seasoned Baby Octopus",
    badge: "Hikaru",
    description:
      "Chuka Idako is a Japanese-style seasoned baby octopus dish with a signature sweet-savory flavor.",
  },
  "hikaru-chuka-wakame": {
    title: "Hikaru Chuka Wakame - Seaweed Salad",
    badge: "Hikaru",
    description:
      "Chuka Wakame is a seasoned seaweed salad with a savory, fresh, slightly sweet taste and a chewy texture.",
  },
};

const exactTranslationMap: Record<string, string> = {
  "Semua Produk": "All Products",
  "Beras Spesial": "Specialty Rice",
  Palawija: "Professional Grains",
};

const replacementRules: Array<[RegExp, string]> = [
  [/\bKemasan\b/g, "Pack"],
  [/\bkemasan\b/g, "pack"],
  [/\buntuk\b/gi, "for"],
  [/\bdengan\b/gi, "with"],
  [/\bdan\b/gi, "and"],
  [/\bcocok\b/gi, "suitable"],
  [/\bkebutuhan\b/gi, "needs"],
  [/\bgurih\b/gi, "umami"],
  [/\bsegar\b/gi, "fresh"],
  [/\bsiap saji\b/gi, "ready-to-serve"],
  [/\bsimpan dalam freezer\b/gi, "keep frozen"],
  [/\bkualitas\b/gi, "quality"],
  [/\bkonsisten\b/gi, "consistent"],
];

function normalize(input: string): string {
  return input.trim().replace(/\s+/g, " ").toLowerCase();
}

function translateTextToEnglish(input: string): string {
  if (!input.trim()) {
    return input;
  }

  const exactKey = normalize(input);
  for (const [source, target] of Object.entries(exactTranslationMap)) {
    if (normalize(source) === exactKey) {
      return target;
    }
  }

  let output = input;
  for (const [pattern, replacement] of replacementRules) {
    output = output.replace(pattern, replacement);
  }

  return output;
}

export function localizeProduct(product: Product, locale: SiteLocale): Product {
  if (locale === "id") {
    return product;
  }

  const override = productEnglishOverrides[product.id] ?? {};

  return {
    ...product,
    title: override.title ?? translateTextToEnglish(product.title),
    badge: override.badge ?? translateTextToEnglish(product.badge),
    description: override.description ?? translateTextToEnglish(product.description),
    ribbon: override.ribbon ?? (product.ribbon ? translateTextToEnglish(product.ribbon) : product.ribbon),
  };
}