import React from "react";
import cosmetics from "@/assets/img/product/fruits.png";
import Image from "next/image";
const orders = [
  {
    id: "ORD123456",
    date: "2024-06-15",
    total: "$150.00",
    status: "Delivered",
    items: [
      {
        productName: "Product 1",
        color: "Red",
        image: cosmetics,
        price: "$50.00",
        qty: 1,
      },
      {
        productName: "Product 2",
        color: "Blue",
        image: cosmetics,
        price: "$100.00",
        qty: 1,
      },
      {
        productName: "Product 3",
        color: "Green",
        image: cosmetics,
        price: "$75.00",
        qty: 2,
      },
      {
        productName: "Product 4",
        color: "Yellow",
        image: cosmetics,
        price: "$60.00",
        qty: 1,
      },
      {
        productName: "Product 5",
        color: "Black",
        image: cosmetics,
        price: "$90.00",
        qty: 1,
      },
      {
        productName: "Product 6",
        color: "White",
        image: cosmetics,
        price: "$120.00",
        qty: 1,
      },
    ],
  },
];

const Page = () => {
  const order = orders[0];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Order Details</h1>

      {/* Order Header */}
      <div className=" border p-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl font-semibold">
            Order #{order.id}
          </h2>

          <div>
            <p className="text-gray-600">
              Placed on: {order.date}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-800 font-medium">Status:</span>
              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-medium">
                {order.status}
              </span>
            </div>
          </div>
        </div>
      </div>

{/* Order Items Table */}
<div className="overflow-x-auto bg-white border border-gray-200">
  <table className="min-w-full border-collapse">
    {/* Head */}
    {/* <thead className="bg-gray-100">
      <tr className="text-sm text-gray-600">
        <th className="px-4 py-3 text-left w-12">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-gray-700 focus:ring-0"
          />
        </th>
        <th className="px-4 py-3 text-left">Product</th>
        <th className="px-4 py-3 text-left">SKU</th>
        <th className="px-4 py-3 text-left">SKU</th>
        <th className="px-4 py-3 text-left">SKU</th>
        <th className="px-4 py-3 text-right">Price & Qty</th>
      </tr>
    </thead> */}

    <tbody className="divide-y divide-gray-200">
      {order.items.map((item, index) => (
        <tr
          key={`${order.id}-${index}`}
          className="hover:bg-gray-50 transition"
        >
          {/* product */}
          <td className="px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                <Image
                  src={item.image}
                  alt={item.productName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  {item.productName}
                </p>
                <p className="text-sm text-gray-500">
                  Color: {item.color}
                </p>
              </div>
            </div>
          </td>

          {/* price */}
          <td className="px-4 py-4 text-right whitespace-nowrap">
            <p className="font-semibold text-gray-800">
              {item.price}
            </p>
            <p className="text-sm text-gray-500">
              Qty: {item.qty}
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* Order Summary */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mt-6  border p-4">
        {/* Note */}
        <div className="max-w-md">
          <h3 className="text-lg font-semibold mb-2">
            Order Note
          </h3>
          <p className="text-gray-600">
            Please deliver between 9 AM - 5 PM. Leave the package at
            the front door if no one is home.
          </p>
        </div>

        {/* Summary */}
        <div className="w-full md:w-72">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">{order.total}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">$10.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium">$5.00</span>
          </div>

          <div className="flex justify-between mt-4 pt-4 border-t text-lg font-bold">
            <span>Total</span>
            <span>{order.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
