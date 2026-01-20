"use client";
import axiosInstance from "@/utility/axios";
import { useQuery } from "@tanstack/react-query";


export const useMefetchData = () => {
    return useQuery({
        queryKey: ["me-data"],
        queryFn: () => axiosInstance.get("api/client/me").then(res => res.data)
    })
}