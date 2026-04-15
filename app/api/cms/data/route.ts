import { NextResponse } from "next/server";
import { type Product } from "../../../../lib/data/products";
import { type Partner } from "../../../../lib/data/partners";
import { type HomePageContent } from "../../../../lib/data/home";
import { CMS_COOKIE_NAME, isCmsCookieValid } from "../../../../lib/cms-auth";
import { getCmsData, saveCmsData } from "../../../../lib/cms-store";

interface CmsUpdateBody {
  products?: Product[];
  partners?: Partner[];
  home?: HomePageContent;
}

function isAuthorized(request: Request): boolean {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const targetCookie = cookieHeader
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${CMS_COOKIE_NAME}=`));

  if (!targetCookie) {
    return false;
  }

  const cookieValue = targetCookie.split("=")[1];
  return isCmsCookieValid(cookieValue);
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const data = await getCmsData();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as CmsUpdateBody;

  if (!Array.isArray(body.products) || !Array.isArray(body.partners) || !body.home) {
    return NextResponse.json(
      { message: "Format data tidak valid. products, partners, dan home wajib diisi." },
      { status: 400 },
    );
  }

  const nextData = await saveCmsData({
    products: body.products,
    partners: body.partners,
    home: body.home,
  });

  return NextResponse.json({ message: "Data CMS berhasil disimpan.", data: nextData });
}
