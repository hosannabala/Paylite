import SignUpForm from "../../../components/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="min-h-[80vh] grid place-items-center bg-gray-50 px-4">
      <div className="card w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold text-center">
          Create your <span className="text-[var(--brand)]">Paylite</span> account
        </h1>
        <p className="text-gray-600 text-sm text-center mt-1">
          Start accepting sBTC in minutes.
        </p>
        <div className="mt-6">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
