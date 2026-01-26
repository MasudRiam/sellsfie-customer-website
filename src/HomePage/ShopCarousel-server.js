import { shopApi } from "@/utility/shopApi";
import { ShopCarousel } from "./ShopCarousel";

export default async function ShopCarouselServer() {
    const hotProductsData = await shopApi.getHotProducts();

    return <ShopCarousel hotProductsData={hotProductsData} />;
}