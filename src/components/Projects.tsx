import { useState } from "react";
import { Plus, X, ArrowUpRight } from "lucide-react";
import { siteData, type Project } from "@/data/site";
import { cn } from "@/lib/utils";

// No project thumbnails exist yet, so each card gets a gradient stand-in.
const backdrops = [
  "from-zinc-700 via-zinc-900 to-black",
  "from-orange-700 via-stone-800 to-black",
  "from-emerald-700 via-slate-800 to-black",
  "from-indigo-700 via-slate-900 to-black",
];

export default function Projects({
  id = "projects",
  heading = "Projects",
  items = siteData.projects,
}: {
  id?: string;
  heading?: string;
  items?: Project[];
}) {
  const [active, setActive] = useState(0);

  return (
    <section id={id} className="w-full scroll-mt-12 px-4 py-8 md:px-[150px] md:py-12">
      <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">{heading}</h2>

      <div className="flex flex-col gap-3 md:h-[32rem] md:flex-row">
        {items.map((project, i) => {
          const open = i === active;
          return (
            <article
              key={project.title}
              onClick={() => !open && setActive(i)}
              className={cn(
                !open && "cursor-pointer",
                "relative flex min-h-24 min-w-0 flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br p-4 text-white md:p-6 transition-[flex-grow] duration-500 ease-out md:min-h-0",
                project.posterTall ? "bg-[#0a0a0a] bg-none" : backdrops[i % backdrops.length], // matches the poster background so contain never shows bars
                open ? "min-h-[28rem] md:flex-[3]" : "md:flex-[1]",
              )}
            >
              {project.posterTall && !open && (
                <img src={project.posterTall} alt="" className="absolute inset-0 h-full w-full object-contain" />
              )}
              {/* Poster-sized box pinned right, so the mask below always lines up with the artwork at any card width */}
              {project.posterWide && open && (
                <div className="absolute inset-y-0 right-0 aspect-video">
                  <img src={project.posterWide} alt="" className="h-full w-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] from-[57%] to-transparent to-[59.5%]" />
                </div>
              )}
              {/* Narrow cards: keep the artwork out from under the description (30rem text + padding) */}
              {project.posterWide && open && (
                <div
                  className="absolute inset-y-0 left-0 hidden w-[32rem] md:block"
                  style={{ background: "linear-gradient(to right, #0a0a0a calc(100% - 2rem), transparent)" }}
                />
              )}
              <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
                <span
                  className={cn(
                    "truncate text-[10px] font-semibold uppercase tracking-wider text-white/80",
                    project.posterTall && !open && "invisible", // the poster already carries the name
                  )}
                >
                  {String(i + 1).padStart(2, "0")} / {project.title.split(" — ")[0]}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(open ? -1 : i);
                  }}
                  aria-label={open ? `Collapse ${project.title}` : `Expand ${project.title}`}
                  aria-expanded={open}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50 transition-colors hover:bg-white/20"
                >
                  {open ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </button>
              </div>

              {/* Fixed width so the text never reflows while the card resizes; the card just clips it */}
              <div
                className={cn(
                  "relative flex w-[calc(100vw-5rem)] flex-col gap-3 transition-opacity duration-300 md:w-[30rem]",
                  open ? "opacity-100 delay-200" : "pointer-events-none hidden opacity-0 md:flex",
                )}
              >
                <h3 className="text-2xl font-semibold tracking-tight">
                  {project.title.split(" — ")[1]}
                </h3>
                <p className="text-sm text-white/80">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/30 px-3 py-1 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-lime-300 px-4 py-2 text-xs font-semibold text-black transition-opacity hover:opacity-90"
                >
                  Open in GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                ) : (
                  <span className="inline-flex w-fit rounded-full bg-lime-300 px-4 py-2 text-xs font-semibold text-black">
                    {project.status}
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
