"use client";

import React from "react";
import { useCartStore } from "@/store/cart-store";

const CartButton = ({ product }) => {
  const { addToCart } = useCartStore();
  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-4 w-full rounded bg-robinhood py-2 text-sm hover:bg-fren text-white cursor-pointer"
    >
      Quick Add
    </button>
  );
};

export default CartButton;
