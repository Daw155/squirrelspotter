// Public config. Everything here is visible to anyone who visits the site, so never put secrets in it.

const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

// TODO: replace with the deployed backend URL once it's hosted.
const PRODUCTION_API_BASE_URL = "";

export const API_BASE_URL = isLocalhost ? "http://localhost:8080" : PRODUCTION_API_BASE_URL;
