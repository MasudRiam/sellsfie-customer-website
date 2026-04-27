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
    // Try to get error details if possible
    let errorText;
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      errorText = JSON.stringify(await res.json());
    } else {
      errorText = await res.text();
    }
    throw new Error(`Error fetching ${endpoint}: ${res.statusText} - ${errorText}`);
  }

  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res.json();
  } else {
    // Not JSON, return raw text or throw
    const text = await res.text();
    throw new Error(`Expected JSON but got: ${text.substring(0, 100)}`);
  }
};
