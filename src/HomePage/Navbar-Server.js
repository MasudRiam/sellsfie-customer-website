import { shopApi } from "@/utility/shopApi";
import Navbar from "./Navbar";

export default async function NavbarServer() {
    const categoriesData = await shopApi.getProductCategories();

    return <Navbar categoriesData={categoriesData} />;
}