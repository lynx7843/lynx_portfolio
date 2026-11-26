import type { ReactNode } from "react";

export type FooterLink = { label: string; href: string };

// Shared by the footer headings and links so they stay the same size.
export const footerText = "font-mono text-xs uppercase tracking-wide";

export default function Footer({
  socials,
  copyright,
  children,
}: {
  socials: FooterLink[];
  copyright: string;
  children?: ReactNode;
}) {
  return (
    <footer className={`${footerText} bg-[#030712] text-gray-200`}>
      <div className="grid gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="mb-4 font-semibold">Social Media</h2>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {socials.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    // "#" placeholders must not jump the page to the top
                    onClick={(e) => l.href === "#" && e.preventDefault()}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {l.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-auto text-[10px] text-gray-500">{copyright}</p>
        </div>

        {children}
      </div>
    </footer>
  );
}
