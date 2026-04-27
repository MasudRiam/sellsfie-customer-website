import { Skeleton } from "@/components/ui/skeleton"

export function ShopCarouselItemSkeleton() {
  return (
    <div className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/5 p-2">
      <div className="p-2">
        <Skeleton className="aspect-square rounded-full w-full" />
        <Skeleton className="mt-3 h-4 w-3/5 mx-auto" />
      </div>
    </div>
  )
}

export function ShopCarouselSkeleton() {
  return (
    <div className="w-full relative">
      <div className="flex overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <ShopCarouselItemSkeleton key={i} />
        ))}
      </div>
      <Skeleton className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full" />
      <Skeleton className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full" />
    </div>
  )
}