"use client";

import * as React from "react"
import Image from "next/image"
import cosmeticsProduct from "@/assets/img/product/cosmetics.png";
import pizzaproduct from "@/assets/img/product/pizza.png";
import plasticbottol from "@/assets/img/product/plastic-bottol.jpg";
import flowerpot from "@/assets/img/product/flower-pot.jpg";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

const shops = [
  { id: 1, image: cosmeticsProduct, name: "Shop One" },
  { id: 2, image: pizzaproduct, name: "Shop Two" },
  { id: 3, image: plasticbottol, name: "Shop Three" },
  { id: 4, image: flowerpot, name: "Shop Four" },
  { id: 5, image: cosmeticsProduct, name: "Shop Five" },
  { id: 6, image: pizzaproduct, name: "Shop Six" },
  { id: 7, image: cosmeticsProduct, name: "Shop Seven" },
  { id: 8, image: pizzaproduct, name: "Shop Eight" },
  { id: 9, image: plasticbottol, name: "Shop Nine" },
  { id: 10, image: flowerpot, name: "Shop Ten" },
]
export function ShopCarousel() {
  const autoplay = React.useRef(
  Autoplay({
    delay: 4000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  })
);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    plugins={[autoplay.current]}
      className="w-full relative "
    >
    <CarouselContent>
    {shops.map((shop, index) => (
        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 sm:basis-1/3 basis-1/2 p-2">
        <Link href={`/product`} className="no-underline text-black">
        <div className="p-2">
            <div className="relative aspect-square rounded-full overflow-hidden group">
            <Image
                src={shop.image}
                alt={`shop-${index}`}
                fill
                className="object-cover mx-auto h-37 sm:h-42 lg:h-55 transition-transform duration-300 bg-white group-hover:scale-105"
            />
            <div className="
            absolute inset-0 
            bg-black/40 
            flex items-center justify-center 
            text-white text-xs md:text-sm font-medium
            opacity-0 
            group-hover:opacity-100 
            transition-opacity duration-400
          ">
        <span className="px-2 text-center">
          {shop.name}
        </span>
      </div>
        </div>
          <p className="text-sm md:text-base font-medium text-center">
              {shop.name}
            </p>
        </div>
        </Link>
        </CarouselItem>
    ))}
    </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
