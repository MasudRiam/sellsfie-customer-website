import { SHOP_URL } from "./shopApi";

/**
 * Generate or retrieve a unique cookie_id for the shop
 * Stored in localStorage per shop basis
 * Format: shop_timestamp_random
 */
export const getCookieId = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const storageKey = `cookie_id_${SHOP_URL}`;
  let cookieId = localStorage.getItem(storageKey);

  if (!cookieId) {
    // Generate new cookie_id if it doesn't exist
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 11);
    cookieId = `${SHOP_URL}_${timestamp}_${random}`;
    localStorage.setItem(storageKey, cookieId);
  }

  return cookieId;
};
