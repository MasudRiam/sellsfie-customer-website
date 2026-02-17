"use client";

import React, { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { useCartStore } from "@/store/cart-store";

export default function ProductAction({ product, maxQuantity }) {
  const { addToCart, setOpen } = useCartStore();
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.unit_price || 0),
      img: product.thumbnail?.url || "",
      stock: product.quantity || 0,
      qty,
    });
    setOpen(true);
  };

  return (
    <>
      <QuantitySelector
        maxQuantity={maxQuantity}
        value={qty}
        onChange={setQty}
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 cursor-pointer"
        >
          Add to cart
        </button>
        <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-500 cursor-pointer">
          Buy it now
        </button>
      </div>
    </>
  );
}