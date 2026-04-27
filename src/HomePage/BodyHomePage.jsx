import React, { Suspense } from "react";
import Image from "next/image";
import bodymainImage from "@/assets/img/coconut.jpg";
import cosmeticsProduct from "@/assets/img/product/cosmetics.png";
import pizzaproduct from "@/assets/img/product/pizza.png";
import plasticbottol from "@/assets/img/product/plastic-bottol.jpg";
import flowerpot from "@/assets/img/product/flower-pot.jpg";
import sllsfieShortLogo from "@/assets/logo/sellsfiemini.png";
import Link from "next/link";
import ShopCarouselServer from "./ShopCarousel-server";
import { AllProductSkeleton } from "@/components/skeleton/AllProductSkeleton";
import AllProductGrid from "./AllProductGrid";

export default async function BodyHomePage() {

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

        <Suspense fallback={<AllProductSkeleton />}>
          <AllProductGrid />
        </Suspense>

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
}
