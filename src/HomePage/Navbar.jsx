'use client';

import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiShoppingBag, FiUser } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import sellsfieLogo from "@/assets/logo/sellsfie-logo.png";

const Navbar = () => {

      const [open, setOpen] = useState(false);
    
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
  return (
    <div>
      <header className="w-full border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <FiMenu
            className="text-2xl text-fren cursor-pointer"
            onClick={() => setOpen(true)}
          />

          <div className="flex justify-center items-center gap-2">
            <img src={sellsfieLogo.src} alt="Logo" className="h-8" />
          </div>

          <div className="flex items-center gap-4">
            <GoSearch className="text-xl text-fren" />
            <div className="relative">
              <FiShoppingBag className="text-xl text-fren" />
              <span className="absolute -top-2 -right-2 bg-fren text-white text-xs rounded-full px-1">
                9
              </span>
            </div>
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

            <ul className="space-y-4 text-sm">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer fren:hover"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between px-12 py-2">
          <GoSearch className="text-xl text-fren cursor-pointer" />
          <div className="flex items-center gap-2">
            <img src={sellsfieLogo.src} alt="Logo" className="h-10" />
          </div>

          <div className="flex items-center gap-6">
            <FiUser className="text-xl text-fren cursor-pointer" />
            <div className="relative">
              <FiShoppingBag className="text-xl text-fren cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-fren text-white text-xs rounded-full px-1">
                9
              </span>
            </div>
          </div>
        </div>

        <nav className="hidden md:block bg-gray-100">
          <ul className="flex flex-wrap justify-center gap-6 px-6 py-3 text-sm mt-0">
            {categories.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer bg-robinhood:hover ${
                  item === "খেজুর গুড়"
                    ? "border-b-2 text-robinhood font-medium"
                    : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
