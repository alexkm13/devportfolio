"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]">
      <nav className="max-w-2xl mx-auto px-6 py-6">
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                "nav-link text-sm",
                pathname === link.href && "active"
                  )}
                >
                  {link.label}
                </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
