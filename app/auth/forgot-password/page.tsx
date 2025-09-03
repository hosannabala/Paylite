"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Password reset link sent to ${email}`);
    } else {
      alert("Please enter your email");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
      <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="border p-2 rounded" 
        />
        <button type="submit" className="px-4 py-2 bg-yellow-600 text-white rounded">Send Reset Link</button>
      </form>
    </main>
  );
}
