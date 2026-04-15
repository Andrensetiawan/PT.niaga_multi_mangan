import { NextResponse } from "next/server";
import { CMS_COOKIE_NAME } from "../../../../lib/cms-auth";

export async function POST() {
  const response = NextResponse.json({ message: "Logout berhasil." });

  response.cookies.set(CMS_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return response;
}
