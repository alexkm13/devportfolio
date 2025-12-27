import Link from "next/link";
import { getAllBlogPosts } from "@/content/blog";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-20">
      {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            blog
            </h1>
          <p className="text-[var(--muted-foreground)]">
            thoughts on code, design, and everything in between.
          </p>
        </header>

        {/* Posts List */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <time className="text-sm text-[var(--muted-foreground)]">
                  {formatDate(post.date)}
                </time>
                <h2 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--link-hover)] transition-colors mt-1 mb-2">
                  {post.title}
                </h2>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                  {post.description}
                </p>
              </Link>
            </article>
          ))}
        </div>

          {posts.length === 0 && (
          <p className="text-[var(--muted-foreground)]">
            no posts yet. check back soon.
          </p>
        )}

        <hr className="my-12" />
        </div>
    </div>
  );
}
