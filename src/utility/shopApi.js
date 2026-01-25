import { serverFetch } from "./server-fetch";

const SHOP_URL = "teqfiexyz";

export const shopApi = {

    //ISR with revalidation every hour
    getProductCategories: () => 
        serverFetch(`api/client/${SHOP_URL}/product/category`, {
            next: { revalidate: 3600}, // Revalidate every hour
        }),
}


export { SHOP_URL };