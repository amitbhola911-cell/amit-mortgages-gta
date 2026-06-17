import { Link } from "react-router-dom";
import { useState } from "react";
import { ShieldCheck, Lock, Send } from "lucide-react";
import SEO from "@/components/SEO";

/**
 * 🔗 PASTE YOUR FORMSPREE ENDPOINT HERE
 * Example: "https://formspree.io/f/abcdwxyz"
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Apply() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
        title="Mortgage Application — Apply Online | Amit Mortgages"
        description="Start your mortgage application with Amit Mortgages. Quick, secure, and confidential. Get pre-approved in 24 hours across the GTA."
        canonical="/apply"
      />
      <section className="container-page pt-20 pb-10">
        <p className="text-xs uppercase tracking-widest text-gold font-medium">Mortgage Application</p>
        <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl font-serif text-balance">
          Apply in minutes. Approved in <span className="italic text-royal">24 hours.</span>
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Complete the secure form below. Your information goes directly to Amit — no call centres, no spam. We'll follow up the same business day.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-8 md:grid-cols-5">
          <form onSubmit={onSubmit} className="md:col-span-3 rounded-2xl border border-border bg-card p-8 space-y-5 shadow-[var(--shadow-royal)]">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="City" name="city" placeholder="Toronto, Mississauga…" required />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <SelectField label="Mortgage purpose" name="purpose" options={["Purchase", "Renewal", "Refinance", "Pre-Approval", "Investment / Rental", "Private / Second Mortgage"]} />
              <SelectField label="Employment" name="employment" options={["Salaried", "Self-Employed", "Commission", "Contract", "Retired", "Other"]} />
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

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-md bg-gradient-royal px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === "submitting" ? "Submitting…" : "Submit Application"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md p-3">
                ✅ Thank you! Your application was received. Amit will reach out within one business day.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-md p-3">
                Something went wrong. Please call <a href="tel:+14165550199" className="underline">(416) 555-0199</a> or try again.
              </p>
            )}
            {FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID") && (
              <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-md p-3">
                ⚠️ Set your Formspree endpoint in <code>src/pages/Apply.tsx</code> to enable submissions.
              </p>
            )}
          </form>

          <aside className="md:col-span-2 space-y-4">
            <div className="rounded-2xl bg-gradient-royal p-8 text-primary-foreground space-y-4">
              <h3 className="font-serif text-2xl">Why apply with us</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/90">
                <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-gold mt-0.5" /> 50+ lenders shopped on your behalf</li>
                <li className="flex items-start gap-2"><Lock className="h-4 w-4 text-gold mt-0.5" /> Bank-grade encrypted submission</li>
                <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-gold mt-0.5" /> No credit pull until you approve</li>
                <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-gold mt-0.5" /> FSRA Licensed Mortgage Agent</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-sm">
              <p className="font-medium">Prefer to chat first?</p>
              <p className="text-muted-foreground mt-1">
                Call <a href="tel:+14165550199" className="text-foreground underline">(416) 555-0199</a> or visit our <Link to="/contact" className="text-foreground underline">contact page</Link>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder, prefix }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; prefix?: string }) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label}{required && <span className="text-destructive ml-0.5">*</span>}
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
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
