"use client";

import React from "react";
import { useAddToCartWithSync } from "@/hooks/useAddToCartWithSync";
import { getCookieId } from "@/utility/getCookieId";

const CartButton = ({ product, disabled }) => {
  const { addToCartWithAPI, isPending } = useAddToCartWithSync();

  const handleAddToCart = async () => {
    try {
      await addToCartWithAPI(
        {
          product_id: product.id,
          variant_id: product.variant_id || null,
          quantity: product.qty || 1,
          choice: product.choice || null,
          cookie_id: getCookieId(),
        },
        {
          // Pass full product data for cart display
          name: product.name,
          price: product.price,
          img: product.img,
          stock: product.stock,
        }
      );
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  return (
    <>
    <button
      disabled={disabled || isPending}
      onClick={handleAddToCart}
      className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
    >
      {isPending ? "Adding..." : "Quick Add"}
    </button>

    </>
  );
};

export default CartButton;
