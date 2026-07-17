// src/pages/Services.tsx
import { Link } from "react-router-dom";
import {
  Home,
  RefreshCw,
  TrendingUp,
  Building2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import homeImg from "@/assets/home-gta.jpg";
import SEO from "@/components/SEO";

const services = [
  {
    icon: Home,
    title: "First-time home buyers",
    body: "Pre-approvals, down-payment planning, FTHB Incentive, RRSP Home Buyers' Plan, and the Tax-Free First Home Savings Account.",
    points: ["5% min down (insured)", "Closing cost guidance", "Builder & resale offers"],
  },
  {
    icon: RefreshCw,
    title: "Renewals & transfers",
    body: "Don't accept the auto-renewal letter. We re-shop your mortgage 120 days before maturity — most clients save thousands.",
    points: ["Free rate audit", "Lender-paid switch fees", "Blend & extend strategies"],
  },
  {
    icon: TrendingUp,
    title: "Refinance & home equity",
    body: "Tap into equity to consolidate higher-interest debt, fund renovations, or invest — at mortgage-grade rates.",
    points: ["Up to 80% LTV", "HELOC + mortgage combos", "Debt-consolidation modelling"],
  },
  {
    icon: Building2,
    title: "Investment properties",
    body: "Rental, multi-unit (2–4 plex), and BRRRR financing with lenders who underwrite by rental income, not just T4s.",
    points: ["Rental offset programs", "Small commercial up to 6 units", "Portfolio structuring"],
  },
  {
    icon: ShieldCheck,
    title: "Self-employed & new to Canada",
    body: "Alt-A and B-lender programs for entrepreneurs, contractors, and newcomers with limited Canadian credit history.",
    points: ["Stated income up to 90% LTV", "Bank statement programs", "Newcomer 5% down with no Canadian credit"],
  },
  {
    icon: Sparkles,
    title: "Private & bridge financing",
    body: "Short-term solutions when timing matters — bridge a sale, fund construction, or solve a credit-event problem fast.",
    points: ["48-hour approvals", "Interest-only options", "Equity-based underwriting"],
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Mortgage Services — Amit Mortgages GTA"
        description="Mortgage services: purchase, renewal, refinance, private lending, self-employed mortgages, bad credit solutions across the Greater Toronto Area. FSRA licensed. 50+ lender access."
        canonical="/services"
      />

      {/* Intro — tightened top spacing to remove extra empty space */}
      <section className="container-page pt-8 pb-10">
        <p className="text-xs uppercase tracking-widest text-foreground font-medium">Services</p>

        {/* Ensure heading has room to stay on one line at md+ */}
        <div className="mt-3 w-full">
          <h1 className="max-w-3xl md:max-w-none text-3xl md:text-4xl lg:text-5xl font-serif text-balance md:whitespace-nowrap">
            The full mortgage toolkit — for every kind of GTA buyer.
          </h1>

          <p className="mt-4 max-w-2xl md:max-w-none text-muted-foreground md:whitespace-nowrap">
            Whether you're buying your first condo in Liberty Village or refinancing a multi‑plex in Hamilton, we handle every kind of property across the Greater Toronto Area — yes, even the ones that aren't in GTA6.
          </p>
        </div>
      </section>

      {/* Services grid — consistent padding and improved card layout */}
      <section className="container-page pb-16 grid gap-6 md:grid-cols-2">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <article
              key={s.title}
              className="relative overflow-visible rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition"
            >
              {/* Icon badge positioned to overlap header area and animated */}
              <div
                aria-hidden="true"
                className="absolute -top-5 left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background/95 ring-1 ring-border shadow-sm
                           transform transition-transform duration-300 hover:scale-105
                           motion-safe:animate-[float_4s_ease-in-out_infinite]"
              >
                <Icon className="h-6 w-6 text-gold" />
              </div>

              {/* Content shifted down so icon overlaps naturally */}
              <div className="pt-4 pl-2">
                <h2 className="mt-2 pl-2 text-2xl font-serif">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>

                <ul className="mt-5 space-y-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-gold">›</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA / hero — reduced vertical padding and fixed spacing under the CTA box */}
      <section className="relative overflow-hidden">
        <img
          src={homeImg}
          alt="GTA home"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1100}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container-page py-12 md:py-16 text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-serif">Not sure which fits?</h2>
          <p className="mt-3 max-w-xl mx-auto text-primary-foreground/80">
            A 15-minute call is usually enough to map out the right path. No credit pull, no commitment.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-gold-foreground"
          >
            Talk to Amit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
