import Link from 'next/link';

interface AuthButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'default';
}

export default function AuthButton({ href, children, variant = 'default' }: AuthButtonProps) {
  const baseClasses = 'px-6 py-2 rounded font-semibold transition';
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}
