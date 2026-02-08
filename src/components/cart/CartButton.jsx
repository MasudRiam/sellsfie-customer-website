"use client";

import React from "react";
import { useCartStore } from "@/store/cart-store";

const CartButton = ({ product, disabled }) => {
  const { addToCart } = useCartStore();
  return (
    <>
    <button
      disabled={disabled}
      onClick={() => addToCart(product)}
      className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" >
      Quick Add
    </button>

    </>
  );
};

export default CartButton;
