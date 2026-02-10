import { serverFetch } from "./server-fetch";

const SHOP_URL = "teqfiexyz";

export const shopApi = {
  //ISR with revalidation every hour
  getProductCategories: () =>
    serverFetch(`api/client/${SHOP_URL}/product/category`, {revalidate: 30}),

  getAllProducts: (categoryId = null) => {
    const endpoint = categoryId
      ? `api/client/${SHOP_URL}/product/all?category_id=${categoryId}`
      : `api/client/${SHOP_URL}/product/all`;

    return serverFetch(endpoint, {
      noStore: true, // Always fetch fresh data
    });
  },

  getHotProducts: () =>
    serverFetch(`api/client/${SHOP_URL}/product/top-products`, {
      revalidate: 3600,
    }),

  getProductDetails: (productId) =>
    serverFetch(`api/client/${SHOP_URL}/product/details/${productId}`, {
      noStore: true,
    }),

  getShopAbout: () =>
    serverFetch(`api/client/shop/info/${SHOP_URL}`, {
      revalidate: 30,
    }),
  
};


export { SHOP_URL };
