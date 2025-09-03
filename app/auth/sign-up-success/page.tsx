import Link from "next/link";

export default function SignUpSuccess() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Sign-Up Successful!</h1>
      <p className="mb-6">Your account has been created. You can now login.</p>
      <Link href="/auth/login" className="px-4 py-2 bg-blue-600 text-white rounded">Go to Login</Link>
    </main>
  );
}
