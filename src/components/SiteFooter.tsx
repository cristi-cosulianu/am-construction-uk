import { Link } from "@tanstack/react-router";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center size-10 rounded-md bg-cream text-navy">
              <Building2 className="size-5" />
            </span>
            <span className="font-display text-2xl">AM Prime Construction</span>
          </div>
          <p className="mt-5 max-w-md text-cream/70 text-sm leading-relaxed">
            A results-driven construction company with deep experience in residential,
            commercial, and renovation projects across the United Kingdom.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold-soft">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold-soft">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 text-gold" /> London, United Kingdom</li>
            <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5 text-gold" /> +44 (0) 20 1234 5678</li>
            <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5 text-gold" /> hello@amconstruction.co.uk</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-page py-6 text-xs text-cream/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} AM Prime Construction Ltd. All rights reserved.</span>
          <span>Built with care.</span>
        </div>
      </div>
    </footer>
  );
}
