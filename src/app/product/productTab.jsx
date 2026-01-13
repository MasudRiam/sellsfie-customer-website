"use client";

import { useState } from "react";

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "DESCRIPTION" },
    { id: "additional", label: "ADDITIONAL INFORMATION" },
  ];

  return (
    <div className="mt-8 mb-10">
      <div className="flex justify-center">
      <div className="inline-flex items-center gap-1 rounded-xl border border-gray-200 bg-gray-100 p-1 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-lg px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer
              ${
                activeTab === tab.id
                  ? "bg-green-600 text-white shadow"
                  : "text-gray-600 hover:bg-white hover:text-black"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      </div>

      <div className="mt-6">
        {activeTab === "description" && (
          <p>
            Fresh farm vegetables carefully selected and delivered with quality
            assurance. Sensory Experience Sight: A colorful circle with browned
            crust, red sauce, white/golden cheese, and vibrant toppings, often
            with bubbly, charred spots. Smell: Aromatic blend of baked dough,
            herbs (oregano, basil), savory cheese, and garlic. Touch: The warmth
            of the slice, the soft dough, gooey cheese, and crisp edges. Taste:
            A balance of salty, savory, sweet (from tomatoes), and sometimes
            spicy or tangy flavors. Sound: The slight crunch of the crust, the
            satisfying "tear" as you pull a slice.
          </p>
        )}

        {activeTab === "additional" && (
          <p>
            Product weight, origin, storage instructions, and packaging details
            are provided here.lore
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductTab;
