import { Link } from "react-router-dom";
import { ArrowRight, Check, Building2, Home, RefreshCw, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-toronto.jpg";
import advisorImg from "@/assets/profile-photo.png.asset.json";
import CountUp from "@/components/CountUp";
import SEO from "@/components/SEO";

export default function Index() {
  return (
    <>
      <SEO
        title="Amit Mortgages — GTA Mortgage Agent"
        description="One advisor, 50+ lenders. Get sharper mortgage rates and personal guidance for buying, renewing, or refinancing anywhere in the Greater Toronto Area."
        canonical="/"
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Toronto skyline at twilight" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="relative container-page py-28 md:py-40 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs uppercase tracking-widest">
            <Sparkles className="h-3 w-3 text-gold" /> FSRA Licensed · GTA, Ontario
          </span>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl md:text-7xl leading-[1.05] font-serif">
            The mortgage you deserve, <span className="italic text-gold">without the runaround.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            We shop 50+ Canadian lenders on your behalf — banks, credit unions, monolines, and private — so you get the right rate, terms, and a clear path to closing.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-medium text-gold-foreground hover:opacity-90 transition">
              Get a free rate quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/calculators" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition">
              Use the calculators
            </Link>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-8">
            <Stat value={<CountUp end={50} suffix="+" className="font-serif text-3xl md:text-4xl text-gold" />} label="Lender partners" />
            <Stat value={<CountUp end={450} prefix="$" suffix="M+" className="font-serif text-3xl md:text-4xl text-gold" />} label="Funded for clients" />
            <Stat value={<CountUp end={4.9} decimals={1} suffix="★" className="font-serif text-3xl md:text-4xl text-gold" />} label="Avg. client rating" />
          </dl>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-gold font-medium">What we do</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif">A mortgage for every chapter.</h2>
          </div>
          <Link to="/services" className="text-sm font-medium text-foreground hover:text-gold inline-flex items-center gap-2">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Home, title: "First-time buyers", body: "Pre-approvals, down-payment strategy, and FTHB incentives — explained without the jargon." },
            { icon: RefreshCw, title: "Renewals & switches", body: "Don't auto-renew. We re-shop your mortgage 120 days before maturity and move you if it saves money." },
            { icon: TrendingUp, title: "Refinance & equity", body: "Consolidate debt, fund a renovation, or unlock equity for the next investment property." },
            { icon: Building2, title: "Investment properties", body: "Rental, multi-unit, and BRRRR financing with lenders who actually understand the strategy." },
            { icon: ShieldCheck, title: "Self-employed & new to Canada", body: "Alternative documentation, stated income, and newcomer programs that work for your reality." },
            { icon: Sparkles, title: "Private & bridge", body: "Short-term solutions when the banks say no — for closings that can't wait." },
          ].map((s) => (
            <div key={s.title} className="group rounded-xl border border-border bg-card p-7 transition hover:shadow-elevated hover:-translate-y-0.5">
              <s.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-5 text-xl font-serif">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="container-page text-center">
          <p className="text-xs uppercase tracking-widest text-gold font-medium">Lender network</p>
          <h2 className="mt-3 text-4xl font-serif">One conversation. The entire market.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We're brokerage-independent and work with every major category of Canadian lender — so the recommendation is always about fit, not loyalty.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {["TD", "Scotiabank", "Community Trust", "BMO", "CIBC", "First National", "MCAP", "Equitable Bank", "Meridian", "Home Trust", "B2B Bank", "Private Lenders"].map((l) => (
              <div key={l} className="rounded-md border border-border bg-card px-4 py-5 font-serif text-lg">
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24 grid gap-12 md:grid-cols-2 items-center">
        <div className="relative">
          <img src={advisorImg.url} alt="Amit Bhola, your mortgage advisor" className="rounded-2xl shadow-elevated" loading="lazy" />
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-xl bg-gold text-gold-foreground px-6 py-4 shadow-soft">
            <div className="font-serif text-2xl">12+ years</div>
            <div className="text-xs uppercase tracking-wider">funding GTA mortgages</div>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-gold font-medium">Meet your advisor</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif">Direct access, honest answers.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            I started Amit Mortgages because too many buyers in the GTA were getting fast-tracked into the wrong product. You'll work with me directly — from the first call, through underwriting, and well past your closing day.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "FSRA-licensed mortgage agent, Ontario",
              "Brokerage-independent — no lender quotas",
              "Same-day pre-approvals, evenings & weekends",
              "Fluent in English, Hindi, Punjabi & Urdu",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3"><Check className="h-5 w-5 text-gold mt-0.5" /> {b}</li>
            ))}
          </ul>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-gold">
            More about Amit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif max-w-md">Ready to see what you actually qualify for?</h2>
            <p className="mt-3 text-primary-foreground/70 max-w-md">No credit check, no commitment. A 15-minute call usually answers everything.</p>
          </div>
          <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-medium text-gold-foreground">
            Book a free consult <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <dt>{value}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/60">{label}</dd>
    </div>
  );
}
