// Selects the backend URL for local or deployed use; values here are public, never secrets.
const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

const PRODUCTION_API_BASE_URL = "https://squirrelspotter-qu1l.onrender.com";

export const API_BASE_URL = isLocalhost ? "http://localhost:8080" : PRODUCTION_API_BASE_URL;
