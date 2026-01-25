"use client";

import React from "react";
import { Package, User, MapPin, LogOut } from "lucide-react";
import sellsfieLogo from "@/assets/logo/sellsfie-logo.png";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
const orders = [
  {
    id: "ORD123456",
    date: "2024-06-15",
    total: "$150.00",
    status: "Delivered",
  },
  {
    id: "ORD123457",
    date: "2024-06-10",
    total: "$85.00",
    status: "Pending",
  },
  {
    id: "ORD123458",
    date: "2024-06-05",
    total: "$200.00",
    status: "Cancelled",
  },
  {
    id: "ORD123459",
    date: "2024-06-15",
    total: "$150.00",
    status: "Delivered",
  },

];

const page = () => {
    const { setOpen: setCartOpen, open: cartOpen } = useCart();
  
  return (
    <div className="max-w-7xl mx-auto p-4 min-h-screen">
      <header className="w-full border-b border-gray-200 mb-3">

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
                {/* <div className="relative">
                  <FiShoppingBag
                    onClick={() => setCartOpen(true)}
                    className="text-xl text-fren cursor-pointer"
                  />
                </div> */}
                <Link href="/login">
                  <FiUser className="text-xl text-fren cursor-pointer" />
                </Link>
              </div>
            </div>
         
      </header>
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-1 border bg-white shadow-md rounded-xl p-4 h-fit lg:sticky top-6">
          <div className="flex items-center min-[780px]:flex-col xl:flex-row gap-4 mb-6 min-w-0">
            {/* Avatar */}
            <div className="w-14 h-14 shrink-0 rounded-full overflow-hidden border">
              <img
                src="https://i.pravatar.cc/150?img=3"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Info */}
            <div className="min-w-0">
              <h2 className="font-semibold truncate">
                Atik Hassan
              </h2>
              <p className="text-sm text-gray-500 truncate">
                atikhassan@example.com
              </p>
            </div>
          </div>

          {/* user Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <MapPin size={16} />
            Address
          </h3>
          <p className="text-gray-600 text-sm">
            123 Main St, Dhaka, Bangladesh
          </p>
        </div>
        {/* logout btn  */}
        <button className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-700 text-white font-medium rounded-lg hover:bg-[#2e2e2e] transition">
          <LogOut size={16} />
          Logout
        </button>

        </aside>

        {/* Main Content */}
        <section className="lg:col-span-3 bg-white border shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Recent Orders
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-left border-collapse">
              <thead>
                <tr className="border-b text-gray-500 text-sm">
                  <th className="py-3">Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                
                {orders.length !== 0 ? (
                orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 font-medium">
                      {order.id}
                    </td>
                    <td>{order.date}</td>
                    <td>{order.total}</td>
                    <td>
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium
                          ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-600"
                              : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"
                          }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <button className="text-green-600 text-sm font-medium hover:underline">
                        View
                      </button>
                    </td>
                  </tr>
                ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-10 text-gray-500">
                      You haven't placed any orders yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
