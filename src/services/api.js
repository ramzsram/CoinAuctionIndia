const BASE_URL = "https://{baseURL}:{PORT}/{baseContext}";

export async function apiGet(path) {
  try {
    const response = await fetch(`${path}`);
    if (!response.ok) throw new Error("Request failed");
    return await response.json();
  } catch (err) {
    console.error("GET error:", err);
    throw err;
  }
}

export async function apiPost(path, payload) {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error("Request failed");
    return await response.json();
  } catch (err) {
    console.error("POST error:", err);
    throw err;
  }
}
