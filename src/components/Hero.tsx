import { Mail } from "lucide-react";
import { siteData } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  const { personalInfo, contactInfo } = siteData;

  return (
    <section id="home" className="container max-w-5xl py-16 md:py-24">
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full space-y-5 text-center lg:w-3/5 lg:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {personalInfo.title}
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Hey, I&apos;m {personalInfo.name}
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground lg:mx-0 lg:text-lg">
            {personalInfo.bio}
          </p>
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-input text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-input text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-input text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="w-48 shrink-0 md:w-56 lg:w-2/5">
          <img
            src="/img/profile.png"
            alt={personalInfo.name}
            className="mx-auto aspect-square w-full max-w-xs -translate-y-[5px] rounded-2xl object-cover object-top shadow-lg lg:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
