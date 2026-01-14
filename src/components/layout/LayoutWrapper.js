"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/HomePage/Navbar";
import Footer from "@/HomePage/Footer";
import CartRootProvider from "@/components/providers/CartProvider";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const validRoutes = ["/", "/about", "/products", "/product", "/contact"];

  const authRoutes = ["/login", "/register", "/signup"];

  const isValidRoute = validRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  const hideNavbarFooter = authRoutes.includes(pathname) || !isValidRoute;

  return (
    <>
      <CartRootProvider>
        {!hideNavbarFooter && <Navbar />}
        <main className="flex-grow">{children}</main>
        {!hideNavbarFooter && <Footer />}
      </CartRootProvider>
    </>
  );
}
