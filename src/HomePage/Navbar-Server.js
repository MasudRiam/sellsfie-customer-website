import { shopApi } from "@/utility/shopApi";
import Navbar from "./Navbar";

export default async function NavbarServer() {
    const categoriesData = await shopApi.getProductCategories();
    const shopAboutData = await shopApi.getShopAbout();

    return <Navbar categoriesData={categoriesData} aboutShopData={shopAboutData} />;
}