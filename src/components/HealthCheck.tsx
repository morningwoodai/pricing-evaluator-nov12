import { useEffect, useState } from 'react';

type Health = { status: string } | { error: string };

export default function HealthCheck() {
  const [data, setData] = useState<Health | null>(null);
  const [loading, setLoading] = useState(true);

  const apiBase = import.meta.env.VITE_API_BASE as string | undefined;

  useEffect(() => {
    const base = apiBase ?? '';
    const url = `${base}/api/ping`.replace(/\/+api/, '/api');
    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setData({ error: err.message }))
      .finally(() => setLoading(false));
  }, [apiBase]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 16 }}>
      <h2>API Health Check</h2>
      <p>Base: <code>{apiBase ?? '(relative)'}</code></p>
      <p>
        Status:{' '}
        <strong>
          {data && 'status' in data ? data.status : data && 'error' in data ? `error - ${data.error}` : 'unknown'}
        </strong>
      </p>
    </div>
  );
}
