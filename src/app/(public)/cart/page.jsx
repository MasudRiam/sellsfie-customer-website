"use client";

import React from "react";
import CartItem from "@/components/cart/CartItem";
import { useCartStore } from "@/store/cart-store";

export default function Page() {
  const items = useCartStore((state) => state.items);
  const subtotal = items.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.qty || 0),
    0,
  );


  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mb-12 mt-8">
      <div className="grid grid-cols-12 text-sm font-semibold border-b pb-3">
        <div className="col-span-6 md:col-span-3">Product</div>
        <div className="col-span-6 md:col-span-3 text-right max-[430px]:hidden">
          Price
        </div>
        <div className="col-span-6 md:col-span-3 text-right max-[430px]:hidden">
          Quantity
        </div>
        <div className="col-span-6 md:col-span-3 text-right">Total</div>
      </div>

      <div className="space-y-6 mt-6">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-between items-start border-b pb-2">
        <div className="flex gap-4 mt-6 flex-wrap">
          <div className="flex gap-2 items-start">
            <input
              type="text"
              placeholder="Coupon code"
              className="border px-4 py-2 rounded w-56 flex-none"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 h-fit flex-none">
              Apply
            </button>
          </div>

          <div className="flex gap-2 items-start">
            <textarea
              rows={2}
              placeholder="Order note"
              className="border px-4 py-2 rounded w-56 resize-none flex-none"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 h-fit flex-none">
              Save
            </button>
          </div>
        </div>

        <div className="py-4">
          <div className="flex justify-between w-64 font-medium">
            <span>Subtotal</span>
            <span>Tk {subtotal.toLocaleString()}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Taxes and shipping calculated at checkout
          </p>
        </div>
      </div>

      <div className="space-y-3 flex justify-end pt-2">
        <button className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700">
          Place Order
        </button>
      </div>
    </div>
  );
}
