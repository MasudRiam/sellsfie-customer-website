import { headers } from "next/headers";
import Footer from "@/HomePage/Footer";

export default async function NavbarFooterWrapper({ children, navbar }) {
  const headersList = await headers();
  const pathname =
    headersList.get("x-invoke-path") ||
    headersList.get("x-matched-path") ||
    "/";

  const validRoutes = [
    "/",
    "/about",
    "/products",
    "/product",
    "/contact",
    "/cart",
    "/customer-care",
    "/return-policy",
    "/refund-policy",
  ];
  const authRoutes = [
    "/login",
    "/register",
    "/signup",
    "/checkout",
    "/profile",
    "/order",
  ];

  const isValidRoute = validRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
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
