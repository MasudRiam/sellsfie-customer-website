import { Suspense } from "react";
import ProductDetailsPage from "./ProductDetailsPage";
import ProductDetailSkeleton from "@/components/skeleton/SingleProductSkeleton";


export default function page({ params }) {
  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetailsPage params={params} />
    </Suspense>
  );
}