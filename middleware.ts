import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  // Update the Supabase session (refreshes tokens if needed)
  const response = await updateSession(request);

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes that don't need auth
    "/((?!_next/static|_next/image|favicon.ico|images|api/webhooks).*)",
  ],
};
