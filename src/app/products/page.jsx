import React from "react";
import FilterProducts from "./filterProducts";
import Image from "next/image";
import cosmeticsProduct from "@/assets/img/product/cosmetics.png";
import pizzaproduct from "@/assets/img/product/pizza.png";
import plasticbottol from "@/assets/img/product/plastic-bottol.jpg";
import flowerpot from "@/assets/img/product/flower-pot.jpg";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { shopApi } from "@/utility/shopApi";

export default async function page({ searchParams }) {
  const { category_id } = await searchParams;
  // console.log("Category ID from params:", category_id);
  const allProducts = await shopApi.getAllProducts(category_id);
  const categoryProducts = allProducts?.data?.data || [];
  // console.log("Category Products:", categoryProducts);
  return (
    <>
      <section className="mx-auto w-full max-w-[1280px] px-1 py-4 sm:px-3 sm:py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block lg:sticky lg:top-24 lg:mr-0.5 h-fit">
            <FilterProducts />
          </aside>

          <main>
            <div className="ml-3 md:mt-6 lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-lg font-medium"
                  >
                    Filters <IoIosArrowDown size={18} strokeWidth={2} />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="left"
                  className="w-[78vw] max-w-[280px] sm:w-[340px] sm:max-w-none md:w-[360px]"
                >
                  <SheetHeader>
                    <SheetTitle>{""}</SheetTitle>
                  </SheetHeader>

                  <div className="md:mt-4 sm:mt-2 lg:mt-4">
                    <FilterProducts />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            {categoryProducts.length === 0 ? (
              <div className="flex items-center justify-center py-20">
                <p className="text-gray-500 text-lg">No products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:ml-0.5 gap-5 items-stretch py-4 sm:px-3 sm:py-8 px-3">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border border-gray-300 bg-white p-4 text-center hover:shadow-md h-[min-content] transition flex flex-col relative"
                  >
                    <Link
                      href={`/product/${product.id}`}
                      className="no-underline"
                    >
                      {product.discount && (
                        <span className="absolute top-3 left-3 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                          ON SALE
                        </span>
                      )}
                      <div className="relative h-37 sm:h-42 lg:h-55 w-full">
                        <Image
                          src={
                            product.thumbnail_image?.url || "/placeholder.png"
                          }
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                          className="object-contain"
                        />
                      </div>
                      <div className="mt-auto pt-4">
                        <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                          {product.name}
                        </p>
                        <p className="mt-4 font-semibold text-black hover:text-green-700">
                          {product.price?.has_discount ? (
                            <>
                              <span className="mr-2 text-sm text-gray-400 line-through">
                                Tk {product?.price?.original}
                              </span>
                              <span>Tk {product?.price?.final}</span>
                            </>
                          ) : (
                            <span>Tk {product?.price?.final}</span>
                          )}
                        </p>
                      </div>
                    </Link>
                    <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white cursor-pointer">
                      Quick Add
                    </button>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>
    </>
  );
}
