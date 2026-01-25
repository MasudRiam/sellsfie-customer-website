const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const serverFetch = async (endpoint, options = {}) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!res.ok) {
        throw new Error(`Error fetching ${endpoint}: ${res.statusText}`);
    }
    return res.json();
}