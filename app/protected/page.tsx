export default function OverviewPage() {
  return (
    <main className="container-page">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <p className="text-gray-600 mt-1">High-level snapshot of your activity.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="card p-5">
          <div className="text-sm text-gray-500">Total Volume (testnet)</div>
          <div className="text-2xl font-semibold mt-1">sBTC 0.00</div>
        </div>
        <div className="card p-5">
          <div className="text-sm text-gray-500">Payments</div>
          <div className="text-2xl font-semibold mt-1">0</div>
        </div>
        <div className="card p-5">
          <div className="text-sm text-gray-500">Active Subscriptions</div>
          <div className="text-2xl font-semibold mt-1">0</div>
        </div>
      </div>

      <div className="card p-5 mt-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Recent Activity</h2>
          <span className="badge badge-gray">testnet</span>
        </div>
        <p className="text-gray-600 text-sm mt-2">
          When you process payments on testnet, they’ll appear here.
        </p>
      </div>
    </main>
  );
}
