import React from "react";
import pizzaImg from "@/assets/img/product/pizza.png"
import Image from "next/image";
import ProductTab from "./productTab";
import plasticBottol from "@/assets/img/product/plastic-bottol.jpg";
import cosmetics from "@/assets/img/product/cosmetics.png";
import ImgCarousel from "./imgCarousel";


const productsImg = [
  pizzaImg,
  plasticBottol,
  cosmetics,
]

const page = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <ImgCarousel images={productsImg} />
        </div>


        <div className="lg:col-span-5">
          <h1 className="text-2xl font-semibold mb-2">Vegetable Pizza</h1>

          <hr/>


          <p className="text-sm mb-2">
            Availability:{" "}
            <span className="text-green-600 font-medium">12 in stock</span>
          </p>

          <p className="text-2xl font-bold mb-4">Tk  55.00</p>

          <p className="text-gray-600 mb-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          {/* Size */}
          <div className="mb-5">
            <p className="font-medium mb-2">Size:</p>
            <div className="flex gap-2">
              {["1KG", "2KG", "5KG"].map((size) => (
                <button
                  key={size}
                  className="border px-4 py-1 text-sm rounded hover:border-green-500 hover:text-green-600"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <p className="font-medium">Quantity:</p>
            <div className="flex border rounded">
              <button className="px-3 py-1">−</button>
              <span className="px-4 py-1 border-x">1</span>
              <button className="px-3 py-1">+</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              Add to cart
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-500">
              Buy it now
            </button>
          </div>
{/* 
          <button className="mt-4 text-sm text-gray-600 hover:text-green-600">
            ♡ Wishlist
          </button>

          <p className="text-sm text-gray-500 mt-4">
            SKU: <span className="text-black">123456</span>
          </p> */}
        </div>

        {/* RIGHT: Info Cards */}
        <div className="lg:col-span-2 space-y-4">
          {[
            {
              title: "DELIVERY INFO",
              text: "Delivery within 2–10 days depending on location.",
            },
            {
              title: "30 DAYS RETURNS",
              text: "Full refund within 7 days including delivery fee.",
            },
            {
              title: "10 YEAR WARRANTY",
              text: "Quality comes first and products are built to last.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-100 px-2 py-5 text-center hover:shadow-md h-[min-content] transition">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4 pt-5">
        <ProductTab />
      </div>
    </div>
  );
};

export default page;
