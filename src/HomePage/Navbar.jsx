"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiShoppingBag, FiUser } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import sellsfieLogo from "@/assets/logo/sellsfie-logo.png";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import SearchSheet from "@/context/search-sheet";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiLogin } from "react-icons/ci";

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

            <div className="hidden md:flex items-center justify-between mx-auto max-w-7xl px-4 py-4 sm:px-3">
              {/* <SearchSheet /> */}
              <div className="flex justify-start">
                <div className="lg:max-w-90 md:max-w-60 max-w-xl">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Search here..."
                      // value={query}
                      // onChange={(e) => setQuery(e.target.value)}
                      // onKeyDown={(e) => {
                      //   if (e.key === "Enter") handleSearch();
                      // }}
                      className="h-9 text-base md:w-2xl lg:w-2xl focus-visible:border-green-700"
                    />

                    <button
                      // onClick={handleSearch}
                      className="bg-green-700 hover:bg-[#2e2e2e] text-white px-4 cursor-pointer rounded-md flex items-center justify-center"
                    >
                      <Search size={18}/>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:mr-20 md:mr-7">
                <Link
                  href="/"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img src={sellsfieLogo.src} alt="Logo" className="h-10" />
                </Link>
              </div>

              <div className="flex items-center gap-2">
                {/* <Link href="/login">
                  <FiUser className="text-xl text-fren cursor-pointer" />
                </Link> */}
                <Link
                  href="/login"
                  className="flex items-center px-2 py-1 gap-1 border rounded-sm bg-green-700 hover:bg-[#2e2e2e] text-white no-underline"
                >
                  <CiLogin size={18} />
                  <span>Login</span>
                </Link>

                <div
                  className="relative flex items-center gap-1 border rounded-sm bg-green-700 hover:bg-[#2e2e2e] text-white px-2 py-1 cursor-pointer"
                  onClick={() => setCartOpen(true)}
                >
                  <FiShoppingBag size={18} />

                  {/* <span className="absolute -top-2 -right-2 bg-fren text-white text-xs rounded-full px-1">
                  9
                  </span> */}
                  <span>Cart</span>
                </div>
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
          <div className="flex flex-wrap justify-center gap-6 px-6 py-2 text-sm bg-gray-50">
            {categories.map((item, index) => (
              <div key={index} className="cursor-pointer hover:underline">
                <Link
                  href={productHref(item)}
                  className="no-underline text-black visited:text-fren hover:text-robinhood text-base"
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
