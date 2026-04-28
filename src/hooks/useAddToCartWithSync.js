"use client";

import { useAddToCartMutation } from "./useAddToCartMutation";
import { useCartStore } from "@/store/cart-store";

/**
 * This hook combines Zustand localStorage persistence with API sync
 * Usage example:
 * 
 * const { addToCartWithAPI, isPending } = useAddToCartWithSync();
 * 
 * await addToCartWithAPI({
 *   product_id: 1,
 *   variant_id: 2,
 *   quantity: 1,
 *   choice: ["size-M", "color-red"],
 *   cookie_id: "optional-cookie"
 * });
 */
export const useAddToCartWithSync = () => {
  const { addToCart } = useCartStore();
  const addToCartMutation = useAddToCartMutation();

  const addToCartWithAPI = async (cartData) => {
    // Step 1: Add to localStorage immediately (optimistic update)
    const product = {
      id: cartData.product_id,
      product_id: cartData.product_id,
      variant_id: cartData.variant_id,
      quantity: cartData.quantity,
      choice: cartData.choice,
      qty: cartData.quantity,
    };

    addToCart(product);

    // Step 2: Sync with API
    return addToCartMutation.mutateAsync(cartData);
  };

  return {
    addToCartWithAPI,
    isPending: addToCartMutation.isPending,
    isError: addToCartMutation.isError,
    error: addToCartMutation.error,
  };
};
