import { useState } from 'react';

type Result = { ltv: number; ltvToCac: number; paybackMonths: number } | { error: string };

export default function PricingForm() {
  const [monthlyPrice, setMonthlyPrice] = useState(50);
  const [cac, setCac] = useState(200);
  const [churn, setChurn] = useState(0.05);
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  const apiBase = import.meta.env.VITE_API_BASE ?? '';

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`${apiBase}/api/evaluate`.replace(/\/+api/, '/api'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ monthlyPrice, cac, churn }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || `HTTP ${res.status}`);
      setResult(json);
    } catch (err: any) {
      setResult({ error: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 16, marginTop: 24, borderTop: '1px solid #333' }}>
      <h2>Pricing Evaluator</h2>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
        <label>
          Monthly Price ($)
          <input type="number" value={monthlyPrice} onChange={e => setMonthlyPrice(+e.target.value)} />
        </label>
        <label>
          CAC ($)
          <input type="number" value={cac} onChange={e => setCac(+e.target.value)} />
        </label>
        <label>
          Churn (0–1)
          <input type="number" value={churn} onChange={e => setChurn(+e.target.value)} step="0.01" />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Calculating...' : 'Evaluate'}
        </button>
      </form>

      {result && 'error' in result && <p style={{ color: 'tomato' }}>Error: {result.error}</p>}
      {result && 'ltv' in result && (
        <ul style={{ marginTop: 16 }}>
          <li>LTV: ${result.ltv.toFixed(2)}</li>
          <li>LTV:CAC: {result.ltvToCac.toFixed(2)}×</li>
          <li>Payback: {result.paybackMonths.toFixed(1)} months</li>
        </ul>
      )}
    </div>
  );
}
