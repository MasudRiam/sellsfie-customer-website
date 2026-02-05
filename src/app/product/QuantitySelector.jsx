"use client";

import React, { useState } from "react";

export default function QuantitySelector({ maxQuantity, value, onChange }) {
  const [internalQty, setInternalQty] = useState(1);
  const quantity = value ?? internalQty;

  const handleDecrease = () => {
    const next = Math.max(1, quantity - 1);
    if (onChange) onChange(next);
    else setInternalQty(next);
  };

  const handleIncrease = () => {
    const next = Math.min(maxQuantity, quantity + 1);
    if (onChange) onChange(next);
    else setInternalQty(next);
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
