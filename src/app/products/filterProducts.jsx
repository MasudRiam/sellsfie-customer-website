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
     <aside className="w-full max-w-xs border rounded-lg p-4 bg-white">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <Accordion type="multiple" className="space-y-2">
        {/* Collections */}
        <AccordionItem value="collections">
          <AccordionTrigger className="py-2 text-base font-medium">Collections</AccordionTrigger>
          <AccordionContent className="pt-2">
            <ul className="space-y-2">
              {collections.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <input type="checkbox" id={item} className="h-4 w-4 text-green-700" />
                  <label htmlFor={item} className="text-sm text-gray-800">{item}</label>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        
                <AccordionItem value="availability">
          <AccordionTrigger className="py-2 text-base font-medium">Availability</AccordionTrigger>
          <AccordionContent className="pt-2">
            <ul className="space-y-2">
              {availability.map((a) => (
                <li key={a.label} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id={a.label} className="h-4 w-4 text-green-700" />
                    <label htmlFor={a.label} className="text-sm text-gray-800">{a.label}</label>
                  </div>
                  <span className="text-sm text-gray-500">({a.count})</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

                      <AccordionItem value="price">
          <AccordionTrigger className="py-2 text-base font-medium">Price</AccordionTrigger>
          <AccordionContent className="pt-3">
            <Slider
              value={price}
              min={0}
              max={4050}
              step={10}
              onValueChange={(v) => setPrice(v)}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-700 mt-2">
              <span>৳ {price[0]}</span>
              <span>৳ {price[1].toFixed(2)}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>

  );
};

export default FilterProducts;
