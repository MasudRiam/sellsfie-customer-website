import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/context/cart-context";
import Image from "next/image";

const CartSheet = () => {
  const { open, setOpen, items, updateQty, removeItem } = useCart();

  const subtotal = items.reduce((t, i) => t + i.price * i.qty, 0);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-[85vw] max-w-[380px] sm:w-[340px] sm:max-w-none md:w-[360px] h-dvh flex flex-col"
      >
        <SheetHeader className="px-4 py-4 border-b">
          <SheetTitle className="text-lg font-medium">Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-5">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 mb-7">
              <div className="w-16 h-16 border flex items-center justify-center">
                <Image
                  src={item.img}
                  alt=""
                  className="object-contain"
                  width={64}
                  height={64}
                />
              </div>

              <div className="flex-1">
                <p className="text-sm">{item.name}</p>
                <p className="text-sm font-medium mt-1">
                  Tk {item.price.toFixed(2)}
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <div className="flex border rounded">
                    <button
                      className="px-2 cursor-pointer"
                      onClick={() => updateQty(item.id, "dec")}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-sm">{item.qty}</span>
                    <button
                      className="px-2 cursor-pointer"
                      onClick={() => updateQty(item.id, "inc")}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-gray-500 underline cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 bg-gray-100 p-2 shadow-sm text-sm">
          <button className="py-3 cursor-pointer">✏️ Note</button>
          <button className="py-3 border-l cursor-pointer">🎟️ Coupon</button>
        </div>

        <div className="px-4 py-2 space-y-3">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-semibold">Tk {subtotal.toFixed(2)}</span>
          </div>

          <Button className="w-full bg-green-700 text-white cursor-pointer">
            💳 Pay Online
          </Button>

          <Button className="w-full bg-orange-500 text-white cursor-pointer">
            🛒 ক্যাশ অন ডেলিভারিতে অর্ডার করুন
          </Button>

          <p className="text-center text-sm underline cursor-pointer">View Cart</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
