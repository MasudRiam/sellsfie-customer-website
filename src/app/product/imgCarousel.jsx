"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const ImgCarousel = ({ images }) => {
  const [api, setApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[530px] w-full p-4 flex items-center justify-center">
                <Image
                  src={img}
                  fill
                  alt="Product Image"
                  className="object-contain bg-gray-100"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-green-500 rounded-full shadow"/>
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-green-500 rounded-full shadow"/>
      </Carousel>

      <div className="mt-4 flex gap-3 justify-center">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => api.scrollTo(index)}
            className={`relative w-20 h-20 border transition
              ${
                activeIndex === index
                  ? "border-green-600 ring-2 ring-green-500/40"
                  : "hover:border-green-600"
              }
            `}
          >
            <Image
              src={img}
              alt="Thumbnail"
              fill
              className="object-contain bg-gray-100 p-2"
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default ImgCarousel;
