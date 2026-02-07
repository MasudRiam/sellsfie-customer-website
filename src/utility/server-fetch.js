const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const serverFetch = async (endpoint,{ revalidate = null, noStore = false } = {}) => {
  const options = {};

  if (noStore) {
    options.cache = "no-store"; // no caching for auth/private data
  } else if (revalidate !== null) {
    options.next = { revalidate }; // ISR caching
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!res.ok) {
    throw new Error(`Error fetching ${endpoint}: ${res.statusText}`);
  }

  return res.json();
};
