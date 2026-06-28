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

      {/* Unified Header Row */}
      <div className="container-page flex items-center justify-between py-2">

        {/* LEFT — Personal Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={personalLogo}
            alt="Amit Mortgages"
            className="h-[4.55rem] sm:h-[5.2rem] md:h-[6.5rem] w-auto"
          />
        </Link>

        {/* CENTER — Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-base font-semibold transition-colors ${
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

      {/* SECOND ROW — Phone + CTA */}
      <div className="border-t border-border/60">
        <div className="container-page flex items-center justify-end gap-4 py-2">

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+16479921909"
              className="inline-flex items-center gap-2 text-base font-semibold text-foreground"
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

          {/* MOBILE PHONE + CTA */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button
              className="p-2 -mr-2 text-foreground"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
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
