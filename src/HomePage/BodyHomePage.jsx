import React from "react";
import Image from "next/image";
import bodymainImage from "@/assets/img/coconut.jpg";
import cosmeticsProduct from "@/assets/img/product/cosmetics.png";
import pizzaproduct from "@/assets/img/product/pizza.png";
import plasticbottol from "@/assets/img/product/plastic-bottol.jpg";
import flowerpot from "@/assets/img/product/flower-pot.jpg";
import sllsfieShortLogo from "@/assets/logo/sellsfiemini.png";
import Link from "next/link";

const BodyHomePage = () => {
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
      <div className="mx-auto max-w-[1280px] px-4 py-10">
        <h1 className="text-center text-3xl tracking-wide font-normal mb-7 uppercase">
          All Product
        </h1>

        <section className="mx-auto w-full max-w-[1280px] px-1 py-4 sm:px-3 sm:py-8">
          <div className="grid grid-cols-2  md:grid-cols-3 2xl:grid-cols-5 gap-5 items-stretch">
            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
              <Link href="/product" className="no-underline">
                <Image
                  src={cosmeticsProduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto pt-4">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    Cusmetics products
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">
                    Tk 1,550.00
                  </p>
                </div>
              </Link>
              <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                Quick Add
              </button>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
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
                  <p className="mt-4 font-semibold text-black hover:text-green-700">
                    Tk 1,800.00
                  </p>
                </div>
              </Link>
              <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                Quick Add
              </button>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col relative">
              <Link href="/product" className="no-underline">
                <span className="absolute top-3 left-3 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                  ON SALE
                </span>
                <Image
                  src={cosmeticsProduct}
                  alt="Product"
                  className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
                />
                <div className="mt-auto pt-4">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    Natural Honeycomb 1kg
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">
                    Tk 2,250.00{" "}
                    <span className="ml-2 text-sm text-gray-400 line-through">
                      Tk 2,500.00
                    </span>
                  </p>
                </div>
              </Link>
              <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                Quick Add
              </button>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
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
                  <p className="mt-4 font-semibold text-black hover:text-green-700">
                    Tk 1,500.00
                  </p>
                </div>
              </Link>
              <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                Quick Add
              </button>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
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
                  <p className="mt-4 font-semibold text-black hover:text-green-700">
                    Tk 1,500.00
                  </p>
                </div>
              </Link>
              <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                Quick Add
              </button>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
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
                  <p className="mt-4 font-semibold text-black hover:text-green-700">
                    Tk 1,500.00
                  </p>
                </div>
              </Link>
              <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                Quick Add
              </button>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
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
                  <p className="mt-4 font-semibold text-black hover:text-green-700">
                    Tk 190.00
                  </p>
                </div>
              </Link>
              <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                Quick Add
              </button>
            </div>
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BodyHomePage;
