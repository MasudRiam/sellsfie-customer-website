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
          className="hover:bg-muted transition cursor-pointer"
        >
          <Search className="h-5 w-5 text-fren" />
        </button>
      </SheetTrigger>

      {/* Search Sheet */}
      <SheetContent side="top" className="border-b">
        <SheetHeader>
          <SheetTitle className="flex justify-center font-medium mb-0">
            What are you looking for?
          </SheetTitle>
        </SheetHeader>
        <div className="mx-auto max-w-4xl pb-4">
          <div className="flex gap-2">
            <Input
              autoFocus
              placeholder="Search here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              className="h-11 text-base md:w-2xl lg:w-3xl focus-visible:border-green-700 focus-visible:ring-white"
            />

            <Button onClick={handleSearch} className="h-11 w-18 bg-green-700">
              <Search size={18} className=" text-white" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
