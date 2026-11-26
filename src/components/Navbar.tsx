import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteData } from "@/data/site";
import { TreeNav, badgeClass } from "@/components/ui/tree-nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="container flex h-16 max-w-5xl items-center justify-end lg:justify-center">
        <div className="hidden lg:block">
          <TreeNav
            items={siteData.navLinks.map((l) => ({
              label: l.label,
              href: l.path,
              disabled: l.comingSoon,
              badge: l.comingSoon ? "Coming soon" : undefined,
            }))}
            activeHref={active}
            onSelect={(item) => setActive(item.href)}
          />
        </div>

        <div className="flex items-center gap-2">
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
        <span className={badgeClass}>Coming soon</span>
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
