"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/HomePage/Navbar";
import Footer from "@/HomePage/Footer";
import CartRootProvider from "@/components/providers/CartProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const validRoutes = ["/", "/about", "/products", "/product", "/contact", "/cart", "/customer-care", "/return-policy", "/refund-policy"];

  const authRoutes = ["/login", "/register", "/signup", "/checkout", "/profile"];

  const isValidRoute = validRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  const hideNavbarFooter = authRoutes.includes(pathname) || !isValidRoute;

  return (
    <>
      <CartRootProvider>
        <QueryClientProvider client={queryClient}>
          {!hideNavbarFooter && <Navbar />}
          <main className="flex-grow">{children}</main>
          {!hideNavbarFooter && <Footer />}
        </QueryClientProvider>
      </CartRootProvider>
      <Toaster position="top-right" richColors />
    </>
  );
}
