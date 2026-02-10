import AddressPage from "./AddressPage";
import { shopApi } from "@/utility/shopApi";

export default async function Page() {
  // Server-side fetch
  const UserInfo = await shopApi.getShopAbout();

  const user = UserInfo?.data || {};

  return <AddressPage user={user} />;
}
