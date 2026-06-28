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
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/95 border-b border-border shadow-sm">

      {/* Unified Header Row */}
      <div className="container-page flex items-center justify-between py-2">

        {/* LEFT — Personal Logo + Phone */}
        <div className="flex flex-col items-start shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={personalLogo}
              alt="Amit Mortgages"
              className="h-[4.55rem] sm:h-[5.2rem] md:h-[6.5rem] w-auto"
            />
          </Link>

          {/* Phone under logo */}
          <a
            href="tel:+16479921909"
            className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4 text-gold" /> 647 992 1909
          </a>
        </div>

        {/* CENTER — Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-base font-semibold transition-all duration-200
                ${isActive ? "text-gold border-b-2 border-gold" : "text-foreground hover:text-gold hover:border-b-2 hover:border-gold"}`
              }
            >
              {n.label}
            </NavLink>
          ))}

          {/* APPLY NOW BUTTON — after Contact */}
          <Link
            to="/apply"
            className="ml-2 inline-flex items-center rounded-md bg-gradient-royal px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow"
          >
            Apply Now
          </Link>
        </nav>

        {/* RIGHT — Brokerage Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src={brokerageLogo}
            alt="8Twelve Mortgage Corp."
            className="h-16 sm:h-18 md:h-22 w-auto"
          />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/90">
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

            {/* Phone under logo for mobile */}
            <a
              href="tel:+16479921909"
              className="py-1 text-sm text-foreground inline-flex items-center gap-2"
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
