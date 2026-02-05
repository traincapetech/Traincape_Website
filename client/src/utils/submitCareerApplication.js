/**
 * Submit a career application to the backend
 * Uses Brevo transactional email to send to HR
 */
export async function submitCareerApplication(application) {
  const apiBase =
    process.env.REACT_APP_API_BASE_URL ||
    (typeof window !== "undefined" && window.location.hostname === "localhost"
      ? "http://localhost:8080"
      : "https://traincape-backend-1.onrender.com");

  const resp = await fetch(`${apiBase}/contact/career-application`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(application),
  });

  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    throw new Error(data?.message || "Failed to submit application.");
  }

  return data;
}
