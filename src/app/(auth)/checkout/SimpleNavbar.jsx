import Link from 'next/link'
import React from 'react'
import sellsfieLogo from "@/assets/logo/sellsfie-logo.png";
import { FiShoppingBag, FiUser } from 'react-icons/fi';

export default function SimpleNavbar() {
  return (
        <header className="w-full border-b max-w-7xl mx-auto p-4 border-gray-200 ">
  
              <div className="flex items-center justify-between">
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
                    <Link href="/cart">
                      <FiShoppingBag
                        className="text-xl text-fren cursor-pointer"
                      />
                    </Link>
                  </div>
                  <Link href="/login">
                    <FiUser className="text-xl text-fren cursor-pointer" />
                  </Link>
                </div>
              </div>
           
        </header>
  )
}
