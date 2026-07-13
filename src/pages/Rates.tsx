// src/pages/Rates.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import homeImg from "@/assets/home-gta.jpg";

const rates = [
  { term: "6 Month Fixed", rate: 2.49 },
  { term: "1 Year Fixed", rate: 4.49 },
  { term: "2 Year Fixed", rate: 3.99 },
  { term: "3 Year Fixed", rate: 3.99 },
  { term: "4 Year Fixed", rate: 4.24 },
  { term: "5 Year Fixed", rate: 4.04 },
  { term: "5 Year Variable", rate: 3.49 },
];

function fmtRate(n: number) {
  return n.toFixed(2) + "%";
}

function examplePayment(rate: number, principal = 500000, amortYears = 25) {
  const monthlyRate = Math.pow(1 + rate / 100 / 2, 1 / 6) - 1;
  const n = amortYears * 12;
  if (monthlyRate === 0) return "$" + Math.round(principal / n);
  const pmt = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
  return pmt.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
}

export default function Rates() {
  return (
    <>
      <SEO
        title="Current Mortgage Rates — Ontario | Amit Mortgages"
        description="Current Ontario mortgage rates and example payments. Rates vary by lender, credit, equity and product — contact us for a personalized quote."
        canonical="/rates"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Amit Mortgages — Rates",
              url: "https://amitmortgages.ca/rates",
              description: "Current Ontario mortgage rates and example payments.",
            }, null, 2),
          }}
        />
      </SEO>

      {/* Intro */}
      <section className="container-page pt-8 pb-10">
        <p className="text-xs uppercase tracking-widest text-foreground font-medium">Rates</p>
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-serif text-balance">
          Current Ontario mortgage rates and example payments
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          These rates are illustrative. Your actual rate depends on credit, down payment, property type, and lender underwriting. Contact us for a tailored quote. 
        </p>
      </section>

      {/* Rates band */}
      <section className="bg-secondary/60 page-content">
        <div className="container-page py-8">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-serif">Ontario rates (current)</h2>
              <div className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left text-sm text-muted-foreground">
                    <th className="pb-3">Term</th>
                    <th className="pb-3">Rate</th>
                    <th className="pb-3">Example payment (on $500,000)</th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((r) => (
                    <tr key={r.term} className="border-t border-border">
                      <td className="py-4">{r.term}</td>
                      <td className="py-4 font-medium">{fmtRate(r.rate)}</td>
                      <td className="py-4 text-muted-foreground">{examplePayment(r.rate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              **Qualification note:** advertised rates assume standard residential properties, typical credit, and sufficient equity. Premiums may apply for rentals, extended amortizations, or alternative lending. 
            </p>
          </div>
        </div>
      </section>

      {/* CTA / hero */}
      <section className="relative overflow-hidden">
        <img src={homeImg} alt="GTA home" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container-page py-12 md:py-16 text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-serif">Want a guaranteed personalized rate?</h2>
          <p className="mt-3 max-w-xl mx-auto text-primary-foreground/80">
            Rates move quickly — lock a rate or get a tailored quote. We shop lenders so you don’t have to.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-gold-foreground">
            Get a personalized quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
