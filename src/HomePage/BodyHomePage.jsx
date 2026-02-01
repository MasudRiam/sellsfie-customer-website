import React from "react";
import Image from "next/image";
import bodymainImage from "@/assets/img/coconut.jpg";
import cosmeticsProduct from "@/assets/img/product/cosmetics.png";
import pizzaproduct from "@/assets/img/product/pizza.png";
import plasticbottol from "@/assets/img/product/plastic-bottol.jpg";
import flowerpot from "@/assets/img/product/flower-pot.jpg";
import sllsfieShortLogo from "@/assets/logo/sellsfiemini.png";
import { ShopCarousel } from "./ShopCarousel";
import Link from "next/link";
import CartButton from "@/components/cart/CartButton";
import { shopApi } from "@/utility/shopApi";
import ShopCarouselServer from "./ShopCarousel-server";
//in shopApi.js  i fetch all products and now i will use that api to fetch products data and show in this page
export default async function BodyHomePage() {
  const productsData = await shopApi.getAllProducts();

  
  const collections = [
    {
      title: "Cosmetics",
      img: cosmeticsProduct,
    },
    {
      title: "Grocery",
      img: pizzaproduct,
    },
    {
      title: "Beverages",
      img: plasticbottol,
    },
    {
      title: "Home Decor",
      img: flowerpot,
    },
    {
      title: "Snacks",
      img: cosmeticsProduct,
    },
  ];
  
  const products = productsData?.data?.data || [];
  console.log("Fetched products data:", products);

  return (
    <>
      {/* banner image */}
      <div className="">
        <Image src={bodymainImage} alt="Main Body" className="w-full h-auto" />
      </div>

      {/* body section  */}
      <div className="mx-auto py-10">
        <h1 className="text-center text-3xl tracking-wide font-normal mb-7 uppercase">
          All Products
        </h1>

        <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-3 sm:py-8">
          <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
          {/* Using fetched products data to render product items and set loading*/}
           {products.length > 0 ? (
              products.map((product) => (
              <div key={product.id} className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full flex flex-col">
              <Link href={`/product/${product.id}`} className="no-underline">
              <div className="h-40">
                <img
                className="w-full h-full object-contain"
                  src={product.thumbnail_image.url}
                  alt={product.name}
                />
                </div>
                <div className="mt-auto pt-4">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal wrap-break-word overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    {product.name}
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">
                    { product.price?.has_discount ? (
                      <>
                        <span className="mr-2 text-sm text-gray-400 line-through">
                          Tk {product?.price?.original}
                        </span>
                        <span>
                          Tk {product?.price?.final}
                        </span>
                      </>
                    ) : (
                      <span>Tk {product?.price?.final}</span>
                    )}
                  </p>
                </div>
              </Link>
              <CartButton product={{ id: product.id, name: product.name, price: product?.price?.final, img: product.thumbnail_image.url }} />
            </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
          </div>
        </section>

        {/* carousel Section */}
        <section className="bg-gray-100 p-14">
          <div className="max-w-6xl mx-auto">
              <h2 className="text-center text-3xl tracking-tight font-semibold mb-10 uppercase">
                HOT PRODUCT
              </h2>
            <ShopCarouselServer />
          </div>
        </section>

        {/* collection section  */}
        <section className="mx-auto max-w-7xl  pt-6 pb-16">
          <h2 className="text-center text-3xl tracking-wide font-normal mb-10 uppercase">
            Collection
          </h2>

          <div className="mx-auto max-w-225 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-7 gap-x-2 justify-items-center">
            {collections.map((item, idx) => (
              <div key={idx} className="text-center">
                <Link href="/product" className="no-underline">
                  <div className="relative w-40 h-40 sm:w-36 sm:h-36 bg-white border border-green-200 flex items-center justify-center">
                    <Image
                      src={sllsfieShortLogo}
                      alt="Sellfie Logo"
                      className="absolute top-2 left-2 w-3 h-3"
                    />

                    <Image
                      src={item.img}
                      alt={item.title}
                      className="max-h-[70%] max-w-[70%] object-contain"
                    />
                  </div>

                  <p className="mt-4 text-base text-gray-700 whitespace-normal wrap-break-word">
                    {item.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
