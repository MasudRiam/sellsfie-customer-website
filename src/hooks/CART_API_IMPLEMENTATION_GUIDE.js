/**
 * IMPLEMENTATION GUIDE: Using the Cart API Hooks
 * 
 * These hooks handle:
 * ✅ Adding new products to cart
 * ✅ Updating quantities (edits)
 * ✅ localStorage persistence (instant UI update)
 * ✅ API sync
 * ✅ Error handling with toast notifications
 */

// ============================================================
// EXAMPLE 1: Basic Add to Cart in Product Component
// ============================================================
"use client";

import { useAddToCartWithSync } from "@/hooks/useAddToCartWithSync";

export default function ProductAction({ product }) {
  const { addToCartWithAPI, isPending } = useAddToCartWithSync();

  const handleAddToCart = async () => {
    try {
      await addToCartWithAPI({
        product_id: product.id,
        variant_id: product.selectedVariant?.id || null, // optional
        quantity: product.quantity, // from your quantity selector
        choice: product.selectedChoices || null, // e.g., ["size-M", "color-red"]
        cookie_id: null, // if you have cookie tracking
      });
    } catch (error) {
      console.error("Failed to add to cart:", error);
      // Toast is already shown by the hook
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isPending}
      className="btn-add-to-cart"
    >
      {isPending ? "Adding..." : "Add to Cart"}
    </button>
  );
}

// ============================================================
// EXAMPLE 2: Update Quantity (Edit)
// ============================================================
"use client";

import { useAddToCartWithSync } from "@/hooks/useAddToCartWithSync";
import { useCartStore } from "@/store/cart-store";

export default function CartItem({ item }) {
  const { addToCartWithAPI, isPending } = useAddToCartWithSync();

  const handleQuantityChange = async (newQuantity) => {
    try {
      // For updates, send the new quantity
      await addToCartWithAPI({
        product_id: item.product_id,
        variant_id: item.variant_id,
        quantity: newQuantity,
        choice: item.choice,
        cookie_id: item.cookie_id,
      });
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  return (
    <div className="cart-item">
      <div>{item.name}</div>
      <div className="quantity-control">
        <button
          onClick={() => handleQuantityChange(item.qty - 1)}
          disabled={isPending}
        >
          -
        </button>
        <input
          type="number"
          value={item.qty}
          onChange={(e) => handleQuantityChange(Number(e.target.value))}
          disabled={isPending}
        />
        <button
          onClick={() => handleQuantityChange(item.qty + 1)}
          disabled={isPending}
        >
          +
        </button>
      </div>
    </div>
  );
}

// ============================================================
// EXAMPLE 3: Using Only the Mutation Hook (No localStorage)
// ============================================================
import { useAddToCartMutation } from "@/hooks/useAddToCartMutation";

export default function AdvancedCartComponent() {
  const { mutateAsync: addToCart, isPending } = useAddToCartMutation();

  const handleAdd = async () => {
    const result = await addToCart({
      product_id: 123,
      quantity: 2,
      variant_id: 456,
    });
    console.log("Server response:", result);
  };

  return <button onClick={handleAdd}>{isPending ? "Loading..." : "Add"}</button>;
}

// ============================================================
// EXAMPLE 4: With Variant Selection
// ============================================================
"use client";

import { useState } from "react";
import { useAddToCartWithSync } from "@/hooks/useAddToCartWithSync";

export default function ProductWithVariants({ product }) {
  const { addToCartWithAPI, isPending } = useAddToCartWithSync();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      toast.error("Please select a variant");
      return;
    }

    await addToCartWithAPI({
      product_id: product.id,
      variant_id: selectedVariant.id,
      quantity,
      choice: selectedChoices, // ["size-M", "color-red", "material-cotton"]
      cookie_id: getCookieId(), // if needed
    });
  };

  return (
    <div>
      {/* Variant selector */}
      <select
        value={selectedVariant?.id || ""}
        onChange={(e) =>
          setSelectedVariant(
            product.variants.find((v) => v.id === Number(e.target.value))
          )
        }
      >
        <option>Select Variant</option>
        {product.variants.map((v) => (
          <option key={v.id} value={v.id}>
            {v.name}
          </option>
        ))}
      </select>

      {/* Choices (size, color, etc) */}
      {/* Your choice selection UI */}

      {/* Quantity */}
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <button onClick={handleAddToCart} disabled={isPending}>
        {isPending ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}
