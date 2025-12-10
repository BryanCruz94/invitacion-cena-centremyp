const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

async function apiClient(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config = {
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
    method: options.method || "GET",
    body: options.body,
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    let errorMessage = `Error HTTP ${response.status}`;
    try {
      const errorBody = await response.json();
      if (errorBody && errorBody.message) {
        errorMessage = errorBody.message;
      }
    } catch {
      // ignoramos si no se puede parsear el JSON
    }
    throw new Error(errorMessage);
  }

  // Si no hay contenido, devolvemos null
  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export default apiClient;
