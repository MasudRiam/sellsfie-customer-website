import { shopApi } from "@/utility/shopApi";
import Navbar from "./Navbar";

export default async function NavbarServer() {
    const categoriesData = await shopApi.getProductCategories();
    console.log("Fetched categories data in Navbar-Server:", categoriesData);

    return <Navbar categoriesData={categoriesData} />;
}