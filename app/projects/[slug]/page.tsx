"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/content/projects";
import { notFound } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-20">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8 text-sm"
        >
          ← back to projects
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
            {project.title}
          </h1>
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag.toLowerCase()}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-sm"
              >
                live
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-sm"
              >
                source
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </header>

        <hr className="mb-8" />

        {/* About */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
            about this project
          </h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
            this project was built to solve real-world challenges and demonstrate
            modern development practices. it showcases my ability to create polished,
            production-ready applications with attention to detail in both design and functionality.
          </p>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            key features include responsive design, performance optimization,
            accessibility considerations, and clean, maintainable code architecture.
          </p>
        </section>

        <hr className="my-12" />

        {/* Navigation */}
        <nav className="flex justify-between text-sm">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            ← {prevProject.title.length > 25 ? prevProject.title.slice(0, 25) + "..." : prevProject.title}
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            {nextProject.title.length > 25 ? nextProject.title.slice(0, 25) + "..." : nextProject.title} →
          </Link>
        </nav>
      </div>
    </div>
  );
}
