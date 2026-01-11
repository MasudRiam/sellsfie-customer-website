"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/HomePage/Navbar";
import Footer from "@/HomePage/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const validRoutes = ["/", "/about", "/products", "/contact"];

  const authRoutes = ["/login", "/register", "/signup"];

  const isValidRoute = validRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  const hideNavbarFooter = authRoutes.includes(pathname) || !isValidRoute;

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
}
