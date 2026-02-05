export async function submitLead(lead) {
  const apiBase =
    process.env.REACT_APP_API_BASE_URL ||
    (typeof window !== "undefined" && window.location.hostname === "localhost"
      ? "http://localhost:8080"
      : "https://traincape-backend-1.onrender.com");

  const resp = await fetch(`${apiBase}/contact/lead`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });

  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    throw new Error(data?.message || "Failed to send message.");
  }

  return data;
}

