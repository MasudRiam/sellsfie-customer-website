"use client"

import { useQuery } from "@tanstack/react-query";
import { mefetchData } from "@/utility/queries/me";

export const useMefetchData = () => {
    return useQuery({
        queryKey: ["meData"],
        queryFn: mefetchData,
    });
}