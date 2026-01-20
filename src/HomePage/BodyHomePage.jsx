"use client";

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

import { useMefetchData } from "@/utility/hooks/useMe";
import { useAllProductfetchData } from "@/utility/hooks/useAllProduct";

const BodyHomePage = () => {
  const { data: meData, isLoading, isError } = useMefetchData();
  console.log ("Me Data:", meData);

  const {data: allProductData, isLoading: allProductLoading, isError: allProductError } = useAllProductfetchData();
  console.log("All Product Data:", allProductData);

  const collections = [
    { title: "Organic Oil", img: cosmeticsProduct },
    { title: "HONEY (মধু)", img: plasticbottol },
    { title: "Ghee (ঘি)", img: pizzaproduct },
    { title: "Dates (খেজুর)", img: cosmeticsProduct },
    { title: "Tea/Snacks (চা-নাস্তা)", img: flowerpot },
    { title: "Tea/Snacks (চা-নাস্তা)", img: flowerpot },
  ];


  return (
    <>
      {/* banner image */}
      <div className="">
        <Image src={bodymainImage} alt="Main Body" className="w-full h-auto" />
      </div>

      {/* body section  */}
      <div className="mx-auto py-10">
        <h1 className="text-center text-3xl tracking-wide font-normal mb-7 uppercase">
          All Product
        </h1>

        <section className="mx-auto w-full max-w-[1280px] px-4 py-4 sm:px-3 sm:py-8">
          <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch">
          {/* ternary operator if loading and if error */}
           { allProductLoading ? (
              <p>Loading...</p>
            ) : allProductError ? (
              <p>Something went wrong</p>
            ) : (
              allProductData.map((product) => (
                <div key={product.id} className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
                
                <Link href="/product" className="no-underline">
                  <Image
                    src={product?.thumbnail_image?.url}
                     width={468}  
                     height={268}
                    alt={product?.name}              
                    className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto pt-4">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    {product?.name}
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">
                    Tk {product?.unit_price}
                  </p>
                </div>
              </Link>
              <CartButton product={{ id: product.id, name: product.name, price: product.unit_price, img: product?.thumbnail_image?.url }} />
                </div>
          ))
            )}
          </div>
        </section>

        {/* carousel Section */}
        <section className="bg-[#f7f7f7] p-14">
          <div className="max-w-6xl mx-auto">
            <div>
              <h2 className="text-center text-3xl tracking-tight font-semibold mb-10 uppercase">
                HOT PRODUCT
              </h2>
            </div>
            <ShopCarousel />
          </div>
        </section>

        {/* collection section  */}
        <section className="mx-auto max-w-[1280px]  pt-6 pb-16">
          <h2 className="text-center text-3xl tracking-wide font-normal mb-10 uppercase">
            Collection
          </h2>

          <div className="mx-auto max-w-[900px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-7 gap-x-2 justify-items-center">
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

                  <p className="mt-4 text-base text-gray-700 whitespace-normal break-words">
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

export default BodyHomePage;
