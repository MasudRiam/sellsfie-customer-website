import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("jwt")?.value || "";

  const pathname = request.nextUrl.pathname;

  // this is a simple auth check for protected routes. You can expand this logic as needed.
  if (!token && (pathname.startsWith("/profile"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Otherwise, continue normally
  return NextResponse.next();
}

// Run only on routes
export const config = {
  matcher: ["/profile/:path*"], 
};