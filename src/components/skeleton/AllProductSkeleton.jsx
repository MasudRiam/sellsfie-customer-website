import { Skeleton } from "@/components/ui/skeleton"

export function ProductCardSkeleton() {
  return (
    <div className="relative border border-gray-300 bg-white p-4 text-center h-full flex flex-col">
      <Skeleton className="absolute top-2 left-2 h-[22px] w-[68px] rounded-full" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="mt-4 h-3.5 w-4/5 mx-auto" />
      <Skeleton className="mt-1.5 h-3.5 w-3/5 mx-auto" />
      <Skeleton className="mt-4 h-4 w-1/2 mx-auto" />
      <Skeleton className="mt-4 h-[38px] w-full" />
    </div>
  )
}

export function AllProductSkeleton() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-3 sm:py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </section>
  )
}