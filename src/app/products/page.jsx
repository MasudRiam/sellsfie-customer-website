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

const page = () => {
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
                  className="w-[78vw] max-w-[280px] sm:w-[340px] sm:max-w-none md:w-[360px]">
                  <SheetHeader>
                    <SheetTitle>{""}</SheetTitle>
                  </SheetHeader>

                  <div className="md:mt-4 sm:mt-2 lg:mt-4">
                    <FilterProducts />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:ml-0.5 gap-5 items-stretch py-4 sm:px-3 sm:py-8 px-3">
              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md h-[min-content] transition flex flex-col">
                <Link href="/product" className="no-underline">
                <Image
                  src={cosmeticsProduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto pt-4">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    দেশি সরিষার তেল
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">Tk 1,550.00</p>
                </div>
                  </Link>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white cursor-pointer">
                    Quick Add
                  </button>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-[min-content] flex flex-col">
                <Link href="/product" className="no-underline">
                <Image
                  src={pizzaproduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto pt-4">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    Gawa Ghee / ঘি
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">Tk 1,800.00</p>
                </div>
                  </Link>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white cursor-pointer">
                    Quick Add
                  </button>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-[min-content] flex flex-col relative">
                <Link href="/product" className="no-underline">
                <span className="absolute top-3 left-3 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                  ON SALE
                </span>
                <Image
                  src={cosmeticsProduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    Natural Honeycomb 1kg
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">
                    Tk 2,250.00{" "}
                  </p>
                </div>
                  </Link>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white cursor-pointer">
                    Quick Add
                  </button>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-[min-content] flex flex-col">
                <Link href="/product" className="no-underline">
                <Image
                  src={pizzaproduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto pt-4">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    Honey Nuts
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">Tk 1,500.00</p>
                </div>
                </Link>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white cursor-pointer">
                    Quick Add
                  </button>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-[min-content] flex flex-col">
                <Link href="/product" className="no-underline">
                <Image
                  src={plasticbottol}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto pt-4">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    Honey Nuts
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">Tk 1,500.00</p>
                </div>
                </Link>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white cursor-pointer">
                    Quick Add
                  </button>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-[min-content] flex flex-col">
                <Link href="/product" className="no-underline">
                <Image
                  src={cosmeticsProduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto pt-4">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    Honey Nuts
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">Tk 1,500.00</p>
                </div>
                </Link>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white cursor-pointer">
                    Quick Add
                  </button>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-[min-content] flex flex-col">
                <Link href="/product" className="no-underline">
                <Image
                  src={flowerpot}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto pt-4">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    Flower Pot
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">Tk 190.00</p>
                </div>
                </Link>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white cursor-pointer">
                    Quick Add
                  </button>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default page;
