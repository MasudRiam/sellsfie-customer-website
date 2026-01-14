"use client";

import React from "react";
import { useCart } from "@/context/cart-context";

const CartButton = ({ product }) => {
  const { addToCart } = useCart();
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
