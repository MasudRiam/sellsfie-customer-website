"use client";

import React, { useState } from "react";

export default function QuantitySelector({ maxQuantity }) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => Math.min(maxQuantity, prev + 1));
  };
  return (
    <div className="flex items-center gap-4 mb-6">
      <p className="font-medium">Quantity:</p>
      <div className="flex border rounded">
        <button
          onClick={handleDecrease}
          disabled={quantity <= 1}
          className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          −
        </button>
        <span className="px-4 py-1 border-x">{quantity}</span>
        <button
          onClick={handleIncrease}
          disabled={quantity >= maxQuantity}
          className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>
      {quantity >= maxQuantity && (
        <span className="text-xs text-orange-500">Max stock reached</span>
      )}
    </div>
  );
}
