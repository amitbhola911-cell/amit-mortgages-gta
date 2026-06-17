import { Check } from "lucide-react";
import advisorImg from "@/assets/advisor.jpg";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Amit — GTA Mortgage Agent"
        description="Meet Amit, an FSRA-licensed mortgage agent serving the Greater Toronto Area with 12+ years of experience across 50+ Canadian lenders."
        canonical="/about"
      />
      <section className="container-page pt-20 pb-12">
        <p className="text-xs uppercase tracking-widest text-gold font-medium">About</p>
        <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl font-serif text-balance">
          Mortgages should feel like advice — not a sales pitch.
        </h1>
      </section>

      <section className="container-page grid gap-12 md:grid-cols-5 pb-20">
        <div className="md:col-span-2">
          <img src={advisorImg} alt="Amit, mortgage advisor" className="rounded-2xl shadow-soft" width={1200} height={1400} loading="lazy" />
        </div>
        <div className="md:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Amit Mortgages is an independent mortgage practice based in Mississauga, serving clients across the Greater Toronto Area — from Oakville to Markham, Brampton to Scarborough, and everywhere in between.
          </p>
          <p>
            After more than a decade in residential lending, Amit built this practice on a simple idea: clients deserve a single advisor who actually knows their file, who picks up the phone, and who shops the entire market on their behalf. Not a call center. Not a script.
          </p>
          <p>
            Today, the brokerage funds over $50M a year through 50+ lender partners — major banks, monoline lenders, credit unions, B-lenders, and private capital. Whatever your situation, there's almost always a path forward.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-4">
            {[
              "FSRA Licensed — Ontario",
              "12+ years in residential lending",
              "Brokerage-independent",
              "Same-day pre-approvals",
              "Self-employed specialist",
              "Newcomer to Canada programs",
              "Investment property financing",
              "English · Hindi · Punjabi · Gujarati",
            ].map((c) => (
              <div key={c} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" /> {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl font-serif">How we work</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Discovery call", b: "A 15-minute conversation to understand your goals, timeline, and finances." },
              { n: "02", t: "Strategy", b: "We map the right product, structure, and lender — and outline a clear plan." },
              { n: "03", t: "Application", b: "We package your file, negotiate rate, and handle underwriting end-to-end." },
              { n: "04", t: "Closing & beyond", b: "We coordinate with your lawyer, then check in annually to keep you ahead." },
            ].map((s) => (
              <div key={s.n} className="rounded-xl bg-card border border-border p-6">
                <div className="font-serif text-gold text-3xl">{s.n}</div>
                <h3 className="mt-3 text-lg font-serif">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
