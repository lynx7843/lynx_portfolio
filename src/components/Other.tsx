import { siteData } from "@/data/site";

export default function Other() {
  return (
    <section id="other" className="container max-w-5xl py-16 md:py-24">
      <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
        Other
      </h2>

      <div className="grid gap-5">
        {siteData.other.map((entry) => (
          <div
            key={`${entry.organization}-${entry.activity}`}
            className="rounded-xl border border-border bg-card p-6"
          >
            <p className="text-sm font-medium text-foreground">{entry.organization}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">
              {entry.activity}
            </h3>
            <span className="mt-1 block text-sm font-medium text-muted-foreground">
              {entry.period}
            </span>

            {entry.details && (
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
