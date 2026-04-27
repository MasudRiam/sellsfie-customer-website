import { getBackendUrl } from "./backend-url";

const BASE_URL = getBackendUrl();

const buildUrl = (baseUrl, endpoint) => {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const normalizedEndpoint = endpoint.startsWith("/")
    ? endpoint.slice(1)
    : endpoint;

  return `${normalizedBase}${normalizedEndpoint}`;
};

export const serverFetch = async (endpoint) => {
  if (!BASE_URL) {
    console.error(
      `serverFetch skipped: backend URL is missing. Endpoint: ${endpoint}`,
    );
    return null;
  }

  const options = {
    cache: "no-store",
  };

  try {
    const res = await fetch(buildUrl(BASE_URL, endpoint), options);

    if (!res.ok) {
      console.error(`Error fetching ${endpoint}: ${res.status} ${res.statusText}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
};
