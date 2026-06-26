import { useMemo, useState } from "react";
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
        description="Free Canadian mortgage calculators: payment, affordability, Ontario & Toronto land transfer tax, CMHC insurance, and mortgage prepayment savings."
        canonical="/calculators"
      />
      <section className="container-page pt-20 pb-10">
        <p className="text-xs uppercase tracking-widest text-gold font-medium">Calculators</p>
        <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl font-serif text-balance">
          Run the numbers before you sign anything.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Built on Canadian semi-annual compounding and current Ontario tax rules. Hover any tab for a quick description. Estimates only — your real approval may differ.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="flex flex-wrap gap-2 border-b border-border">
          {tabs.map((t) => {
            const Active = t.id === active;
            return (
              <div key={t.id} className="relative group">
                <button
                  onClick={() => setActive(t.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 -mb-px transition ${Active ? "border-gold text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
                >
                  <t.icon className="h-4 w-4" /> {t.label}
                </button>
                <div
                  role="tooltip"
                  className="pointer-events-none absolute left-1/2 top-full z-30 mt-2 w-64 -translate-x-1/2 translate-y-1 rounded-lg bg-primary px-4 py-3 text-xs leading-relaxed text-primary-foreground opacity-0 shadow-[var(--shadow-elevated)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:opacity-100"
                >
                  <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-primary" />
                  <span className="block font-serif text-sm text-gold mb-1">{t.label}</span>
                  {t.desc}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          {active === "payment" && <PaymentCalc />}
          {active === "afford" && <AffordabilityCalc />}
          {active === "ltt" && <LandTransferCalc />}
          {active === "cmhc" && <CmhcCalc />}
          {active === "prepay" && <PrepaymentCalc />}
        </div>
      </section>
    </>
  );
}

function Shell({ inputs, results }: { inputs: React.ReactNode; results: React.ReactNode }) {
  return (
    <div className="grid gap-8 md:grid-cols-5">
      <div className="md:col-span-3 rounded-2xl border border-border bg-card p-8 space-y-5">{inputs}</div>
      <div className="md:col-span-2 rounded-2xl bg-primary text-primary-foreground p-8 space-y-5">{results}</div>
    </div>
  );
}

function NumberInput({ label, value, onChange, prefix, suffix, step = 1 }: { label: string; value: number; onChange: (v: number) => void; prefix?: string; suffix?: string; step?: number }) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <div className="flex items-center rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-gold">
        {prefix && <span className="px-3 text-muted-foreground text-sm">{prefix}</span>}
        <input
          type="number"
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
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
      <div className={`font-serif ${big ? "text-5xl text-gold mt-2" : "text-2xl mt-1"}`}>{value}</div>
    </div>
  );
}

const fmt = (n: number) => new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);
const fmt2 = (n: number) => new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(n);

function monthlyPayment(principal: number, annualRate: number, amortYears: number) {
  if (principal <= 0 || amortYears <= 0) return 0;
  if (annualRate === 0) return principal / (amortYears * 12);
  const effMonthly = Math.pow(1 + annualRate / 2 / 100, 1 / 6) - 1;
  const n = amortYears * 12;
  return (principal * effMonthly) / (1 - Math.pow(1 + effMonthly, -n));
}

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
          <div className="grid grid-cols-2 gap-5">
            <NumberInput label="Interest rate" value={rate} onChange={setRate} suffix="%" step={0.01} />
            <NumberInput label="Amortization" value={amort} onChange={setAmort} suffix="yrs" />
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Payment frequency</label>
            <div className="grid grid-cols-3 gap-2">
              {(["monthly", "biweekly", "accelerated"] as const).map((f) => (
                <button key={f} onClick={() => setFreq(f)} className={`rounded-md border px-3 py-2 text-sm capitalize ${freq === f ? "border-gold bg-gold/10 text-foreground" : "border-border text-muted-foreground"}`}>{f === "accelerated" ? "Accel. Bi-weekly" : f}</button>
              ))}
            </div>
          </div>
        </>
      }
      results={
        <>
          <Stat label={freq === "monthly" ? "Monthly payment" : "Per payment"} value={fmt2(payment)} big />
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-foreground/15">
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
          <div className="grid grid-cols-2 gap-5">
            <NumberInput label="Contract rate" value={rate} onChange={setRate} suffix="%" step={0.01} />
            <NumberInput label="Amortization" value={amort} onChange={setAmort} suffix="yrs" />
          </div>
          <p className="text-xs text-muted-foreground">Uses the federal stress test: qualifying rate = max(contract + 2%, 5.25%). GDS 39% / TDS 44%.</p>
        </>
      }
      results={
        <>
          <Stat label="Max home price" value={fmt(maxPrice)} big />
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-foreground/15">
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
            Property is in the City of Toronto (adds municipal LTT)
          </label>
          <label className="flex items-center gap-3 text-sm">
            <input type="checkbox" checked={fthb} onChange={(e) => setFthb(e.target.checked)} className="h-4 w-4 accent-[oklch(0.74_0.13_75)]" />
            First-time home buyer (apply rebate)
          </label>
          <p className="text-xs text-muted-foreground">Ontario rebate caps at $4,000. Toronto first-time rebate caps at $4,475.</p>
        </>
      }
      results={
        <>
          <Stat label="Total land transfer tax" value={fmt(Math.max(total, 0))} big />
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-foreground/15">
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

function minCmhcDownPayment(price: number) {
  if (price <= 500000) return price * 0.05;
  return 25000 + Math.min(price - 500000, 1000000) * 0.10;
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
  const eligible = ratio <= 0.95 && price <= 1500000;

  return (
    <Shell
      inputs={
        <>
          <NumberInput label="Home price" value={price} onChange={setPrice} prefix="$" />
          <NumberInput label="Down payment" value={down} onChange={setDown} prefix="$" />
          <p className="text-xs text-muted-foreground">
            CMHC requires min 5% down on the first $500k and 10% on the portion above (up to $1.5M). Premium ranges from 2.8% to 4.0% of the mortgage based on LTV.
          </p>
          {!eligible && <p className="text-xs text-destructive">Not insurable: price over $1.5M or down payment below minimum.</p>}
        </>
      }
      results={
        <>
          <Stat label="CMHC premium" value={fmt(premium)} big />
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-foreground/15">
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
          <div className="grid grid-cols-2 gap-5">
            <NumberInput label="Rate" value={rate} onChange={setRate} suffix="%" step={0.01} />
            <NumberInput label="Amortization" value={amort} onChange={setAmort} suffix="yrs" />
          </div>
          <NumberInput label="Extra monthly payment" value={extra} onChange={setExtra} prefix="$" />
          <p className="text-xs text-muted-foreground">Most lenders allow 10–20% annual prepayment without penalty. We'll confirm your specific lender's privileges.</p>
        </>
      }
      results={
        <>
          <Stat label="Years off your mortgage" value={yearsSaved.toFixed(1) + " yrs"} big />
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-foreground/15">
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
