import axiosInstance from "@/utility/axios";

export const allProductfetchData = async () => {
  const res = await axiosInstance.get("api/client/teqfiexyz/product/all");
  return res.data?.data ?? [];
};
