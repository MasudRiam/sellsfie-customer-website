/**
 * CART API INTEGRATION SUMMARY
 * 
 * Step 1: Create QueryClient Provider in your app
 * Step 2: Use the hooks in your components
 * Step 3: Handle API responses
 */

// ============================================================
// STEP 1: Setup QueryClient Provider (in layout or _app)
// ============================================================

// File: src/components/layout/ClientProviders.js
// Make sure you have QueryClientProvider:

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* other providers */}
      {children}
    </QueryClientProvider>
  );
}

// ============================================================
// STEP 2: Use in Your Components
// ============================================================

// SIMPLE USAGE - Add to Cart Button:
// import { useAddToCartWithSync } from "@/hooks/useAddToCartWithSync";
//
// const { addToCartWithAPI, isPending } = useAddToCartWithSync();
//
// const handleAdd = () => {
//   addToCartWithAPI({
//     product_id: 123,
//     variant_id: 456,
//     quantity: 1,
//     choice: ["size-M"],
//     cookie_id: null
//   });
// };

// ============================================================
// STEP 3: API Request Format
// ============================================================

/*
POST: /api/client/teqfiexyz/product/cart

Request Body:
{
  "product_id": 123,           // REQUIRED
  "variant_id": 456,           // Optional (nullable)
  "quantity": 1,               // REQUIRED, min 1
  "choice": ["size-M", "color-red"],  // Optional (array)
  "cookie_id": "abc123xyz"     // Optional (string)
}

Expected Response:
{
  "success": true,
  "message": "Item added to cart",
  "data": {
    "cart_id": "...",
    "item_id": "...",
    "quantity": 1,
    ...
  }
}
*/

// ============================================================
// COMPARISON: useQuery vs useMutation
// ============================================================

/*
❌ DON'T USE: useQuery for POST
const { data } = useQuery({
  queryKey: ["addCart"],
  queryFn: () => axios.post(...) // WRONG!
});

✅ DO USE: useMutation for POST
const { mutateAsync } = useMutation({
  mutationFn: (data) => axios.post(...)
});

Why?
- useQuery: For fetching/reading data (GET)
- useMutation: For modifying data (POST, PUT, DELETE)
*/

// ============================================================
// ADVANCED: Handle Both New & Edit with Single API
// ============================================================

/*
If your backend uses the same endpoint for both add & edit:

Option 1: Send ID for existing items
{
  "product_id": 123,
  "variant_id": 456,
  "quantity": 5,  // New quantity
  "item_id": "existing-cart-item-id"  // If editing
}

Option 2: Backend determines by product_id + variant_id combo
{
  "product_id": 123,
  "variant_id": 456,
  "quantity": 5
  // If this combo exists, update; otherwise, create
}

The hooks handle this automatically!
*/

// ============================================================
// TROUBLESHOOTING
// ============================================================

/*
Issue: "useAddToCartMutation not found"
Solution: Make sure the file exists at src/hooks/useAddToCartMutation.js

Issue: Toast not showing
Solution: Ensure you have Sonner provider in your ClientProviders

Issue: Data not persisting to localStorage
Solution: Check that useCartStore persists correctly with "cart" key

Issue: Quantity still increments but API fails
Solution: This is expected (optimistic update). Your API failure toast shows
         the error, and on retry, the correct state syncs.
*/
