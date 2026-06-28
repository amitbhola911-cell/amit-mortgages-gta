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
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/95 border-b border-border shadow-sm">

      {/* Single Row: Logo + Nav + Brokerage + Phone + CTA */}
      <div className="container-page flex items-center justify-between gap-4 py-2">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={personalLogo}
            alt="Amit Mortgages"
            className="h-10 sm:h-11 lg:h-12 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-semibold transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-gold"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <img
            src={brokerageLogo}
            alt="8Twelve Mortgage Corp."
            className="h-8 lg:h-9 w-auto"
          />
          
            href="tel:+16479921909"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground whitespace-nowrap"
          >
            <Phone className="h-4 w-4 text-gold" /> 647 992 1909
          </a>
          <Link
            to="/apply"
            className="inline-flex items-center rounded-md bg-gradient-royal px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow whitespace-nowrap"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile / tablet toggle */}
        <div className="lg:hidden flex items-center">
          <button
            className="p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/90">
          <div className="container-page py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-foreground"
              >
                {n.label}
              </Link>
            ))}
            
              href="tel:+16479921909"
              className="py-1 text-sm text-foreground inline-flex items-center gap-2"
            >
              <Phone className="h-4 w-4 text-gold" /> 647 992 1909
            </a>
            <div className="pt-2 border-t border-border/60 flex items-center gap-2">
              <img src={brokerageLogo} alt="8Twelve Mortgage Corp." className="h-7 w-auto" />
              <span className="text-xs text-muted-foreground">Licensed through 8Twelve Mortgage Corp.</span>
            </div>
            <Link
              to="/apply"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-gradient-royal px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}

      <NewsTicker />
    </header>
  );
}
