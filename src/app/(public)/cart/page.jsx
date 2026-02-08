import React from "react";
import CartItem from "@/components/cart/CartItem";
import cosmetics from "@/assets/img/product/cosmetics.png";

const page = () => {
  const items = [
    {
      id: 1,
      name: "Honey Nuts/হানি নাট (৫০০গ্রাম)",
      price: 1500,
      qty: 1,
      image: cosmetics,
    },
    {
      id: 2,
      name: "Deshi Mustard Oil 5ltr.",
      price: 1550,
      qty: 4,
      image: cosmetics,
    },
    {
      id: 3,
      name: "Sukkari Mufttal Malaki Dates 1kg",
      price: 1350,
      qty: 1,
      image: cosmetics,
    },
    {
      id: 4,
      name: "Gawa Ghee/গাওয়া ঘি (১ কেজি)",
      price: 1800,
      qty: 6,
      image: cosmetics,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mb-12 mt-8">
      <div className="grid grid-cols-12 text-sm font-semibold border-b pb-3">
        <div className="col-span-6 md:col-span-3">Product</div>
        <div className="col-span-6 md:col-span-3 text-right max-[430px]:hidden">
          Price
        </div>
        <div className="col-span-6 md:col-span-3 text-right max-[430px]:hidden">
          Quantity
        </div>
        <div className="col-span-6 md:col-span-3 text-right">Total</div>
      </div>

      <div className="space-y-6 mt-6">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="flex mt-1 py-4 text-sm bg-gray-100 p-2">
        <button className="flex-1 flex items-center justify-center gap-2 cursor-pointer">
          ✏️ Note
        </button>
        <div className="w-px bg-gray-300" />
        <button className="flex-1 flex items-center justify-center gap-2 cursor-pointer">
          💳 Coupon
        </button>
      </div>

      <div className="py-4">
        <div className="flex justify-between font-medium">
          <span>Subtotal</span>
          <span>Tk 21,200</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Taxes and shipping calculated at checkout
        </p>
      </div>

      <div className="space-y-3 flex justify-end">
        <button className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default page;
