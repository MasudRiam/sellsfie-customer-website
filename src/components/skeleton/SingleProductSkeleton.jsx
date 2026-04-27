import { Skeleton } from "@/components/ui/skeleton"

export default function ProductDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT: Image Carousel */}
        <div className="lg:col-span-5">
          {/* Main image */}
          <Skeleton className="w-full h-[380px] bg-gray-200" />
          {/* Thumbnail strip */}
          <div className="flex justify-center gap-3 mt-4">
            <Skeleton className="w-[80px] h-[80px] bg-gray-200" />
            <Skeleton className="w-[80px] h-[80px] bg-gray-200" />
            <Skeleton className="w-[80px] h-[80px] bg-gray-200" />
          </div>
        </div>

        {/* MIDDLE: Product Info */}
        <div className="lg:col-span-5 space-y-4">
          {/* Product name */}
          <Skeleton className="h-7 w-3/4 bg-gray-200" />

          <hr />

          {/* Availability */}
          <Skeleton className="h-4 w-2/5 bg-gray-200" />

          {/* Price */}
          <Skeleton className="h-8 w-1/3 bg-gray-200" />

          {/* Variants */}
          <div className="flex gap-2">
            <Skeleton className="h-9 w-16 bg-gray-200 rounded" />
            <Skeleton className="h-9 w-16 bg-gray-200 rounded" />
            <Skeleton className="h-9 w-16 bg-gray-200 rounded" />
          </div>

          {/* Quantity selector */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-20 bg-gray-200" />
            <Skeleton className="h-9 w-8 bg-gray-200 rounded" />
            <Skeleton className="h-9 w-10 bg-gray-200 rounded" />
            <Skeleton className="h-9 w-8 bg-gray-200 rounded" />
          </div>

          {/* Add to cart + Buy it now */}
          <div className="flex gap-3">
            <Skeleton className="h-11 w-36 bg-gray-200 rounded" />
            <Skeleton className="h-11 w-36 bg-gray-200 rounded" />
          </div>
        </div>

        {/* RIGHT: Info Cards */}
        <div className="lg:col-span-2 space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-gray-100 px-2 py-5 text-center space-y-2">
              <Skeleton className="h-4 w-3/4 mx-auto bg-gray-200" />
              <Skeleton className="h-3 w-full bg-gray-200" />
              <Skeleton className="h-3 w-5/6 mx-auto bg-gray-200" />
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4 pt-5">
        {/* Tab buttons */}
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-10 w-32 bg-gray-200 rounded-full" />
          <Skeleton className="h-10 w-44 bg-gray-200 rounded-full" />
        </div>
        {/* Tab content */}
        <Skeleton className="h-4 w-full bg-gray-200" />
        <Skeleton className="mt-2 h-4 w-5/6 bg-gray-200" />
        <Skeleton className="mt-2 h-4 w-4/6 bg-gray-200" />
      </div>
    </div>
  )
}