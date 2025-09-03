import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="container-page py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Stripe-simple payments, for <span className="text-[var(--brand)]">sBTC</span>.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Accept Bitcoin via sBTC on Stacks with links, widgets, and a lightweight API.
          Clean merchant dashboard. Subscriptions. sBTC→USD display. Built for web2 UX.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/auth/sign-up" className="btn-brand">Create free account</Link>
          <Link href="/auth/login" className="btn-ghost">Log in</Link>
        </div>
      </section>

      {/* Value props */}
      <section className="container-page grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        {[
          { t: "Payment Links", d: "Share a link, get paid in sBTC. No code required." },
          { t: "Drop-in Widget", d: "Embed a secure, branded checkout in minutes." },
          { t: "Subscriptions", d: "Simple recurring charges with webhooks & receipts." },
        ].map((x) => (
          <div key={x.t} className="card p-6">
            <div className="h-10 w-10 rounded-lg bg-[var(--brand)]/10 text-[var(--brand)] grid place-items-center font-bold">
              {x.t[0]}
            </div>
            <h3 className="mt-4 font-semibold">{x.t}</h3>
            <p className="text-gray-600 mt-1">{x.d}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container-page my-10 text-center">
        <div className="card p-10">
          <h2 className="text-2xl font-semibold">
            Ready to accept <span className="text-[var(--brand)]">sBTC</span> today?
          </h2>
          <p className="text-gray-600 mt-2">
            Works on testnet, production-ready patterns. Non-custodial merchant flow.
          </p>
          <div className="mt-6">
            <Link href="/auth/sign-up" className="btn-brand">Start free</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
