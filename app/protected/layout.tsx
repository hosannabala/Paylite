"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "../../lib/supabase/client";
import LogoutButton from "../../components/logout-button";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      setEmail(data.user?.email ?? null);
      setLoading(false);
    })();
  }, []);

  if (loading) return <div className="p-6">Loading…</div>;
  if (!email) return (
    <div className="p-6">
      You’re not logged in. <Link className="text-[var(--brand)] underline" href="/auth/login">Log in</Link>
    </div>
  );

  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <aside className="hidden md:block border-r border-gray-100 p-4">
        <div className="font-semibold text-lg">
          Paylite <span className="text-[var(--brand)]">·</span> Dashboard
        </div>
        <nav className="mt-6 space-y-1">
          <Link href="/protected" className="block px-3 py-2 rounded-lg hover:bg-gray-50">Overview</Link>
          <Link href="/protected/payments" className="block px-3 py-2 rounded-lg hover:bg-gray-50">Payments</Link>
          <Link href="/protected/subscriptions" className="block px-3 py-2 rounded-lg hover:bg-gray-50">Subscriptions</Link>
          <Link href="/protected/links" className="block px-3 py-2 rounded-lg hover:bg-gray-50">Payment Links</Link>
          <Link href="/protected/settings" className="block px-3 py-2 rounded-lg hover:bg-gray-50">Settings</Link>
        </nav>
      </aside>

      {/* Main */}
      <div>
        {/* Topbar */}
        <div className="border-b border-gray-100 h-14 flex items-center justify-between px-4">
          <div className="font-medium text-gray-700">Welcome, {email}</div>
          <LogoutButton />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
