"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiShoppingBag, FiUser } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import sellsfieLogo from "@/assets/logo/sellsfie-logo.png";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import SearchSheet from "@/context/search-sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { setOpen: setCartOpen, open: cartOpen } = useCart();

  const [showCategory, setShowCategory] = useState(true);
  const lastScrollY = useRef(0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 10);
      setShowCategory(y < lastScrollY.current || y < 100);

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = [
    "OFFER ZONE",
    "Best Seller",
    "Oil",
    "Ghee (ঘি)",
    "Dates (খেজুর)",
    "খেজুর গুড়",
    "Honey",
    "Masala",
    "Nuts & Seeds",
    "Tea/Coffee",
    "Honeycomb",
    "Organic Zone",
    "Pickle",
  ];

  const productHref = (category) => ({
    pathname: "/products",
    query: { category },
  });
  return (
    <>
      <header className="sticky top-0 border-b z-50 w-full border-gray-200">
        <div className="relative">
          {scrolled && (
            <div
              className={`absolute inset-0 bg-white/70 backdrop-blur-md transition-opacity duration-300
              ${scrolled ? "opacity-100" : "opacity-0"}`}
            />
          )}

          <div className="relative z-10">
            <div className="flex items-center justify-between px-4 py-3 md:hidden">
              <FiMenu
                className="text-2xl text-fren cursor-pointer"
                onClick={() => setOpen(true)}
              />

              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <Link
                  href="/"
                  className="text-lg font-semibold text-fren max-[430px]:ml-4"
                >
                  <img src={sellsfieLogo.src} alt="Logo" className="h-8" />
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <SearchSheet />
                <div className="relative">
                  <FiShoppingBag
                    onClick={() => setCartOpen(true)}
                    className="text-xl text-fren"
                  />
                  {/* <span className="absolute -top-2 -right-2 bg-fren text-white text-xs rounded-full px-1">
                  9
                </span> */}
                </div>
                <Link href="/login">
                  <FiUser className="text-xl text-fren cursor-pointer" />
                </Link>
              </div>
            </div>

            <div
              className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
                open ? "visible" : "invisible"
              }`}
            >
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                  open ? "opacity-100" : "opacity-0"
                }`}
                onClick={() => setOpen(false)}
              />

              <div
                className={`absolute left-0 top-0 h-full w-64 bg-white p-5
                      transform transition-transform duration-300 ease-in-out
                      ${open ? "translate-x-0" : "-translate-x-full"}`}
              >
                <button
                  className="text-fren mb-4 font-medium"
                  onClick={() => setOpen(false)}
                >
                  <IoMdClose size={19} />
                </button>

                <ul className="space-y-4 space-x-0 text-sm">
                  {categories.map((item, index) => (
                    <ul
                      key={index}
                      className="cursor-pointer hover:underline"
                      onClick={() => setOpen(false)}
                    >
                      <Link
                        href={productHref(item)}
                        onClick={() => setOpen(false)}
                        className="block no-underline text-black visited:text-fren hover:text-robinhood"
                      >
                        {item}
                      </Link>
                    </ul>
                  ))}
                </ul>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-between px-12 py-4">
              <SearchSheet />
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img src={sellsfieLogo.src} alt="Logo" className="h-10" />
                </Link>
              </div>

              <div className="flex items-center gap-6">
                <div className="relative">
                  <FiShoppingBag
                    onClick={() => setCartOpen(true)}
                    className="text-xl text-fren cursor-pointer"
                  />
                  {/* <span className="absolute -top-2 -right-2 bg-fren text-white text-xs rounded-full px-1">
                  9
                  </span> */}
                </div>
                <Link href="/login">
                  <FiUser className="text-xl text-fren cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="hidden md:block h-20 xl:h-13 relative overflow-hidden">
        <nav
          className={`absolute inset-x-0 top-0
          transition-transform duration-300 ease-in-out
          ${showCategory ? "translate-y-0" : "-translate-y-full"}
        `}
        >
          <ul className="flex flex-wrap justify-center gap-6 px-6 py-2 text-sm">
            {categories.map((item, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                <Link
                  href={productHref(item)}
                  className="no-underline text-black visited:text-fren hover:text-robinhood"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
