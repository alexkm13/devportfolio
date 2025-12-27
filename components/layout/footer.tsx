export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <p className="text-[var(--muted-foreground)] text-sm">
          © {new Date().getFullYear()} alex
        </p>
      </div>
    </footer>
  );
}
