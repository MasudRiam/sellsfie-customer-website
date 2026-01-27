import { serverFetch } from "./server-fetch";

const SHOP_URL = "teqfiexyz";

export const shopApi = {

    //ISR with revalidation every hour
    getProductCategories: () => 
        serverFetch(`api/client/${SHOP_URL}/product/category`, {
            next: { revalidate: 3600}, // Revalidate every hour
        }),
    
    getAllProducts: () => 
        serverFetch(`api/client/${SHOP_URL}/product/all`, {
             cache: 'no-store' // Always fetch fresh data
        }),
    
    getHotProducts: () => 
        serverFetch(`api/client/${SHOP_URL}/product/top-products`, {
            next: { revalidate: 3600}, // Revalidate every hour
        }),
    
    getProductDetails: (productId) => 
        serverFetch(`api/client/${SHOP_URL}/product/details/${productId}`, {
             cache: 'no-store' // Always fetch fresh data
        }),
}


export { SHOP_URL };