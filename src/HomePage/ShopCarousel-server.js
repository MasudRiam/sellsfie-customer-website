import { Suspense } from "react"
import { shopApi } from "@/utility/shopApi"
import { ShopCarousel } from "./ShopCarousel"
import { ShopCarouselSkeleton } from "@/components/skeleton/ShopCarouselSkeleton"

async function ShopCarouselData() {
  const hotProductsData = await shopApi.getHotProducts()
  if (!hotProductsData?.data?.length) {
    return <ShopCarouselSkeleton />
  }
  return <ShopCarousel hotProductsData={hotProductsData} />
}

export default function ShopCarouselServer() {
  return (
    <Suspense fallback={<ShopCarouselSkeleton />}>
      <ShopCarouselData />
    </Suspense>
  )
}