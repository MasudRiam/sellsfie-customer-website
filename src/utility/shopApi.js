import { ca } from "zod/v4/locales";
import { serverFetch } from "./server-fetch";

const SHOP_URL = "teqfiexyz";

export const shopApi = {
    getProductCategories: () => 
        serverFetch(`api/client/${SHOP_URL}/product/category`, {
            cache: "no-store",
        }),
}


export { SHOP_URL };