import { Suspense } from "react";
import CategoryShowProducts from "./CategoryShowProducts";
import { AllProductSkeleton } from "@/components/skeleton/AllProductSkeleton";

export default async function Page({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  return (
    <Suspense fallback={<AllProductSkeleton />}>
      <CategoryShowProducts searchParams={resolvedSearchParams} />
    </Suspense>
  );
}