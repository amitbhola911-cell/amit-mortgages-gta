// src/pages/Calculators.tsx
import React, { useMemo, useState } from "react";
import { Calculator, Home, Wallet, Landmark, PiggyBank } from "lucide-react";
import SEO from "@/components/SEO";

const tabs = [
  { id: "payment", label: "Mortgage Payment", icon: Home, desc: "Estimate monthly, bi-weekly, and accelerated payments using Canadian semi-annual compounding." },
  { id: "afford", label: "Affordability", icon: Wallet, desc: "See the maximum home price you qualify for under the federal stress test rules." },
  { id: "ltt", label: "Land Transfer Tax", icon: Landmark, desc: "Calculate Ontario + City of Toronto land transfer tax, with first-time buyer rebates." },
  { id: "cmhc", label: "CMHC Insurance", icon: PiggyBank, desc: "Estimate default insurance premiums when your down payment is under 20%." },
  { id: "prepay", label: "Prepayment Savings", icon: Calculator, desc: "See how much interest and time you save by paying extra each month or year." },
] as const;

export default function Calculators() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("payment");

  return (
    <>
      <SEO
        title="Mortgage Calculators — Payment, Affordability, Land Transfer | Amit Mortgages"
        description="Free Canadian mortgage calculators: payment, affordability, Ontario & Toronto land transfer tax, CMHC insurance, and mortgage prepayment savings. Calculate your mortgage with Canadian semi-annual compounding."
        canonical="/calculators"
        keywords="mortgage calculator, payment calculator, affordability calculator, land transfer tax calculator, CMHC calculator, GTA mortgage calculators, Ontario mortgage tools"
      >
        {/* Page-level JSON-LD describing the calculators (helps search engines understand the toolset) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "Amit Mortgages Calculators",
                url: "https://amitmortgages.ca/calculators",
                description:
                  "Free Canadian mortgage calculators: payment, affordability, land transfer tax, CMHC insurance, and prepayment savings.",
                applicationCategory: "FinanceApplication",
                featureList: [
                  "Mortgage Payment Calculator",
                  "Affordability Calculator",
                  "Ontario Land Transfer Tax Calculator",
                  "CMHC Insurance Calculator",
                  "Mortgage Prepayment Savings Calculator",
                ],
              },
              null,
              2
            ),
          }}
        />
      </SEO>

    {/* Intro (matches About page style) */}
<section className="container-page page-content">
  <p className="text-xs uppercase tracking-widest text-foreground font-medium">Mortgage Tools</p>
  <h1 className="mt-3 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-serif text-balance">
    Run the numbers before you sign anything.
  </h1>
  <p className="mt-4 text-sm text-muted-foreground max-w-xl">
    Built on Canadian semi-annual compounding and current Ontario tax rules. Estimates only — your real approval may differ.
  </p>
</section>

{/* Main calculators band with secondary background (two-tone effect) */}
<section className="bg-secondary/60 page-content">
  <div className="container-page py-8 flex gap-8 min-h-[calc(100vh-300px)]">
    {/* Mobile: compact horizontal tabs */}
    <div className="md:hidden w-full mb-4">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((t) => {
          const isActive = t.id === active;
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              aria-pressed={isActive}
              className={`flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap transition ${
                isActive ? "bg-gold/10 text-foreground" : "bg-transparent text-muted-foreground hover:bg-primary/5"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm">{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>

    {/* Desktop: semantic sidebar (hidden on mobile) */}
    <nav aria-label="Calculator tools" className="hidden md:block w-80 flex-shrink-0">
      <ul className="space-y-2">
        {tabs.map((t) => {
          const isActive = t.id === active;
          const Icon = t.icon;
          return (
            <li key={t.id}>
              <button
                onClick={() => setActive(t.id)}
                aria-current={isActive ? "true" : undefined}
                className={`w-full text-left rounded-lg border-2 p-4 transition ${
                  isActive ? "border-gold bg-gold/5 text-foreground" : "border-border text-foreground hover:bg-primary/5"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-5 w-5" aria-hidden />
                  <span className="font-medium text-sm">{t.label}</span>
                </div>
                <p className={`text-xs leading-relaxed ${isActive ? "text-foreground/80" : "text-muted-foreground"}`}>{t.desc}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>

    {/* RIGHT: Calculator content */}
    <main className="flex-1 min-w-0">
      <div className="sticky top-20 md:top-32">
        {active === "payment" && <PaymentCalc />}
        {active === "afford" && <AffordabilityCalc />}
        {active === "ltt" && <LandTransferCalc />}
        {active === "cmhc" && <CmhcCalc />}
        {active === "prepay" && <PrepaymentCalc />}
      </div>
    </main>
  </div>
</section>
        {/* Desktop: semantic sidebar (hidden on mobile) */}
        <nav aria-label="Calculator tools" className="hidden md:block w-80 flex-shrink-0">
          <ul className="space-y-2">
            {tabs.map((t) => {
              const isActive = t.id === active;
              const Icon = t.icon;
              return (
                <li key={t.id}>
                  <button
                    onClick={() => setActive(t.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`w-full text-left rounded-lg border-2 p-4 transition ${
                      isActive ? "border-gold bg-gold/5 text-foreground" : "border-border text-foreground hover:bg-primary/5"
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-5 w-5" aria-hidden />
                      <span className="font-medium text-sm">{t.label}</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isActive ? "text-foreground/80" : "text-muted-foreground"}`}>{t.desc}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* RIGHT: Calculator content */}
        <main className="flex-1 min-w-0">
          <div className="sticky top-20 md:top-32">
            {active === "payment" && <PaymentCalc />}
            {active === "afford" && <AffordabilityCalc />}
            {active === "ltt" && <LandTransferCalc />}
            {active === "cmhc" && <CmhcCalc />}
            {active === "prepay" && <PrepaymentCalc />}
          </div>
        </main>
      </section>
    </>
  );
}

/* ---------- Shell and shared UI ---------- */

function Shell({ inputs, results }: { inputs: React.ReactNode; results: React.ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
      <div className="md:col-span-3 lg:col-span-3 rounded-2xl border border-border bg-card p-8 space-y-6">{inputs}</div>
      <div
        className="md:col-span-3 lg:col-span-2 rounded-2xl bg-primary text-primary-foreground p-8 space-y-6"
        aria-live="polite"
      >
        {results}
      </div>
    </div>
  );
}

function NumberInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: number;
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <div className="flex items-center rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-gold">
        {prefix && <span className="px-3 text-muted-foreground text-sm">{prefix}</span>}
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          min="0"
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          aria-label={label}
          className="flex-1 bg-transparent px-3 py-3 text-sm focus:outline-none"
        />
        {suffix && <span className="px-3 text-muted-foreground text-sm">{suffix}</span>}
      </div>
    </div>
  );
}

function Stat({ label, value, big }: { label: string; value: string; big?: boolean }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-primary-foreground/60">{label}</div>
      <div className={`font-serif ${big ? "text-4xl md:text-5xl text-gold mt-2" : "text-lg mt-1"}`}>{value}</div>
    </div>
  );
}

/* ---------- Formatting helpers and math ---------- */

const fmt = (n: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);
const fmt2 = (n: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(n);

function monthlyPayment(principal: number, annualRate: number, amortYears: number) {
  if (principal <= 0 || amortYears <= 0) return 0;
  if (annualRate === 0) return principal / (amortYears * 12);
  const effMonthly = Math.pow(1 + annualRate / 2 / 100, 1 / 6) - 1;
  const n = amortYears * 12;
  return (principal * effMonthly) / (1 - Math.pow(1 + effMonthly, -n));
}

/* ---------- Payment calculator ---------- */

function PaymentCalc() {
  const [price, setPrice] = useState(950000);
  const [down, setDown] = useState(190000);
  const [rate, setRate] = useState(4.99);
  const [amort, setAmort] = useState(25);
  const [freq, setFreq] = useState<"monthly" | "biweekly" | "accelerated">("monthly");

  const principal = Math.max(price - down, 0);
  const monthly = monthlyPayment(principal, rate, amort);
  const payment = freq === "monthly" ? monthly : freq === "biweekly" ? (monthly * 12) / 26 : monthly / 2;
  const perYear = freq === "monthly" ? monthly * 12 : freq === "biweekly" ? payment * 26 : payment * 26;
  const equivalentMonthlyPmt = freq === "accelerated" ? (monthly * 13) / 12 : monthly;
  const effMonthlyRate = rate === 0 ? 0 : Math.pow(1 + rate / 2 / 100, 1 / 6) - 1;
  const payoffMonths =
    rate === 0
      ? principal / equivalentMonthlyPmt
      : equivalentMonthlyPmt <= principal * effMonthlyRate
      ? amort * 12
      : Math.log(equivalentMonthlyPmt / (equivalentMonthlyPmt - principal * effMonthlyRate)) / Math.log(1 + effMonthlyRate);
  const totalPaidAmount = equivalentMonthlyPmt * payoffMonths;
  const totalInterest = totalPaidAmount - principal;

  return (
    <Shell
      inputs={
        <>
          <NumberInput label="Home price" value={price} onChange={setPrice} prefix="$" />
          <NumberInput label="Down payment" value={down} onChange={setDown} prefix="$" />
          <div className="grid grid-cols-2 gap-4">
            <NumberInput label="Interest rate" value={rate} onChange={setRate} suffix="%" step={0.01} />
            <NumberInput label="Amortization" value={amort} onChange={setAmort} suffix="yrs" />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Payment frequency</label>
            <div className="grid grid-cols-3 gap-2">
              {(["monthly", "biweekly", "accelerated"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFreq(f)}
                  aria-pressed={freq === f}
                  className={`rounded-md border px-3 py-2 text-xs md:text-sm capitalize ${freq === f ? "border-gold bg-gold/10 text-foreground" : "border-border text-muted-foreground hover:bg-primary/5 hover:text-foreground"}`}
                >
                  {f === "accelerated" ? "Accel. Bi-weekly" : f}
                </button>
              ))}
            </div>
          </div>
        </>
      }
      results={
        <>
          <Stat label={freq === "monthly" ? "Monthly payment" : "Per payment"} value={fmt2(payment)} big />
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-primary-foreground/15">
            <Stat label="Mortgage amount" value={fmt(principal)} />
            <Stat label="Per year" value={fmt(perYear)} />
            <Stat label="Total interest" value={fmt(totalInterest)} />
            <Stat label="Total paid" value={fmt(totalPaidAmount)} />
          </div>
        </>
      }
    />
  );
}

/* ---------- Affordability ---------- */

function AffordabilityCalc() {
  const [income, setIncome] = useState(140000);
  const [debts, setDebts] = useState(600);
  const [down, setDown] = useState(100000);
  const [rate, setRate] = useState(4.99);
  const [amort, setAmort] = useState(30);

  const qualifyingRate = Math.max(rate + 2, 5.25);
  const gdsLimit = (income / 12) * 0.39;
  const tdsLimit = (income / 12) * 0.44 - debts;
  const maxPmt = Math.max(0, Math.min(gdsLimit * 0.85, tdsLimit));
  const eff = Math.pow(1 + qualifyingRate / 2 / 100, 1 / 6) - 1;
  const n = amort * 12;
  const maxMortgage = maxPmt > 0 ? maxPmt * (1 - Math.pow(1 + eff, -n)) / eff : 0;
  const maxPrice = maxMortgage + down;

  return (
    <Shell
      inputs={
        <>
          <NumberInput label="Household income (annual)" value={income} onChange={setIncome} prefix="$" />
          <NumberInput label="Monthly debt payments" value={debts} onChange={setDebts} prefix="$" />
          <NumberInput label="Down payment available" value={down} onChange={setDown} prefix="$" />
          <div className="grid grid-cols-2 gap-4">
            <NumberInput label="Contract rate" value={rate} onChange={setRate} suffix="%" step={0.01} />
            <NumberInput label="Amortization" value={amort} onChange={setAmort} suffix="yrs" />
          </div>
          <p className="text-xs text-muted-foreground">Uses federal stress test: qualifying rate = max(contract + 2%, 5.25%). GDS 39% / TDS 44%.</p>
        </>
      }
      results={
        <>
          <Stat label="Max home price" value={fmt(maxPrice)} big />
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-primary-foreground/15">
            <Stat label="Max mortgage" value={fmt(maxMortgage)} />
            <Stat label="Qualifying rate" value={qualifyingRate.toFixed(2) + "%"} />
            <Stat label="Max payment" value={fmt2(maxPmt)} />
            <Stat label="Down payment" value={fmt(down)} />
          </div>
        </>
      }
    />
  );
}

/* ---------- Land transfer tax ---------- */

function ontarioLTT(price: number) {
  let tax = 0;
  const brackets = [
    [55000, 0.005],
    [195000, 0.01],
    [150000, 0.015],
    [1600000, 0.02],
    [Infinity, 0.025],
  ] as const;
  let remaining = price;
  for (const [size, rate] of brackets) {
    const slice = Math.min(remaining, size);
    tax += slice * rate;
    remaining -= slice;
    if (remaining <= 0) break;
  }
  return tax;
}

function torontoMLTT(price: number) {
  let tax = 0;
  const brackets = [
    [55000, 0.005], [195000, 0.01], [150000, 0.015], [1600000, 0.02],
    [1000000, 0.025], [1000000, 0.044], [1000000, 0.0545],
    [5000000, 0.065], [10000000, 0.0755], [Infinity, 0.086],
  ] as const;
  let remaining = price;
  for (const [size, rate] of brackets) {
    const slice = Math.min(remaining, size);
    tax += slice * rate;
    remaining -= slice;
    if (remaining <= 0) break;
  }
  return tax;
}

function LandTransferCalc() {
  const [price, setPrice] = useState(950000);
  const [toronto, setToronto] = useState(false);
  const [fthb, setFthb] = useState(false);

  const ont = ontarioLTT(price);
  const tor = toronto ? torontoMLTT(price) : 0;
  const fthbOnt = fthb ? Math.min(ont, 4000) : 0;
  const fthbTor = fthb && toronto ? Math.min(tor, 4475) : 0;
  const total = ont + tor - fthbOnt - fthbTor;

  return (
    <Shell
      inputs={
        <>
          <NumberInput label="Purchase price" value={price} onChange={setPrice} prefix="$" />
          <label className="flex items-center gap-3 text-sm">
            <input type="checkbox" checked={toronto} onChange={(e) => setToronto(e.target.checked)} className="h-4 w-4 accent-[oklch(0.74_0.13_75)]" />
            City of Toronto property
          </label>
          <label className="flex items-center gap-3 text-sm">
            <input type="checkbox" checked={fthb} onChange={(e) => setFthb(e.target.checked)} className="h-4 w-4 accent-[oklch(0.74_0.13_75)]" />
            First-time home buyer
          </label>
          <p className="text-xs text-muted-foreground">Ontario rebate caps at $4,000. Toronto rebate caps at $4,475.</p>
        </>
      }
      results={
        <>
          <Stat label="Total land transfer tax" value={fmt(Math.max(total, 0))} big />
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-primary-foreground/15">
            <Stat label="Ontario LTT" value={fmt(ont)} />
            <Stat label="Toronto LTT" value={fmt(tor)} />
            <Stat label="ON rebate" value={"−" + fmt(fthbOnt)} />
            <Stat label="Toronto rebate" value={"−" + fmt(fthbTor)} />
          </div>
        </>
      }
    />
  );
}

/* ---------- CMHC ---------- */

function minCmhcDownPayment(price: number) {
  if (price <= 500000) return price * 0.05;
  return 25000 + Math.min(price - 500000, 1000000) * 0.1;
}

function CmhcCalc() {
  const [price, setPrice] = useState(700000);
  const [down, setDown] = useState(35000);

  const { premium, principal, ratio } = useMemo(() => {
    const principal = Math.max(price - down, 0);
    const ltv = principal / price;
    let rate = 0;
    if (ltv > 0.95) rate = 0;
    else if (ltv > 0.9) rate = 0.04;
    else if (ltv > 0.85) rate = 0.031;
    else if (ltv > 0.8) rate = 0.028;
    else rate = 0;
    return { premium: principal * rate, principal, ratio: ltv };
  }, [price, down]);

  const insured = principal + premium;
  const minDown = minCmhcDownPayment(price);
  const eligible = ratio <= 0.95 && price <= 1500000 && down >= minDown;

  return (
    <Shell
      inputs={
        <>
          <NumberInput label="Home price" value={price} onChange={setPrice} prefix="$" />
          <NumberInput label="Down payment" value={down} onChange={setDown} prefix="$" />
          <p className="text-xs text-muted-foreground">
            Min 5% on first $500k, 10% above. Premium 2.8–4.0% of mortgage based on LTV.
          </p>
          {!eligible && (
            <p className="text-xs text-destructive">
              {price > 1500000
                ? "Not insurable above $1.5M — 20% down required."
                : `Min down: ${fmt(minDown)} (5% on $500k + 10% above).`}
            </p>
          )}
        </>
      }
      results={
        <>
          <Stat label="CMHC premium" value={fmt(premium)} big />
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-primary-foreground/15">
            <Stat label="Loan-to-value" value={(ratio * 100).toFixed(1) + "%"} />
            <Stat label="Base mortgage" value={fmt(principal)} />
            <Stat label="Total insured" value={fmt(insured)} />
            <Stat label="Down %" value={((down / price) * 100 || 0).toFixed(1) + "%"} />
          </div>
        </>
      }
    />
  );
}

/* ---------- Prepayment ---------- */

function PrepaymentCalc() {
  const [principal, setPrincipal] = useState(600000);
  const [rate, setRate] = useState(4.99);
  const [amort, setAmort] = useState(25);
  const [extra, setExtra] = useState(300);

  const base = monthlyPayment(principal, rate, amort);
  const eff = Math.pow(1 + rate / 2 / 100, 1 / 6) - 1;

  function months(payment: number) {
    if (payment <= principal * eff) return Infinity;
    return Math.log(payment / (payment - principal * eff)) / Math.log(1 + eff);
  }

  const baseMonths = months(base);
  const newMonths = months(base + extra);
  const yearsSaved = (baseMonths - newMonths) / 12;
  const interestSaved = base * baseMonths - (base + extra) * newMonths;

  return (
    <Shell
      inputs={
        <>
          <NumberInput label="Current mortgage balance" value={principal} onChange={setPrincipal} prefix="$" />
          <div className="grid grid-cols-2 gap-4">
            <NumberInput label="Rate" value={rate} onChange={setRate} suffix="%" step={0.01} />
            <NumberInput label="Amortization" value={amort} onChange={setAmort} suffix="yrs" />
          </div>
          <NumberInput label="Extra monthly payment" value={extra} onChange={setExtra} prefix="$" />
          <p className="text-xs text-muted-foreground">Most lenders allow 10–20% annual prepayment without penalty. We'll confirm your lender's privileges.</p>
        </>
      }
      results={
        <>
          <Stat label="Years off your mortgage" value={yearsSaved.toFixed(1) + " yrs"} big />
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-primary-foreground/15">
            <Stat label="Interest saved" value={fmt(Math.max(interestSaved, 0))} />
            <Stat label="New payment" value={fmt2(base + extra)} />
            <Stat label="Original payment" value={fmt2(base)} />
            <Stat label="New payoff" value={(newMonths / 12).toFixed(1) + " yrs"} />
          </div>
        </>
      }
    />
  );
}
