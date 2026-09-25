// Provides browser-side requests to the SquirrelSpotter backend.
import { API_BASE_URL } from "./config.js";

export async function getHealth() {
  const response = await fetch(`${API_BASE_URL}/api/health`);
  if (!response.ok) {
    throw new Error(`Health check failed: ${response.status}`);
  }
  return response.json();
}
