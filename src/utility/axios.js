import axios from "axios";
import { getToken } from "./helper";

const defaultOptions = {
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
};

console.log("NODE_ENV", process.env.NODE_ENV);

let axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(function (config) {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
