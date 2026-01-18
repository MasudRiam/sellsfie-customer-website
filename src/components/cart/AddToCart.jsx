"use client";

import React from "react";
import { useCart } from "@/context/cart-context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 cursor-pointer"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
