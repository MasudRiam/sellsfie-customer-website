import { shopApi } from "@/utility/shopApi";
import Navbar from "./Navbar";

export default async function NavbarServer() {
    const categoriesData = await shopApi.getProductCategories();
    const shopAboutData = await shopApi.getShopAbout();
    console.log("Navbar categoriesData:", categoriesData);
    console.log("Navbar shopAboutData:", shopAboutData);

    return <Navbar categoriesData={categoriesData} aboutShopData={shopAboutData} />;
}