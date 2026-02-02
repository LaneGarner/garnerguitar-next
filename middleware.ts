import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isProduction = process.env.NODE_ENV === "production";
  const path = request.nextUrl.pathname;

  // In production, redirect all beginner-to-advanced subpaths to the category page
  // This prevents direct access to lesson content
  if (
    isProduction &&
    path.startsWith("/courses/beginner-to-advanced/") &&
    path !== "/courses/beginner-to-advanced"
  ) {
    return NextResponse.redirect(
      new URL("/courses/beginner-to-advanced", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/courses/beginner-to-advanced/:path*",
};
