import React from "react";
import ProductTab from "../productTab";
import ImgCarousel from "../imgCarousel";
import { shopApi } from "@/utility/shopApi";
import { notFound } from "next/navigation";
import he from "he";
import QuantitySelector from "../QuantitySelector";
import ProductAction from "../ProductAction";


export default async function page({ params }) {
  const { id } = await params;
  const productDetails = await shopApi.getProductDetails(id);

  if (!productDetails?.data) {
    notFound();
  }

  const product = productDetails.data;

  const productMainImg = product.thumbnail?.url || "";
  const productGalleryImgs = product.galleries?.map((img) => img.image) || [];
  const productsImg = productMainImg
    ? [productMainImg, ...productGalleryImgs]
    : productGalleryImgs;

  // console.log("Product Details:", product);

  const escapedDescription = he.decode(product.description || "");

  const groupedVariants =
    product.variants?.reduce((acc, item) => {
      const variantType = item.variant;
      if (!acc[variantType]) {
        acc[variantType] = [];
      }
      acc[variantType].push(item);
      return acc;
    }, {}) || {};

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <ImgCarousel images={productsImg} />
        </div>

        <div className="lg:col-span-5">
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>

          <hr />

          <p className="text-sm mb-2">
            Availability:{" "}
            <span className="text-green-600 font-medium">
              {product.quantity} in stock
            </span>
          </p>

          <p className="text-2xl font-bold mb-4">Tk {product.unit_price}</p>

          {/* <div dangerouslySetInnerHTML={{ __html: escapedDescription }} /> */}

          {Object.keys(groupedVariants).length > 0 && (
            <div className="space-y-4 mb-5 mt-4">
              {Object.entries(groupedVariants).map(([variantType, options]) => (
                <div key={variantType}>
                  <p className="font-medium mb-2">{variantType}:</p>
                    
                  <div className="flex flex-wrap gap-2">
                    {/* {options.map((option) => (
                      <button
                        key={option.id || option.value}
                        className="border px-4 py-1 text-sm rounded hover:border-green-500 hover:text-green-600"
                      >
                        {option.value || option.name}
                        {console.log("Variant Option:", option)}
                      </button>
                    ))} */}
                  </div>
                </div>
              ))}
            </div>
          )}

          <ProductAction product={product} maxQuantity={product.quantity} />

          {/* <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              Add to cart
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-500">
              Buy it now
            </button>
          </div> */}
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
            <div
              key={i}
              className="bg-gray-100 px-2 py-5 text-center hover:shadow-md h-[min-content] transition"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4 pt-5">
        <ProductTab description={escapedDescription} />
      </div>
    </div>
  );
}
