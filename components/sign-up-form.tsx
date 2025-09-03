"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase/client";

export default function SignUpForm() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else router.push("/protected");
  };

  return (
    <form onSubmit={handleSignUp} className="space-y-4">
      <div>
        <label className="label">Email</label>
        <input className="input mt-1" type="email" value={email}
               onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label className="label">Password</label>
        <input className="input mt-1" type="password" value={password}
               onChange={(e) => setPassword(e.target.value)} required />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button className="btn-brand w-full" disabled={loading}>
        {loading ? "Creating account..." : "Create Account"}
      </button>
    </form>
  );
}
