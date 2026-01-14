"use client";
import { CartProvider } from "@/context/cart-context";
import CartSheet from "@/components/cart/CartSheet";

export default function CartRootProvider({ children }) {
  return (
    <CartProvider>
      {children}
      <CartSheet />
    </CartProvider>
  );
}
