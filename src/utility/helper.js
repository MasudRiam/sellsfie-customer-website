import Cookies from "js-cookie";

export const getToken = () => {
  const token = Cookies.get("jwt");
  return token || "";
};

export const setToken = (token) => {
  Cookies.set("jwt", token, {
    expires: 7,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
};

export const removeToken = () => {
    Cookies.remove("jwt", { path: "/" });
}