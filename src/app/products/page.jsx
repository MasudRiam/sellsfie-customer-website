import React from "react";
import FilterProducts from "./filterProducts";
import Image from "next/image";
import cosmeticsProduct from "@/assets/img/product/cosmetics.png";
import pizzaproduct from "@/assets/img/product/pizza.png";
import plasticbottol from "@/assets/img/product/plastic-bottol.jpg";
import flowerpot from "@/assets/img/product/flower-pot.jpg";
import { IoIosArrowDown } from "react-icons/io";

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
            <div className="mb-4 lg:hidden">
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

                  <div className="mt-4">
                    <FilterProducts />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-3 2xl:grid-cols-5 lg:ml-0.5 gap-5 items-stretch">
              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <Image
                  src={cosmeticsProduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                    দেশি সরিষার তেল cdfvgbhnjcfvgbhnmk,cdfvgbhnmk
                  </p>
                  <p className="mt-4 font-semibold">Tk 1,550.00</p>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <Image
                  src={pizzaproduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                    Gawa Ghee / ঘি
                  </p>
                  <p className="mt-4 font-semibold">Tk 1,800.00</p>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col relative">
                <span className="absolute top-3 left-3 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                  ON SALE
                </span>
                <Image
                  src={cosmeticsProduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                    Natural Honeycomb 1kg
                  </p>
                  <p className="mt-4 font-semibold">
                    Tk 2,250.00{" "}
                    <span className="ml-2 text-sm text-gray-400 line-through">
                      Tk 2,500.00
                    </span>
                  </p>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <Image
                  src={pizzaproduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                    Honey Nuts
                  </p>
                  <p className="mt-4 font-semibold">Tk 1,500.00</p>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <Image
                  src={plasticbottol}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                    Honey Nuts
                  </p>
                  <p className="mt-4 font-semibold">Tk 1,500.00</p>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <Image
                  src={cosmeticsProduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                    Honey Nuts
                  </p>
                  <p className="mt-4 font-semibold">Tk 1,500.00</p>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
                <Image
                  src={flowerpot}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                    Flower Pot
                  </p>
                  <p className="mt-4 font-semibold">Tk 190.00</p>
                  <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                    Quick Add
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default page;
