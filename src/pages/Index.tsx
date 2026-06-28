import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Building2,
  Home,
  RefreshCw,
  TrendingUp,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-toronto.jpg";
import advisorImg from "@/assets/Profile picture.png";
import CountUp from "@/components/CountUp";
import SEO from "@/components/SEO";

/* lender logos (keep as-is) */
import alternaLogo from "@/assets/logos/alterna.svg";
import b2bBankLogo from "@/assets/logos/b2b-bank.svg";
import bmoLogo from "@/assets/logos/bmo.svg";
import cibcLogo from "@/assets/logos/cibc.svg";
import cmlsFinancialLogo from "@/assets/logos/cmls-financial.svg";
import communityTrustLogo from "@/assets/logos/community-trust.svg";
import cwbOptimumLogo from "@/assets/logos/cwb-optimum-mortgage.svg";
import ducaLogo from "@/assets/logos/duca.svg";
import effortTrustLogo from "@/assets/logos/effort-trust.svg";
import equitableBankLogo from "@/assets/logos/equitable-bank.svg";
import firstNationalLogo from "@/assets/logos/first-national.svg";
import haventreeBankLogo from "@/assets/logos/haventree-bank.svg";
import homeTrustLogo from "@/assets/logos/home-trust.svg";
import homeEquityBankLogo from "@/assets/logos/homeequity-bank.svg";
import icSavingsLogo from "@/assets/logos/ic-savings.svg";
import iciciBankLogo from "@/assets/logos/icici-bank.svg";
import lendwiseLogo from "@/assets/logos/lendwise.svg";
import manulifeBankLogo from "@/assets/logos/manulife-bank.svg";
import mcapLogo from "@/assets/logos/mcap.svg";
import meridianLogo from "@/assets/logos/meridian.svg";
import merixLogo from "@/assets/logos/merix.svg";
import newHavenMortgageLogo from "@/assets/logos/new-haven-mortgage.svg";
import rfaLogo from "@/assets/logos/rfa.svg";
import rmgMortgagesLogo from "@/assets/logos/rmg-mortgages.svg";
import scotiabankLogo from "@/assets/logos/scotiabank.svg";
import streetCapitalLogo from "@/assets/logos/street-capital-bank-of-canada.svg";
import tdLogo from "@/assets/logos/td.svg";
import wealthOneLogo from "@/assets/logos/wealthone-bank-of-canada.svg";
import xceedLogo from "@/assets/logos/xceed.svg";
import xmcLogo from "@/assets/logos/xmc-mortgage-corporation.svg";
import privateLendersLogo from "@/assets/logos/private-lenders.svg";

const lenders: { name: string; logo: string }[] = [
  { name: "Alterna", logo: alternaLogo },
  { name: "B2B Bank", logo: b2bBankLogo },
  { name: "BMO", logo: bmoLogo },
  { name: "CIBC", logo: cibcLogo },
  { name: "CMLS Financial", logo: cmlsFinancialLogo },
  { name: "Community Trust", logo: communityTrustLogo },
  { name: "CWB Optimum", logo: cwbOptimumLogo },
  { name: "DUCA", logo: ducaLogo },
  { name: "Effort Trust", logo: effortTrustLogo },
  { name: "Equitable Bank", logo: equitableBankLogo },
  { name: "First National", logo: firstNationalLogo },
  { name: "Haventree Bank", logo: haventreeBankLogo },
  { name: "Home Trust", logo: homeTrustLogo },
  { name: "HomeEquity Bank", logo: homeEquityBankLogo },
  { name: "IC Savings", logo: icSavingsLogo },
  { name: "ICICI Bank", logo: iciciBankLogo },
  { name: "Lendwise", logo: lendwiseLogo },
  { name: "Manulife Bank", logo: manulifeBankLogo },
  { name: "MCAP", logo: mcapLogo },
  { name: "Meridian", logo: meridianLogo },
  { name: "Merix", logo: merixLogo },
  { name: "New Haven Mortgage", logo: newHavenMortgageLogo },
  { name: "RFA", logo: rfaLogo },
  { name: "RMG Mortgages", logo: rmgMortgagesLogo },
  { name: "Scotiabank", logo: scotiabankLogo },
  { name: "Street Capital", logo: streetCapitalLogo },
  { name: "TD", logo: tdLogo },
  { name: "WealthONE", logo: wealthOneLogo },
  { name: "Xceed", logo: xceedLogo },
  { name: "XMC", logo: xmcLogo },
  { name: "Private Lenders", logo: privateLendersLogo },
];

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
          <img
            src={heroImg}
            alt="Toronto skyline at twilight"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="relative container-page page-content min-h-[46vh] md:min-h-[56vh] text-primary-foreground">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left: headline, subtext, CTAs */}
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs uppercase tracking-widest">
                <Sparkles className="h-3 w-3 text-gold" /> FSRA Licensed · GTA, Ontario
              </span>

              {/* Headline increased ~110% by stepping up sizes */}
              <h1 className="mt-4 max-w-3xl text-balance text-3xl md:text-5xl lg:text-6xl leading-tight font-serif">
                The mortgage you deserve,{" "}
                <span className="italic text-gold">without the runaround.</span>
              </h1>

              {/* Subtext slightly larger */}
              <p className="mt-3 max-w-lg text-base md:text-lg text-primary-foreground/80">
                We shop 50+ Canadian lenders on your behalf — banks, credit unions,
                monolines, and private — so you get the right rate, terms, and a
                clear path to closing.
              </p>

              {/* CTAs: visible on first load; hover scale 115% */}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm md:text-base font-medium text-gold-foreground transition-transform duration-200 hover:scale-[1.15] focus:scale-[1.15]"
                >
                  Get a free rate quote <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/calculators"
                  className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-2.5 text-sm md:text-base font-medium text-primary-foreground transition-transform duration-200 hover:bg-primary-foreground/10 hover:scale-[1.15] focus:scale-[1.15]"
                >
                  Use the calculators
                </Link>
              </div>
            </div>

            {/* Right: vertical counters on md+; stacks below CTAs on small screens */}
            <aside className="md:col-span-5 flex items-start md:justify-end">
              <div className="w-full md:w-[320px]">
                <div className="flex flex-col gap-3">
                  <div className="p-3 md:p-4 text-left">
                    <div className="text-xs uppercase tracking-wider text-primary-foreground/60">
                      Lender partners
                    </div>
                    <div className="mt-1 font-serif text-3xl md:text-4xl text-gold">
                      {/* slowed to ~85% by increasing duration slightly (if CountUp supports duration) */}
                      <CountUp end={50} suffix="+" duration={1.2} />
                    </div>
                  </div>

                  <div className="p-3 md:p-4 text-left">
                    <div className="text-xs uppercase tracking-wider text-primary-foreground/60">
                      Funded for clients
                    </div>
                    <div className="mt-1 font-serif text-3xl md:text-4xl text-gold">
                      <CountUp end={450} prefix="$" suffix="M+" duration={1.2} />
                    </div>
                  </div>

                  <div className="p-3 md:p-4 text-left">
                    <div className="text-xs uppercase tracking-wider text-primary-foreground/60">
                      Avg. client rating
                    </div>
                    <div className="mt-1 font-serif text-3xl md:text-4xl text-gold">
                      <CountUp end={4.9} decimals={1} suffix="★" duration={1.2} />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Services (tightened) */}
      <section className="container-page py-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-foreground font-medium">
              What we do
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif">
              A mortgage for every chapter.
            </h2>
          </div>

          <Link
            to="/services"
            className="text-sm font-medium text-foreground hover:text-gold inline-flex items-center gap-2"
          >
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Home,
              title: "First-time buyers",
              body: "Pre-approvals, down-payment strategy, and FTHB incentives — explained without the jargon.",
            },
            {
              icon: RefreshCw,
              title: "Renewals & switches",
              body: "Don't auto-renew. We re-shop your mortgage 120 days before maturity and move you if it saves money.",
            },
            {
              icon: TrendingUp,
              title: "Refinance & equity",
              body: "Consolidate debt, fund a renovation, or unlock equity for the next investment property.",
            },
            {
              icon: Building2,
              title: "Investment properties",
              body: "Rental, multi-unit, and BRRRR financing with lenders who actually understand the strategy.",
            },
            {
              icon: ShieldCheck,
              title: "Self-employed & new to Canada",
              body: "Alternative documentation, stated income, and newcomer programs that work for your reality.",
            },
            {
              icon: Sparkles,
              title: "Private & bridge",
              body: "Short-term solutions when the banks say no — for closings that can't wait.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 transition hover:shadow-elevated hover:-translate-y-0.5"
            >
              <s.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-4 text-lg font-serif">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lender Grid (tightened) */}
      <section className="bg-secondary/60 py-8">
        <div className="container-page text-center">
          <p className="text-xs uppercase tracking-widest text-foreground font-medium">
            Lender network
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-serif">
            One conversation. The entire market.
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We're brokerage-independent and work with every major category of
            Canadian lender — so the recommendation is always about fit, not
            loyalty.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
            {lenders.map((l) => (
              <img
                key={l.name}
                src={l.logo}
                alt={l.name}
                className="h-14 md:h-18 w-auto object-contain"
              />
            ))}
          </div>

          <p className="mt-4 text-center italic text-muted-foreground">
            &amp; many more
          </p>
        </div>
      </section>

      {/* Advisor (tightened) — removed border/extra badge around picture */}
      <section className="container-page py-8 grid gap-10 md:grid-cols-2 items-center">
        <div className="relative">
          <img
            src={advisorImg}
            alt="Amit Bhola, your mortgage advisor"
            className="rounded-2xl" /* removed shadow/border for a clean look */
            loading="lazy"
          />

          {/* removed the gold badge that sat over the image to keep the portrait clean */}
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-foreground font-medium">
            Meet your advisor
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-serif">
            Direct access, honest answers.
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            I started Amit Mortgages because too many buyers in the GTA were
            getting fast-tracked into the wrong product. You'll work with me
            directly — from the first call, through underwriting, and well past
            your closing day.
          </p>

          <ul className="mt-5 space-y-3 text-sm">
            {[
              "FSRA-licensed mortgage agent, Ontario",
              "Brokerage-independent — no lender quotas",
              "Same-day pre-approvals, evenings & weekends",
              "Fluent in English, Hindi, Punjabi & Urdu",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-gold mt-0.5" /> {b}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-gold"
          >
            More about Amit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA (tightened) */}
      <section className="container-page pb-12">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif max-w-md">
              Ready to see what you actually qualify for?
            </h2>

            <p className="mt-3 text-primary-foreground/70 max-w-md">
              No credit check, no commitment. A 15-minute call usually answers
              everything.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm md:text-base font-medium text-gold-foreground transition-transform duration-200 hover:scale-[1.08]"
          >
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
      <dd className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/60">
        {label}
      </dd>
    </div>
  );
}
