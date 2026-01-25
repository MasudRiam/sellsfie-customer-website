"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartRootProvider from "@/components/providers/CartProvider";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export default function ClientProviders({ children }) {
  return (
    <CartRootProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
      <Toaster position="top-right" richColors />
    </CartRootProvider>
  );
}