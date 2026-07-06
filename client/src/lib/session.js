const SESSION_KEY = "sauti_session_id";

export function getSessionId() {
  return localStorage.getItem(SESSION_KEY);
}

export function setSessionId(id) {
  localStorage.setItem(SESSION_KEY, id);
}

export async function ensureSession(api) {
  let id = getSessionId();
  if (id) return id;

  const session = await api.createSession();
  id = session.id;
  setSessionId(id);
  return id;
}
