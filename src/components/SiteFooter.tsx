import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, BadgeCheck } from "lucide-react";

export function SiteFooter() {
  return (

    <footer className="mt-24 bg-gradient-to-br from-primary via-primary to-royal text-primary-foreground">

      <div className="container-page py-12 grid gap-10 md:grid-cols-4">

        <div className="md:col-span-2">
          <p className="text-sm text-primary-foreground/75 max-w-sm">
            Independent mortgage advisory serving the Greater Toronto Area. Access to 50+ lenders, one trusted advisor.
          </p>

          <div className="mt-6 space-y-1.5 text-sm">
            <p className="flex items-center gap-2 font-semibold text-gold">
              <BadgeCheck className="h-4 w-4" /> Amit Bhola
            </p>
            <p className="text-primary-foreground/80">Licence No. 22002220</p>
            <p className="text-primary-foreground/80">8Twelve Mortgage Corp.</p>
            <p className="text-primary-foreground/60 text-xs">
              Mortgage Brokerage Ontario #13072
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/calculators" className="hover:text-gold">Calculators</Link></li>
            <li><Link to="/apply" className="hover:text-gold">Apply Now</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2">
              <Phone className="h-5 w-5 mt-0.5 text-gold" />
              <a href="tel:+16479921909" className="hover:text-gold text-base font-semibold">647 992 1909</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-gold" />
              <a href="mailto:amit.bhola@8twelve.mortgage" className="hover:text-gold break-all">
                amit.bhola@8twelve.mortgage
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <span>
                55 Renfrew Dr, #201<br />Markham, ON L3R 8H3
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-6 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <span>* Rates and terms subject to change without notice. OAC. E.&amp;O.E.</span>
          <span className="flex gap-3 items-center">
            <span>© {new Date().getFullYear()} Amit Mortgages — Amit Bhola. All rights reserved.</span>
            <span>·</span>
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <span>·</span>
            <span>Rates and approvals subject to lender criteria.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
