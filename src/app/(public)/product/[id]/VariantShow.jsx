"use client";
import React, { useState } from "react";

export default function VariantShow({ product }) {

    const [selectedVariant, setSelectedVariant] = useState(() => {
    const defaultState = {};

    Object.entries(product.attributes).forEach(([key, items]) => {
        if (items.length > 0) {
            defaultState[key] = items[0].value_id;
            }
        });
        return defaultState;
        });

    return (
        <div className="space-y-4">
          {Object.entries(product.attributes).map(([key, items]) => (
           <div key={key}>
           <p className="font-medium mb-2">{key}:</p>
           <div className="flex gap-2 flex-wrap">
                {items.map((item) => {
                const isActive = selectedVariant[key] === item.value_id;
    
                return (
                    <button
                        key={item.value_id}
                        onClick={() =>
                        setSelectedVariant((prev) => ({
                                ...prev,
                                [key]: item.value_id,
                                }))
                              }
                              className={`px-3 py-1 border rounded cursor-pointer text-sm transition
                              ${
                                isActive
                                  ? "border-green-500 bg-green-100"
                                  : "border-gray-300 hover:border-green-400"
                              }`}
                            >
                              {item.value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
    );
}
