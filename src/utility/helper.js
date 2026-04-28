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


export const numberFormatterForTaka = (value) => {
  if (value == null) return "৳0.00";

  if (Number(value) < 0) {
    return (
      "-৳" +
      new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Math.abs(Number(value)))
    );
  }

  return (
    "৳" +
    new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value))
  );
}