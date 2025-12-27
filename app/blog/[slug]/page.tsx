"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogPosts } from "@/content/blog";
import { notFound } from "next/navigation";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function readingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = allPosts[(currentIndex + 1) % allPosts.length];
  const prevPost = allPosts[(currentIndex - 1 + allPosts.length) % allPosts.length];

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeContent = "";

    lines.forEach((line, index) => {
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeContent = "";
        } else {
          elements.push(
            <pre key={index}>
              <code>{codeContent.trim()}</code>
            </pre>
          );
          inCodeBlock = false;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + "\n";
        return;
      }

      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={index} className="text-2xl font-bold mt-10 mb-4 text-[var(--foreground)]">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="text-xl font-bold mt-8 mb-3 text-[var(--foreground)]">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="text-lg font-bold mt-6 mb-2 text-[var(--foreground)]">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={index} className="ml-4 mb-1 list-disc text-[var(--muted-foreground)]">
            {line.slice(2)}
          </li>
        );
      } else if (line.match(/^\d+\./)) {
        elements.push(
          <li key={index} className="ml-4 mb-1 list-decimal text-[var(--muted-foreground)]">
            {line.replace(/^\d+\.\s*/, "")}
          </li>
        );
      } else if (line.trim() === "") {
        elements.push(<div key={index} className="h-3" />);
      } else {
        // Process inline elements: links, code, bold
        const processInline = (text: string): React.ReactNode[] => {
          // Match links [text](url)
          return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
            const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
            if (linkMatch) {
            return (
                <a
                  key={i}
                  href={linkMatch[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] underline underline-offset-2 hover:text-[var(--link-hover)]"
                >
                  {linkMatch[1]}
                </a>
              );
            }
            // Process inline code
            return part.split(/(`[^`]+`)/).map((codePart, j) => {
              if (codePart.startsWith("`") && codePart.endsWith("`")) {
                return <code key={`${i}-${j}`}>{codePart.slice(1, -1)}</code>;
          }
          // Process bold
              return codePart.split(/(\*\*[^*]+\*\*)/).map((boldPart, k) => {
                if (boldPart.startsWith("**") && boldPart.endsWith("**")) {
                  return <strong key={`${i}-${j}-${k}`} className="text-[var(--foreground)]">{boldPart.slice(2, -2)}</strong>;
            }
                return boldPart;
          });
        });
          });
        };

        elements.push(
          <p key={index} className="text-[var(--muted-foreground)] leading-relaxed mb-4">
            {processInline(line)}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-20">
        {/* Back link */}
            <Link
              href="/blog"
          className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8 text-sm"
              >
          ← back to blog
            </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 text-sm text-[var(--muted-foreground)] mb-4">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
              <span>{post.content ? readingTime(post.content) : "5 min read"}</span>
            </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
              {post.title}
            </h1>
          <p className="text-[var(--muted-foreground)]">
              {post.description}
            </p>
        </header>

        <hr className="mb-8" />

      {/* Content */}
        <article className="prose">
              {post.content && renderContent(post.content)}
            </article>

        <hr className="my-12" />

      {/* Navigation */}
        <nav className="flex justify-between text-sm">
              {prevPost.slug !== post.slug && (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                      >
              ← {prevPost.title.length > 30 ? prevPost.title.slice(0, 30) + "..." : prevPost.title}
                </Link>
              )}
              {nextPost.slug !== post.slug && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors ml-auto"
                  >
              {nextPost.title.length > 30 ? nextPost.title.slice(0, 30) + "..." : nextPost.title} →
                </Link>
              )}
        </nav>
        </div>
    </div>
  );
}
