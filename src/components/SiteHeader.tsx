import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NewsTicker } from "./NewsTicker";
import personalLogo from "@/assets/AMIT MORTGAGES Logo Blue.png";
import brokerageLogo from "@/assets/8twelve-logo...png";

const nav: { to: string; label: string; end?: boolean }[] = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/calculators", label: "Calculators" },
  { to: "/apply", label: "Apply" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-transparent border-b border-border">
      {/* Compliance branding row */}
      <div className="container-page flex items-center justify-between gap-3 py-3">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img
            src={personalLogo}
            alt="Amit Mortgages"
            className="h-11 sm:h-12 md:h-14 w-auto"
          />
        </Link>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:block text-right">
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground"></p>
            <p className="text-[10px] sm:text-xs font-semibold text-primary"></p>
          </div>
          <img
            src={brokerageLogo}
            alt="8Twelve Mortgage Corp."
            className="h-12 sm:h-14 md:h-[3.85rem] w-auto"
          />
        </div>
      </div>

      {/* Nav row */}
      <div className="border-t border-border/60">
        <div className="container-page flex h-12 items-center justify-between gap-4">
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 ml-auto">
            <a href="tel:+16479921909" className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
              <Phone className="h-4 w-4 text-gold" /> 647 992 1909
            </a>
            <Link
              to="/apply"
              className="inline-flex items-center rounded-md bg-gradient-royal px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile: licence line + hamburger */}
          <div className="md:hidden flex items-center justify-between w-full">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              <span className="font-semibold text-primary">Licence #13072</span>
            </p>
            <button className="p-2 -mr-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1 text-sm text-foreground">
                {n.label}
              </Link>
            ))}
            <a href="tel:+16479921909" className="py-1 text-sm text-foreground inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" /> 647 992 1909
            </a>
            <Link to="/apply" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-md bg-gradient-royal px-4 py-2 text-sm font-medium text-primary-foreground">
              Apply Now
            </Link>
          </div>
        </div>
      )}

      <NewsTicker />
    </header>
  );
}
