"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchSheet = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <Sheet>
      {/* Navbar Search Icon */}
      <SheetTrigger asChild>
        <button
          aria-label="Search"
          className="p-2 rounded-md hover:bg-muted transition cursor-pointer"
        >
          <Search className="h-5 w-5 text-fren" />
        </button>
      </SheetTrigger>

      {/* Search Sheet */}
      <SheetContent side="top" className="border-b">
        <SheetHeader>
          <SheetTitle>
            {""}
          </SheetTitle>
        </SheetHeader>
        <div className="mx-auto max-w-4xl py-6">
          <div className="flex gap-2">
            <Input
              autoFocus
              placeholder="Search here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              className="h-12 text-base md:w-2xl lg:w-3xl focus-visible:border-green-700 focus-visible:ring-white"
            />

            <Button onClick={handleSearch} className="h-12 w-18 bg-green-700">
              <Search size={18} className=" text-white" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
