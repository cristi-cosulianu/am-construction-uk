import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Building2 } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-cream-deep border-b border-border">
        <div className="container-page flex items-center justify-center gap-2 py-2 text-xs text-muted-foreground">
          <span className="inline-block size-1.5 rounded-full bg-gold" />
          Building across the UK — trusted by clients since 2014
        </div>
      </div>
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container-page flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="inline-flex items-center justify-center size-10 rounded-md bg-navy text-cream">
              <Building2 className="size-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-xl tracking-tight">ABV</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Contractor</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="btn-primary hidden md:inline-flex hover:[&]:translate-y-[-1px]">
            Get a quote
          </Link>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container-page py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-foreground/80"
                  activeProps={{ className: "text-foreground font-medium" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 self-start">
                Get a quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
