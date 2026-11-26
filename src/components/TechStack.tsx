import { siteData } from "@/data/site";

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full max-w-[calc(64rem+150px)] px-4 md:pl-[150px] pt-16 pb-8 md:pt-24 md:pb-12">
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
