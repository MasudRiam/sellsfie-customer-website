import React from 'react';
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function CouponSheet() {
    return (
        <SheetContent
        side="bottom"
        className="right-0 left-auto h-[260px] w-[85vw] max-w-[380px] sm:w-[340px] md:w-[360px] "
        >
        <div className="p-4 space-y-4">
            <SheetHeader className="p-0 ">
                <SheetTitle className="text-xl">🎟️ Add a discount Code</SheetTitle>
            </SheetHeader>
            <input
            type="text"
            placeholder="Enter your discount code..."
            className="w-full rounded-md border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="flex justify-end gap-2">
            <SheetClose asChild>
                <button className="px-4 py-2 text-sm border rounded-md cursor-pointer">
                Cancel
                </button>
            </SheetClose>

            <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-md">
                Save
            </button>
            </div>
        </div>
        </SheetContent>

    );
};
