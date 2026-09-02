import { siteData } from "@/data/site";

export default function TechStack() {
  return (
    <section id="tech-stack" className="container max-w-5xl py-16 md:py-24">
      <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
        Tech Stack
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        {siteData.techStack.map((category) => (
          <div
            key={category.label}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
