"use client";

import { usePathname } from "next/navigation";
import Footer from "@/HomePage/Footer";

export default function NavbarFooterWrapper({ children, navbar }) {
  const pathname = usePathname();

  const validRoutes = ["/", "/about", "/products", "/product", "/contact", "/cart", "/customer-care", "/return-policy", "/refund-policy"];
  const authRoutes = ["/login", "/register", "/signup", "/checkout", "/profile", "/order"];

  const isValidRoute = validRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  const hideNavbarFooter = authRoutes.includes(pathname) || !isValidRoute;

  return (
    <>
      {!hideNavbarFooter && navbar}
      <main className="flex-grow">{children}</main>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}