import axiosInstance from "@/utility/axios";

export const mefetchData = async () => {
    const res =  await axiosInstance.get("api/client/me");
    return res.data;
}