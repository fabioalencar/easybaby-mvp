import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export function getStrapiURL(path = '') {
  return `${
    publicRuntimeConfig.STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
