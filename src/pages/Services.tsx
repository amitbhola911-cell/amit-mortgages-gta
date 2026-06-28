import { Link } from "react-router-dom";
import { Home, RefreshCw, TrendingUp, Building2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import homeImg from "@/assets/home-gta.jpg";
import SEO from "@/components/SEO";

const services = [
  { icon: Home, title: "First-time home buyers", body: "Pre-approvals, down-payment planning, FTHB Incentive, RRSP Home Buyers' Plan, and the Tax-Free First Home Savings Account.", points: ["5% min down (insured)", "Closing cost guidance", "Builder & resale offers"] },
  { icon: RefreshCw, title: "Renewals & transfers", body: "Don't accept the auto-renewal letter. We re-shop your mortgage 120 days before maturity — most clients save thousands.", points: ["Free rate audit", "Lender-paid switch fees", "Blend & extend strategies"] },
  { icon: TrendingUp, title: "Refinance & home equity", body: "Tap into equity to consolidate higher-interest debt, fund renovations, or invest — at mortgage-grade rates.", points: ["Up to 80% LTV", "HELOC + mortgage combos", "Debt-consolidation modelling"] },
  { icon: Building2, title: "Investment properties", body: "Rental, multi-unit (2–4 plex), and BRRRR financing with lenders who underwrite by rental income, not just T4s.", points: ["Rental offset programs", "Small commercial up to 6 units", "Portfolio structuring"] },
  { icon: ShieldCheck, title: "Self-employed & new to Canada", body: "Alt-A and B-lender programs for entrepreneurs, contractors, and newcomers with limited Canadian credit history.", points: ["Stated income up to 90% LTV", "Bank statement programs", "Newcomer 5% down with no Canadian credit"] },
  { icon: Sparkles, title: "Private & bridge financing", body: "Short-term solutions when timing matters — bridge a sale, fund construction, or solve a credit-event problem fast.", points: ["48-hour approvals", "Interest-only options", "Equity-based underwriting"] },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Mortgage Services — Amit Mortgages GTA"
        description="Purchase, refinance, renewal, investment, self-employed, newcomer, and private mortgage solutions across the Greater Toronto Area."
        canonical="/services"
      />
      <section className="container-page pt-20 pb-10">
        <p className="text-xs uppercase tracking-widest text-foreground font-medium">Services</p>
        <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl font-serif text-balance">
          The full mortgage toolkit — for every kind of GTA buyer.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Whether you're buying your first condo in Liberty Village or refinancing a multi-plex in Hamilton, we have a lender and a structure that fits.
        </p>
      </section>

      <section className="container-page pb-20 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.title} className="rounded-2xl border border-border bg-card p-8 hover:shadow-elevated transition">
            <s.icon className="h-7 w-7 text-gold" />
            <h2 className="mt-5 text-2xl font-serif">{s.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2"><span className="text-gold">›</span> {p}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="relative overflow-hidden">
        <img src={homeImg} alt="GTA home" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1100} loading="lazy" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container-page py-24 text-primary-foreground text-center">
          <h2 className="text-4xl font-serif">Not sure which fits?</h2>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/80">
            A 15-minute call is usually enough to map out the right path. No credit pull, no commitment.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-medium text-gold-foreground">
            Talk to Amit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
