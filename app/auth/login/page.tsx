import LoginForm from "../../../components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] grid place-items-center bg-gray-50 px-4">
      <div className="card w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold text-center">
          Log in to <span className="text-[var(--brand)]">Paylite</span>
        </h1>
        <p className="text-gray-600 text-sm text-center mt-1">
          Welcome back — let’s get you paid.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
