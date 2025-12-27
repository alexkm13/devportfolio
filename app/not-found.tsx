import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-[var(--foreground)] mb-4">
          404
        </h1>
        <p className="text-[var(--muted-foreground)] mb-8">
          page not found.
        </p>
        <Link
          href="/"
          className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
        >
          ← back to home
        </Link>
      </div>
    </div>
  );
}
