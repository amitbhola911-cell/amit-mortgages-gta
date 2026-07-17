// src/pages/Contact.tsx
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaravzo";

export default function Contact() {
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
        title="Contact Amit Mortgages — GTA, Ontario"
        description="Contact Amit Mortgages for a FREE mortgage consultation. Call 6479921909 or fill out our form for a quick response"
        canonical="/contact"
      />
      <section className="container-page pt-8 pb-6">
        <p className="text-xs uppercase tracking-widest text-foreground font-medium">Contact</p>
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-serif text-balance">
          Let's find your rate.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Tell us a little about what you're looking for. Most messages get a personal reply within one business hour.
        </p>
      </section>

      <section className="container-page pb-16 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-soft">
          {status === "success" ? (
            <div className="py-12 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Send className="h-5 w-5 text-gold" />
              </div>
              <h2 className="mt-4 text-2xl font-serif">Message sent.</h2>
              <p className="mt-2 text-sm text-muted-foreground">Amit will reply shortly — usually within the hour.</p>
            </div>
          ) : (
            <form className="grid gap-5" onSubmit={onSubmit}>
              <input type="hidden" name="_subject" value="New Contact Form Message" />
              <input type="hidden" name="_replyto" value={email} />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Select label="I'm looking to" name="purpose" options={["Buy a home", "Renew my mortgage", "Refinance", "Investment property", "Just exploring"]} />
                <Select label="Timeline" name="timeline" options={["ASAP", "1–3 months", "3–6 months", "6+ months"]} />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Tell us more</label>
                <textarea name="message" rows={4} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Anything we should know? Price range, city, employment type…" />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send message"} <Send className="h-4 w-4" />
              </button>
              {status === "error" && (
                <p className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-md p-3">
                  Something went wrong. Please call <a href="tel:+16479921909" className="underline">647 992 1909</a> or try again.
                </p>
              )}
              <p className="text-xs text-muted-foreground">By submitting you agree we may contact you about your inquiry. We never share your information.</p>
            </form>
          )}
        </div>

        <aside className="md:col-span-2 space-y-6">
          <InfoCard icon={Phone} title="Call or text" body={<a href="tel:+16479921909" className="hover:text-gold">647 992 1909</a>} />
          <InfoCard icon={MessageCircle} title="WhatsApp" body={<a href="https://wa.me/16479921909" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Message on WhatsApp</a>} />
          <InfoCard icon={Mail} title="Email" body={<a href="mailto:amit.bhola@8twelve.mortgage" className="hover:text-gold">amit.bhola@8twelve.mortgage</a>} />
          <InfoCard icon={MapPin} title="Office" body={<>55 Renfrew Dr, #201<br />Markham, ON L3R 8H3</>} />
          <InfoCard icon={Clock} title="Hours" body={<>Mon–Fri · 9am – 8pm<br />Sat · 10am – 4pm<br />Sun · By appointment</>} />
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input name={name} type={type} required={required} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <select name={name} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function InfoCard({ icon: Icon, title, body }: { icon: typeof Mail; title: string; body: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gold/15 text-gold">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="font-serif text-lg">{title}</h3>
      </div>
      <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</div>
    </div>
  );
}
