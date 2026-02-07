import React from "react";
import NavbarServer from "@/HomePage/Navbar-Server";
import Footer from "@/HomePage/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <NavbarServer />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
