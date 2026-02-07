"use client";

import { useState } from "react";

export default function ProductTab({ description }) {
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
          <div dangerouslySetInnerHTML={{ __html: description }} />
        )}

        {activeTab === "additional" && (
          <p>
            
          </p>
        )}
      </div>
    </div>
  );
};
