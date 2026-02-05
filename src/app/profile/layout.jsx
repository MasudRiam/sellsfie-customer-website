"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, ShoppingBag, MapPin, X, Menu, LogOut } from "lucide-react";
import SimpleNavbar from "../(public)/checkout/SimpleNavbar";
import { removeToken } from "@/utility/helper";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const items = [
    { title: "Profile", url: "/profile", icon: User },
    { title: "Orders", url: "/profile/allOrder", icon: ShoppingBag },
    { title: "Address", url: "/profile/address", icon: MapPin },
  ];

const handleLogout = () => {
  removeToken();       
  router.push("/login");
};

  return (
    <div className="">
      <SimpleNavbar />
     <div className="flex min-h-screen max-w-7xl mx-auto">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:static lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b">
          <h2 className="text-lg font-semibold">My Account</h2>
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-xl"
          >
            <X />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-1">
          {items.map((item) => {
            const active = pathname === item.url;

            return (
              <Link
                key={item.title}
                href={item.url}
                className={`flex items-center no-underline hover:underline gap-3 px-4 py-2 rounded-lg font-medium transition
                  ${
                    active
                      ? "bg-green-100 text-green-700 underline"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                onClick={() => setOpen(false)}
              >
                <item.icon size={18} />
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="px-4">
          {/* logout */}
      <button
        onClick={handleLogout}
      className="px-4 py-2 gap-3 mt-4 hover:underline w-full cursor-pointer flex text-gray-700 items-center rounded-lg hover:bg-red-100 hover:text-red-700 transition-colors font-medium">
        <LogOut size={18}/> Logout
      </button>
      

        </div>
      </aside>

      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white border-b flex items-center px-4">
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden mr-3 text-2xl"
          >
            <Menu />
          </button>
          <h1 className="text-xl font-semibold capitalize">
            {pathname.split("/").pop()}
          </h1>
        </header>

        {/* Page Body */}
        <main className="p-6">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            {children}
          </div>
        </main>
      </div>
    </div>
    </div>
  );
}
