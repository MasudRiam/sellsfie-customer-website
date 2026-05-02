"use client";

import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utility/axios";
import { toast } from "sonner";

export const useCheckoutMutation = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await axiosInstance.post(
        "/api/client/teqfiexyz/product/checkout",
        payload
      );

      return response.data;
    },
    onSuccess: () => {
      toast.success("Order placed successfully");
    },
    onError: (error) => {
      const errorMsg =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to place order";

      toast.error(errorMsg);
    },
  });
};
