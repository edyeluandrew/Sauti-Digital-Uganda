const API_BASE = import.meta.env.VITE_API_URL || "";

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Request failed: ${res.status}`);
  }

  return res.json();
}

export const api = {
  createSession: () =>
    request("/api/sessions", {
      method: "POST",
      body: JSON.stringify({ user_agent: navigator.userAgent }),
    }),

  getSessionCount: () => request("/api/sessions/count"),

  updateSession: (id, data) =>
    request(`/api/sessions/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  submitQuiz: (data) =>
    request("/api/quiz", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getQuizStats: () => request("/api/quiz/stats"),

  submitPoll: (data) =>
    request("/api/polls", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getPollAggregate: () => request("/api/polls/aggregate"),
};
