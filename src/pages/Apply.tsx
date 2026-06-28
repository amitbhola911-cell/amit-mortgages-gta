// src/pages/Apply.tsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { ShieldCheck, Lock, Send, Phone } from "lucide-react";
import SEO from "@/components/SEO";

/**
 * 🔗 PASTE YOUR FORMSPREE ENDPOINT HERE
 * Example: "https://formspree.io/f/abcdwxyz"
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaravzo";

export default function Apply() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <SEO
        title="Apply in Minutes — Amit Mortgages"
        description="Fast online mortgage application — apply in minutes and get approved in 24 hours for many cases. Secure, simple, and lender-ready."
        canonical="/apply"
      />

      {/* Intro — tightened top spacing and consistent rhythm */}
      <section className="container-page page-content pt-8 pb-6">
        <p className="text-xs uppercase tracking-widest text-foreground font-medium">
          Mortgage Inquiry Form
        </p>

        {/* Two stacked hero lines with tight leading */}
        <div className="mt-3 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Apply in minutes.
          </h1>
          <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-serif text-muted-foreground leading-tight">
            Approved in <span className="italic text-royal">24 hours.</span>
          </h2>
        </div>
      </section>

      {/* Main grid: left = supporting content, right = full application form */}
      <section className="container-page page-content pb-16">
        <div className="grid gap-8 md:grid-cols-12 items-start">
          {/* Left column: supporting content stacked under intro */}
          <aside className="md:col-span-5 flex flex-col gap-6">
            {/* Apply summary card */}
            <div className="rounded-2xl bg-card border border-border p-6">
              <h2 className="font-serif text-2xl">We will contact you</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Complete the secure form here with basic details. Your information goes directly to Amit — no call centres, no spam. We'll follow up the same business day and give you proper advice — free of charge.
              </p>
            </div>

            {/* Why apply with us */}
            <div className="rounded-2xl bg-gradient-royal p-6 text-primary-foreground">
              <h3 className="font-serif text-xl">Why apply with us</h3>
              <ul className="mt-3 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                  Bank-grade encryption and secure handling
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                  No credit pull until you approve the lender
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                  Access to 50+ lenders with one application
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                  Personalized lender matching
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                  Secure, confidential process
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                  Fast same-day follow up
                </li>
              </ul>
            </div>

            {/* Prefer to chat first */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-medium">Prefer to chat first?</p>
              <p className="text-muted-foreground mt-2 text-sm">
                Call us at{" "}
                <a href="tel:+16479921909" className="text-foreground underline inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> 647 992 1909
                </a>
                <br />
                Or visit our <Link to="/contact" className="underline">contact page</Link>.
              </p>
            </div>

            {/* Security note */}
            <div className="text-xs text-muted-foreground">
              <strong className="text-foreground">Security</strong>: Your data is transmitted securely and used only to process your application. We never sell your information.
            </div>
          </aside>

          {/* Right column: full application form */}
          <main className="md:col-span-7 md:mt-0">
            <form
              onSubmit={onSubmit}
              className="w-full rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5"
              aria-label="Mortgage inquiry form"
            >
              <input type="hidden" name="_subject" value="New Mortgage Inquiry" />
              <input type="hidden" name="_replyto" value={email} />

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                    Email<span className="text-destructive ml-0.5">*</span>
                  </label>
                  <div className="flex items-center rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-gold">
                    <input
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent px-3 py-2 text-sm outline-none"
                      aria-required
                    />
                  </div>
                </div>
                <Field label="City" name="city" placeholder="Toronto, Mississauga…" required />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <SelectField
                  label="Mortgage purpose"
                  name="purpose"
                  options={[
                    "Purchase",
                    "Renewal",
                    "Refinance",
                    "Pre-Approval",
                    "Investment / Rental",
                    "Private / Second Mortgage",
                  ]}
                />
                <SelectField
                  label="Employment"
                  name="employment"
                  options={["Salaried", "Self-Employed", "Commission", "Contract", "Retired", "Other"]}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Estimated property value (CAD)" name="property_value" type="number" prefix="$" />
                <Field label="Down payment / equity (CAD)" name="down_payment" type="number" prefix="$" />
              </div>

              <Field label="Annual household income (CAD)" name="income" type="number" prefix="$" />

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Anything else we should know?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Closing dates, credit concerns, lender preferences…"
                />
              </div>

              <label className="flex items-start gap-3 text-xs text-muted-foreground">
                <input type="checkbox" name="consent" required className="mt-0.5" />
                <span>I consent to Amit Mortgages contacting me about my application. My information is kept confidential and never sold.</span>
              </label>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-royal px-5 py-2.5 text-sm md:text-base font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.05] disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {status === "submitting" ? "Submitting…" : "Submit Inquiry"}
                </button>

                <span className="text-xs text-muted-foreground">
                  {status === "success" && (
                    <span className="text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-1">
                      ✅ Inquiry received — we’ll follow up within one business day.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-destructive bg-destructive/10 border border-destructive/30 rounded-md px-3 py-1">
                      Something went wrong. Please call <a href="tel:+16479921909" className="underline">647 992 1909</a>.
                    </span>
                  )}
                </span>
              </div>

              {FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID") && (
                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-md p-3">
                  ⚠️ Set your Formspree endpoint in <code>src/pages/Apply.tsx</code> to enable submissions.
                </p>
              )}
            </form>
          </main>
        </div>
      </section>
    </>
  );
}

/* ---------- Helper form components ---------- */

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  prefix,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  prefix?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      <div className="flex items-center rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-gold">
        {prefix && <span className="px-3 text-muted-foreground text-sm">{prefix}</span>}
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-2 text-sm outline-none"
        />
      </div>
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <select
        name={name}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        defaultValue=""
        required
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
