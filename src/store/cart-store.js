"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      open: false,
      items: [],

      setOpen: (open) => set({ open }),

      setCart: (items) => set({ items }),

      clearCart: () => set({ items: [] }),

      
      addToCart: (product) =>
        set((state) => {
        const exist = state.items.find((i) => i.id === product.id);

        const incomingQty = product.qty ?? 1;

        let items;

        if (exist) {
          const newQty = Math.min(
            exist.qty + incomingQty,
            product.stock
          );

          items = state.items.map((i) =>
            i.id === product.id
              ? { ...i, qty: newQty }
              : i
          );
        } else {
          items = [
            ...state.items,
            {
              ...product,
              qty: Math.min(incomingQty, product.stock),
            },
          ];
        }

        return { open: true, items };
      }),

            
       
      updateQty: (id, type) =>
            set((state) => ({
              items: state.items.map((i) => {
                if (i.id !== id) return i;

                if (type === "inc") {

                  if (i.qty >= i.stock) return i;
                  return { ...i, qty: i.qty + 1 };
                }

                return {
                  ...i,
                  qty: Math.max(1, i.qty - 1),
                };
              }),
            })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
    }),
    {
      name: "cart", // localStorage key
      partialize: (state) => ({ items: state.items }), // don't persist open state
    }
  )
);
