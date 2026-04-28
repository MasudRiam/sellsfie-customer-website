"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/utility/axios";
import { toast } from "sonner";

export const useAddToCartMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (cartData) => {
      // cartData should contain: product_id, variant_id, quantity, choice, cookie_id
      const response = await axiosInstance.post(
        "/api/client/teqfiexyz/product/cart",
        {
          product_id: cartData.product_id,
          variant_id: cartData.variant_id || null,
          quantity: cartData.quantity,
          choice: cartData.choice || null,
          cookie_id: cartData.cookie_id || null,
        }
      );
      return response.data;
    },
    onSuccess: (data, variables) => {
      // Invalidate cart queries to refetch if needed
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      
      toast.success(
        variables.quantity > 1
          ? `Added ${variables.quantity} items to cart`
          : "Added to cart"
      );
    },
    onError: (error) => {
      const errorMsg =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to add item to cart";
      
      toast.error(errorMsg);
    },
  });
};
