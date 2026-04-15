import { NextResponse } from "next/server";
import {
  CMS_COOKIE_NAME,
  CMS_COOKIE_VALUE,
  validateCmsCredentials,
} from "../../../../lib/cms-auth";

interface LoginBody {
  username?: string;
  password?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBody;

  if (!validateCmsCredentials(body.username ?? "", body.password ?? "")) {
    return NextResponse.json({ message: "Username atau password salah." }, { status: 401 });
  }

  const response = NextResponse.json({ message: "Login berhasil." });
  response.cookies.set(CMS_COOKIE_NAME, CMS_COOKIE_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
