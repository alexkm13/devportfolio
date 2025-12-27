import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "alex",
    template: "%s | alex",
  },
  description: "developer. building things for the web.",
  keywords: ["developer", "portfolio", "web development", "react", "next.js"],
  authors: [{ name: "alex" }],
  creator: "alex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alex.dev",
    siteName: "alex",
    title: "alex",
    description: "developer. building things for the web.",
  },
  twitter: {
    card: "summary_large_image",
    title: "alex",
    description: "developer. building things for the web.",
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
