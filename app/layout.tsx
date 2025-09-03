import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Paylite – sBTC Payments",
  description: "Seamless sBTC payments, subscriptions, and merchant tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Top nav */}
        <header className="border-b border-gray-100">
          <nav className="container-page h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg">
              Paylite <span className="text-[var(--brand)]">Payments</span>
            </Link>
            <div className="flex gap-3">
              <Link href="/auth/login" className="btn-ghost">Log in</Link>
              <Link href="/auth/sign-up" className="btn-brand">Get started</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-gray-100 mt-16">
          <div className="container-page py-10 text-xs text-gray-500">
            © {new Date().getFullYear()} Paylite. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
