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

          return {
            open: true,
            items: exist
              ? state.items.map((i) =>
                  i.id === product.id
                    ? { ...i, qty: i.qty + 1 }
                    : i
                )
              : [...state.items, { ...product, qty: 1 }],
          };
        }),

      updateQty: (id, type) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id
              ? {
                  ...i,
                  qty:
                    type === "inc"
                      ? i.qty + 1
                      : Math.max(1, i.qty - 1),
                }
              : i
          ),
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
