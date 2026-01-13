"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

const FilterProducts = () => {
  const [price, setPrice] = useState([0, 4050]);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const collections = [
    "OFFER ZONE",
    "Best Seller",
    "Oil",
    "Ghee (ঘি)",
    "Dates (খেজুর)",
    "খেজুর গুড়",
    "Honey",
    "Masala",
    "Nuts & Seeds",
    "Tea/Coffee",
    "Honeycomb",
    "Organic Zone",
    "Pickle",
  ];

  const availability = [
    { label: "In stock", count: 24 },
    { label: "Out of stock", count: 0 },
  ];

  return (
    <aside className="w-full max-w-xs p-4 sm:mr-2 xl:ml-7 bg-white">
      <h1 className="text-lg font-semibold mb-4">Filters</h1>

      <Accordion
        type="multiple"
        defaultValue={["collections", "availability"]}
        className="space-y-2"
      >
        {/* Collections */}
        <AccordionItem value="collections">
          <AccordionTrigger className="py-1">Collections</AccordionTrigger>
          <AccordionContent className="pt-1">
            <ul className="space-y-2">
              {collections.map((item) => (
                <li
                  key={item}
                  onClick={() => setSelectedCollection(item)}
                  className={`flex items-center gap-2 cursor-pointer ${
                    selectedCollection === item
                      ? "font-medium text-fren"
                      : "text-gray-800"
                  }`}
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability">
          <AccordionTrigger className="py-1">Availability</AccordionTrigger>
          <AccordionContent className="pt-1">
            <ul className="space-y-2">
              {availability.map((a) => (
                <li key={a.label} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={a.label}
                      className="h-4 w-4 accent-green-700"
                    />
                    <label htmlFor={a.label} className="text-sm text-gray-800">
                      {a.label}
                    </label>
                  </div>
                  <span className="text-sm text-gray-800">({a.count})</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="py-1 mt-1 mb-4 text-base font-medium">Price</div>
      <Slider
        value={price}
        min={0}
        max={4050}
        step={10}
        onValueChange={(v) => setPrice(v)}
        className="w-full text-fren"
      />
      <div className="flex justify-between text-sm text-gray-800 mt-3">
        <span>৳ {price[0]}</span>
        <span>৳ {price[1].toFixed(2)}</span>
      </div>
    </aside>
  );
};

export default FilterProducts;
