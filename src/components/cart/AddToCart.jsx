"use client";

import React from "react";

const AddToCart = ({ product }) => {
  return (
    <button
      onClick={() => product}
      className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 cursor-pointer"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
