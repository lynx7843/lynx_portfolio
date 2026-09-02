import { useState } from "react";
import { Menu, Moon, X } from "lucide-react";
import { siteData } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="container flex h-16 max-w-5xl items-center justify-between">
        <a href="#home" className="flex items-center" aria-label="Home">
          <img
            src="/img/icon.png"
            alt="Dilan Amantha"
            className="h-9 w-9 rounded-md object-cover"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteData.navLinks.map((link) => (
            <NavItem key={link.label} link={link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Moon className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-4 py-4 lg:hidden">
          {siteData.navLinks.map((link) => (
            <NavItem key={link.label} link={link} onClick={() => setOpen(false)} mobile />
          ))}
        </nav>
      )}
    </header>
  );
}

function NavItem({
  link,
  onClick,
  mobile,
}: {
  link: (typeof siteData.navLinks)[number];
  onClick?: () => void;
  mobile?: boolean;
}) {
  const spacing = mobile ? "py-2" : "";

  if (link.comingSoon) {
    return (
      <span
        className={`flex items-center gap-1.5 text-sm text-muted-foreground/50 cursor-not-allowed ${spacing}`}
      >
        {link.label}
        <span className="rounded-full border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground/70">
          Soon
        </span>
      </span>
    );
  }

  return (
    <a
      href={link.path}
      onClick={onClick}
      className={`text-sm text-muted-foreground transition-colors hover:text-foreground ${spacing}`}
    >
      {link.label}
    </a>
  );
}
