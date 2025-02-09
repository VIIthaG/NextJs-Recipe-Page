import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-5xl flex justify-center min-h-screen items-center">
        This Page Cannot be Found
      </h1>
      <Link href="/">Go to Home </Link>
    </div>
  );
}
