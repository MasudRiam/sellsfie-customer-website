import { serverFetch } from "./server-fetch";

const SHOP_URL = "teqfiexyz";

export const shopApi = {
  getProductCategories: () =>
    serverFetch(`api/client/${SHOP_URL}/product/category`),

  getAllProducts: (categoryId = null) => {
    const endpoint = categoryId
      ? `api/client/${SHOP_URL}/product/all?category_id=${categoryId}`
      : `api/client/${SHOP_URL}/product/all`;

    return serverFetch(endpoint);
  },

  getHotProducts: () =>
    serverFetch(`api/client/${SHOP_URL}/product/top-products`),

  getProductDetails: (productId) =>
    serverFetch(`api/client/${SHOP_URL}/product/details/${productId}`),

  getShopAbout: () =>
    serverFetch(`api/client/shop/info/${SHOP_URL}`),
  
};


export { SHOP_URL };
