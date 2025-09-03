"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/client";

type Payment = {
  id: string;
  merchant_id: string | null;
  amount_sats: number;
  currency: string | null; // e.g., "sats"
  status: string | null; // "succeeded" | "pending" | "failed"
  created_at: string;
  metadata: any;
};

export default function PaymentsPage() {
  const supabase = createClient();
  const [rows, setRows] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("payments")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(25);

      if (!error && data) setRows(data as Payment[]);
      setLoading(false);
    })();
  }, []);

  return (
    <main className="container-page">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Payments</h1>
          <p className="text-gray-600 text-sm mt-1">Latest 25 payments (testnet)</p>
        </div>
        <button className="btn-brand">New payment link</button>
      </div>

      <div className="card mt-6 overflow-x-auto">
        {loading ? (
          <div className="p-6">Loading…</div>
        ) : rows.length === 0 ? (
          <div className="p-6 text-gray-600">No payments yet.</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Created</th>
                <th>Amount</th>
                <th>Status</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>{new Date(r.created_at).toLocaleString()}</td>
                  <td>₿ {r.amount_sats} sats</td>
                  <td>
                    <span className={`badge ${r.status === "succeeded" ? "badge-green" : "badge-gray"}`}>
                      {r.status ?? "pending"}
                    </span>
                  </td>
                  <td className="text-gray-500">{r.id.slice(0, 10)}…</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
