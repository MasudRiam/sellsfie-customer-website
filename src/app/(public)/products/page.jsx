import { Suspense } from "react";
import FilterProducts from "./filterProducts";
import CategoryShowProducts from "./CategoryShowProducts";
import { AllProductSkeleton } from "@/components/skeleton/AllProductSkeleton";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { IoIosArrowDown } from "react-icons/io";
import { Badge } from "@/components/ui/badge";

export default async function Page({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  return (
    <section className="mx-auto w-full max-w-7xl px-1 py-4 sm:px-3 sm:py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block lg:sticky lg:top-24 lg:mr-0.5 h-fit">
          <FilterProducts />
        </aside>

        <main>
          <div className="ml-3 md:mt-6 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Badge variant="secondary" className="px-3 py-2 text-sm">
                  Filters <IoIosArrowDown size={18} strokeWidth={2} />
                </Badge>
              </SheetTrigger>

              <SheetContent side="left" className="w-[78vw] max-w-70 sm:w-85 sm:max-w-none md:w-90">
                <SheetHeader>
                  <SheetTitle>{""}</SheetTitle>
                </SheetHeader>

                <div className="md:mt-4 sm:mt-2 lg:mt-4">
                  <FilterProducts />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Suspense fallback={<AllProductSkeleton />}>
            <CategoryShowProducts
              key={resolvedSearchParams?.category_id ?? "all"}
              searchParams={resolvedSearchParams}
            />
          </Suspense>
        </main>
      </div>
    </section>
  );
}