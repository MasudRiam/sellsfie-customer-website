"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import CartSheet from "../cart/CartSheet";

const queryClient = new QueryClient();

export default function ClientProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <CartSheet />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
