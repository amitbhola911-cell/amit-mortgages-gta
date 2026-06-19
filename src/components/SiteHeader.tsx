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
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      {/* Branding Row */}
      <div className="container-page flex items-center justify-between gap-3 py-2">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={personalLogo}
            alt="Amit Mortgages"
            className="h-10 sm:h-12 md:h-14 w-auto bg-transparent"
          />
        </Link>

        <div className="flex items-center gap-3 shrink-0">
          <img
            src={brokerageLogo}
            alt="8Twelve Mortgage Corp."
            className="h-9 sm:h-10 md:h-11 w-auto bg-transparent"
          />
        </div>
      </div>


      {/* Nav Row */}
      <div className="border-t border-border/60">
        <div className="container-page flex h-10 items-center justify-between gap-4">

          <nav className="hidden md:flex items-center gap-7">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${
                    isActive
                      ? "text-gold"
                      : "text-white hover:text-gold"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 ml-auto">
            <a
              href="tel:+16479921909"
              className="inline-flex items-center gap-2 text-base font-semibold text-white"
            >
              <Phone className="h-5 w-5 text-gold" /> 647 992 1909
            </a>
            <Link
              to="/apply"
              className="inline-flex items-center rounded-md bg-gradient-royal px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center justify-between w-full">
            <p className="text-[10px] uppercase tracking-wider text-white/70">
              <span className="font-semibold text-gold">Licence #13072</span>
            </p>
            <button
              className="p-2 -mr-2 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/90">
          <div className="container-page py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-white"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+16479921909"
              className="py-1 text-sm text-white inline-flex items-center gap-2"
            >
              <Phone className="h-4 w-4 text-gold" /> 647 992 1909
            </a>
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

