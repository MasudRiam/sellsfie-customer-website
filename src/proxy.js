import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("jwt")?.value || "";

  const pathname = request.nextUrl.pathname;

  // If no token and user tries to access /profile → redirect to /
  if (!token && (pathname.startsWith("/profile") || pathname.startsWith("/checkout"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Otherwise, continue normally
  return NextResponse.next();
}

// Run only on routes
export const config = {
  matcher: ["/profile/:path*", "/checkout/:path*"], 
};