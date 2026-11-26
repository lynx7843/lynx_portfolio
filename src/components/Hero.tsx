import { Mail } from "lucide-react";
import { siteData } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  const { personalInfo, contactInfo } = siteData;

  return (
    <section id="home" className="mx-auto w-full max-w-[1280px] px-4 py-16 md:py-24">
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row-reverse lg:items-center lg:justify-between">
        <div className="w-full space-y-5 text-center lg:min-w-0 lg:flex-1 lg:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {personalInfo.title}
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Hey, I&apos;m {personalInfo.name}
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground lg:mx-0 lg:max-w-[820px] lg:text-lg">
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

        <div className="relative w-48 shrink-0 md:w-56 lg:w-96">
          {/* Refraction filter: displaces whatever is behind the panel. Only Chromium accepts url() in
              backdrop-filter; elsewhere the inline style is dropped and backdrop-blur-md is the fallback. */}
          <svg width="0" height="0" className="absolute" aria-hidden>
            <filter id="liquid-glass" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="3" result="noise" />
              <feGaussianBlur in="noise" stdDeviation="6" result="map" />
              <feDisplacementMap in="SourceGraphic" in2="map" scale="70" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
          <div
            aria-hidden
            className="absolute inset-0 mx-auto -translate-y-[5px] rounded-2xl bg-white/5 backdrop-blur-md max-w-xs lg:max-w-sm"
            style={{ backdropFilter: "url(#liquid-glass) blur(3px) saturate(1.8) brightness(1.1)" }}
          />
          <img
            src="/img/icon.png"
            alt={personalInfo.name}
            className="relative mx-auto aspect-square w-full max-w-xs -translate-y-[5px] rounded-2xl object-cover object-top shadow-lg lg:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
