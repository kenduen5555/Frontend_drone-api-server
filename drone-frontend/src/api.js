const API_BASE = import.meta.env.VITE_API_BASE;
const DRONE_ID = import.meta.env.VITE_DRONE_ID;

if (!API_BASE) {
  console.warn('VITE_API_BASE not set');
}

export async function fetchConfig() {
  const res = await fetch(`${API_BASE}/configs/${DRONE_ID}`);
  if (!res.ok) throw new Error('Failed to fetch config');
  return res.json();
}

export async function fetchStatus() {
  const res = await fetch(`${API_BASE}/status/${DRONE_ID}`);
  if (!res.ok) throw new Error('Failed to fetch status');
  return res.json();
}

export async function fetchLogs(page = 1) {
  const res = await fetch(`${API_BASE}/logs/${DRONE_ID}?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch logs');
  return res.json(); // expects { page, totalPages, totalItems, logs }
}

export async function postLog({ drone_id, drone_name, country, celsius }) {
  const res = await fetch(`${API_BASE}/logs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ drone_id, drone_name, country, celsius })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to create log');
  return data;
}

export { DRONE_ID };
