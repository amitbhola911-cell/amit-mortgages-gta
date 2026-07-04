// src/components/SiteHeader.tsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { NewsTicker } from "./NewsTicker";
import personalLogo from "@/assets/AMIT MORTGAGES Logo Blue.png";
import brokerageLogo from "@/assets/8twelve-logo...png";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/rates", label: "Rates" }, // <-- added Rates
  { to: "/calculators", label: "Calculators" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/95 border-b border-border shadow-sm">
      {/* Header row: compact */}
      <div className="container-page flex items-center justify-between py-1">
        {/* Logo + phone (centered stack) */}
        <div className="flex flex-col items-center shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src={personalLogo}
              alt="Amit Mortgages"
              className="h-[3.9rem] sm:h-[4.6rem] md:h-[5.2rem] w-auto"
            />
          </Link>

          <a
            href="tel:+16479921909"
            className="mt-0 inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-transform duration-200 hover:scale-115 focus:scale-115"
            aria-label="Call Amit Mortgages"
          >
            <Phone className="h-4 w-4 text-gold" /> <span className="leading-none">647 992 1909</span>
          </a>
        </div>

        {/* Navigation (desktop) */}
        <nav className="hidden md:flex items-center gap-2">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)] ${
                  isActive
                    ? "text-gold border-b-2 border-gold bg-[color-mix(in oklab, var(--gold) 8%, transparent)] glow-gold"
                    : "text-foreground hover:text-gold hover:border-b-2 hover:border-gold hover:bg-[color-mix(in oklab, var(--gold) 6%, transparent)]"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}

          {/* Apply Now CTA */}
          <Link
            to="/apply"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-gradient-royal px-4 py-2 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-115 focus:scale-115 shadow"
            aria-label="Apply Now"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        {/* Brokerage logo */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src={brokerageLogo}
            alt="8Twelve Mortgage Corp."
            className="h-14 sm:h-16 md:h-20 w-auto"
          />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/90">
          <div className="container-page py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 px-2 rounded-md text-sm text-foreground hover:bg-[color-mix(in oklab,var(--gold) 6%,transparent)] transition"
              >
                {n.label}
              </Link>
            ))}

            <a
              href="tel:+16479921909"
              className="py-2 text-sm text-foreground inline-flex items-center gap-2 hover:scale-105 transition"
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
