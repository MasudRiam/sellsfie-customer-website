"use client";

import { useQuery } from "@tanstack/react-query";
import { allProductfetchData } from "../queries/allProduct";

export const useAllProductfetchData = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allProductData"],
    queryFn: allProductfetchData,
  });
  return {
    data: data ?? [], 
    isLoading,
    isError,
  };
};
