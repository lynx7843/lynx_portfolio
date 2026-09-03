import { siteData } from "@/data/site";
import { GithubIcon } from "@/components/icons";

export default function Projects() {
  return (
    <section id="projects" className="container max-w-5xl py-16 md:py-24">
      <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
        Projects
      </h2>

      <div className="grid gap-6">
        {siteData.projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card sm:flex-row"
          >
            <div className="flex h-40 shrink-0 items-center justify-center bg-muted text-xs text-muted-foreground sm:h-auto sm:w-56">
              Thumbnail coming soon
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-primary">{project.role}</p>
              </div>

              <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                {project.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-input px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <GithubIcon className="h-4 w-4" />
                  Open in GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
