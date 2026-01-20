export const getToken = () => {
    const data = localStorage.getItem("jwt");
    const token = JSON.parse(data);

    if (!token) {
        return "";
    }
    return token;
};