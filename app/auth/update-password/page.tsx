"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdatePassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) {
      alert("Password updated successfully!");
      router.push("/auth/login");
    } else {
      alert("Please enter a new password");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Update Password</h1>
      <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={handleUpdate}>
        <input 
          type="password" 
          placeholder="New Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="border p-2 rounded" 
        />
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Update</button>
      </form>
    </main>
  );
}
