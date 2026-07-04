import { Check } from "lucide-react";
import profilePhoto from "@/assets/Profile picture.png";
import SEO from "@/components/SEO";

const pillars: { lead: string; body: string }[] = [
  {
    lead: "Clarity first, always.",
    body: "Most homebuyers don't need more mortgage options — they need someone who can explain them clearly. I break down rates, terms, penalties, and lender rules in simple language so you understand your mortgage, your numbers, and your long term risks before you make a decision.",
  },
  {
    lead: "A mortgage strategy built around your life.",
    body: "Every client is different. Whether you're a first time homebuyer, refinancing, renewing, or self employed, I create a personalized mortgage plan based on your goals, income, and comfort level. No generic advice — just a strategy that fits your real situation.",
  },
  {
    lead: "Access to 50+ lenders with one application.",
    body: "Instead of visiting multiple banks, I bring the entire lending market to you — major banks, credit unions, monoline lenders, and alternative options. This gives you better rates, more flexibility, and a higher chance of approval without the stress of shopping around.",
  },
  {
    lead: "Fast, responsive communication.",
    body: "Mortgage timelines move quickly. I keep you updated at every step, answer your questions promptly, and make sure you always know what's happening next. No waiting days for a reply. No confusion. Just clear, consistent guidance.",
  },
  {
    lead: "Transparent advice with no surprises.",
    body: "I explain everything upfront — interest rates, penalties, prepayment options, lender conditions, and long term implications. My goal is to help you avoid costly mistakes and choose a mortgage that protects you today and in the future.",
  },
  {
    lead: "Support before, during, and after your mortgage closes.",
    body: "My service doesn't end at approval. I monitor your mortgage, check in at key milestones, and help you prepare for renewals, rate changes, and new opportunities. You get ongoing support, not a one time transaction.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Amit Bhola — GTA Mortgage Agent"
        description="Meet Amit Bhola, an FSRA-licensed mortgage agent serving the Greater Toronto Area with access to 50+ Canadian lenders through 8Twelve Mortgage Corp."
        canonical="/about"
      />

      {/* Intro */}
      <section className="container-page page-content">
        <p className="text-xs uppercase tracking-widest text-foreground font-medium">
          About
        </p>

        {/* Keep headline on a single line on medium+ screens; responsive sizing for small screens */}
       <h1 className="mt-3 md:max-w-none max-w-3xl text-3xl md:text-4xl lg:text-5xl font-serif text-balance md:whitespace-nowrap">
         Mortgages should feel like advice — not a sales pitch.
       </h1>
      </section>

      {/* Main content: image + checklist on left, copy on right */}
      <section className="container-page page-content">
        <div className="grid gap-10 md:grid-cols-5 items-start">
          {/* Left column: profile image + checklist */}
          <div className="md:col-span-2 flex flex-col items-start gap-6">
            <div className="w-full">
              <img
                src={profilePhoto}
                alt="Amit Bhola, FSRA Licensed Mortgage Agent"
                className="rounded-2xl w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Checklist: single column on very small, two columns on small+ screens */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "FSRA Licensed — Ontario",
                "Licence No. 22002220",
                "8Twelve Mortgage Corp. #13072",
                "Same-day pre-approvals",
                "Self-employed specialist",
                "Newcomer to Canada programs",
                "Investment property financing",
                "English · Hindi · Punjabi · Urdu",
              ].map((c) => (
                <div
                  key={c}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  {/* Premium green tick-in-box */}
                  <span
                    className="flex items-center justify-center h-5 w-5 rounded-sm bg-green-600 text-white ring-1 ring-green-700/20 shrink-0"
                    aria-hidden="true"
                  >
                    <Check className="h-3 w-3" />
                  </span>

                  <span className="leading-tight">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: pillars / copy */}
          <div className="md:col-span-3 space-y-6 leading-relaxed">
            {pillars.map((p) => (
              <div key={p.lead} className="text-muted-foreground">
                <div className="font-serif text-foreground text-lg mb-2">
                  {p.lead}
                </div>
                <p className="text-sm md:text-base">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work — tightened spacing and consistent look */}
      <section className="bg-secondary/60 page-content">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-serif">How we work</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              {
                n: "01",
                t: "Discovery call",
                b: "A 15-minute conversation to understand your goals, timeline, and finances.",
              },
              {
                n: "02",
                t: "Strategy",
                b: "We map the right product, structure, and lender — and outline a clear plan.",
              },
              {
                n: "03",
                t: "Application",
                b: "We package your file, negotiate rate, and handle underwriting end-to-end.",
              },
              {
                n: "04",
                t: "Closing & beyond",
                b: "We coordinate with your lawyer, then check in annually to keep you ahead.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-xl bg-card border border-border p-5"
              >
                <div className="font-serif text-gold text-2xl">{s.n}</div>
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
