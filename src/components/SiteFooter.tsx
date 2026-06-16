import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gold text-gold-foreground font-serif text-lg">A</span>
            <span className="font-serif text-xl">Amit Mortgages</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-sm">
            Independent mortgage advisory serving the Greater Toronto Area. Access to 50+ lenders, one trusted advisor.
          </p>
          <p className="mt-6 text-xs text-primary-foreground/50">FSRA Licensed Mortgage Agent · Ontario</p>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/calculators" className="hover:text-gold">Calculators</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> (416) 555-0199</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /> hello@amitmortgages.ca</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> Mississauga, ON · Serving the GTA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-6 text-xs text-primary-foreground/50 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Amit Mortgages. All rights reserved.</span>
          <span>Rates and approvals subject to lender criteria.</span>
        </div>
      </div>
    </footer>
  );
}
