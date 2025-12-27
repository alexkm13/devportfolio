import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "alex's dev portfolio",
    template: "%s | alex's dev portfolio",
  },
  description: "software engineer. building apps for the public.",
  keywords: ["software engineer", "portfolio", "python", "react", "next.js"],
  authors: [{ name: "alex" }],
  creator: "alex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmk.dev",
    siteName: "alex's dev portfolio",
    title: "alex's dev portfolio",
    description: "software engineer. building apps for the public.",
  },
  twitter: {
    card: "summary_large_image",
    title: "alex's dev portfolio",
    description: "software engineer. building apps for the public.",
    creator: "@alex",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex flex-col">
          <Navigation />
        <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
