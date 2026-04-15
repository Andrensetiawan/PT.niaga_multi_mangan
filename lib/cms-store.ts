import "server-only";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { unstable_cache, revalidateTag } from "next/cache";
import { partners as defaultPartners, type Partner } from "./data/partners";
import { PRODUCTS as defaultProducts, type Product } from "./data/products";
import { DEFAULT_HOME_CONTENT, type HomePageContent } from "./data/home";

interface CmsData {
  products: Product[];
  partners: Partner[];
  home: HomePageContent;
  updatedAt: string;
}

const cmsFilePath = path.join(process.cwd(), "FILE", "cms-data.json");
const CMS_DATA_TAG = "cms-data";

function getDefaultCmsData(): CmsData {
  return {
    products: defaultProducts,
    partners: defaultPartners,
    home: DEFAULT_HOME_CONTENT,
    updatedAt: new Date().toISOString(),
  };
}

function isValidProductArray(value: unknown): value is Product[] {
  return Array.isArray(value);
}

function isValidPartnerArray(value: unknown): value is Partner[] {
  return Array.isArray(value);
}

function isValidHomeContent(value: unknown): value is HomePageContent {
  if (!value || typeof value !== "object") {
    return false;
  }

  const target = value as Partial<HomePageContent>;

  return (
    !!target.hero &&
    !!target.quality &&
    Array.isArray(target.stats) &&
    Array.isArray(target.credentials) &&
    typeof target.hero.badge === "string" &&
    typeof target.hero.titleMain === "string" &&
    typeof target.hero.titleSub === "string" &&
    typeof target.hero.subheading === "string" &&
    typeof target.hero.description === "string" &&
    typeof target.quality.title === "string" &&
    typeof target.quality.description === "string" &&
    Array.isArray(target.quality.videoUrls)
  );
}

async function readCmsDataFromFile(): Promise<CmsData> {
  try {
    const raw = await readFile(cmsFilePath, "utf8");
    const parsed = JSON.parse(raw) as Partial<CmsData>;

    if (!isValidProductArray(parsed.products) || !isValidPartnerArray(parsed.partners)) {
      return getDefaultCmsData();
    }

    return {
      products: parsed.products,
      partners: parsed.partners,
      home: isValidHomeContent(parsed.home) ? parsed.home : DEFAULT_HOME_CONTENT,
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
    };
  } catch {
    return getDefaultCmsData();
  }
}

const getCachedCmsData = unstable_cache(readCmsDataFromFile, ["cms-data"], {
  tags: [CMS_DATA_TAG],
  revalidate: 60,
});

export async function getCmsData(): Promise<CmsData> {
  return getCachedCmsData();
}

export async function saveCmsData(input: {
  products: Product[];
  partners: Partner[];
  home: HomePageContent;
}): Promise<CmsData> {
  const nextData: CmsData = {
    products: input.products,
    partners: input.partners,
    home: input.home,
    updatedAt: new Date().toISOString(),
  };

  await mkdir(path.dirname(cmsFilePath), { recursive: true });
  await writeFile(cmsFilePath, `${JSON.stringify(nextData, null, 2)}\n`, "utf8");
  revalidateTag(CMS_DATA_TAG, "max");

  return nextData;
}
