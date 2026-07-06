import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  DASHBOARD_SESSION_COOKIE,
  DASHBOARD_SESSION_VALUE,
} from "@/lib/auth-constants";

export function middleware(request: NextRequest) {
  const session = request.cookies.get(DASHBOARD_SESSION_COOKIE)?.value;
  const isAuthenticated = session === DASHBOARD_SESSION_VALUE;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard") && !isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/sign-in";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  if (pathname === "/sign-in" && isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/sign-in"],
};
