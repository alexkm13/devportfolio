import Link from "next/link";
import { getAllProjects } from "@/content/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-20">
      {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            projects
            </h1>
          <p className="text-[var(--muted-foreground)]">
            things i&apos;ve built.
            </p>
        </header>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article key={project.slug} className="group">
              <Link href={`/projects/${project.slug}`} className="block">
                <h2 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--link-hover)] transition-colors mb-2">
                  {project.title}
                </h2>
                <p className="text-[var(--muted-foreground)] text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag">
                      {tag.toLowerCase()}
                    </span>
              ))}
            </div>
              </Link>
              
              <div className="flex gap-4 mt-3">
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
            </article>
          ))}
        </div>

        <hr className="my-12" />
      </div>
    </div>
  );
}
