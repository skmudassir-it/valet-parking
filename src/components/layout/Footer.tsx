import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faPhone, faEnvelope, faMapPin, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faLinkedin, faYelp } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Services: [
    { href: "/services/event-valet", label: "Event Valet" },
    { href: "/services/restaurant-valet", label: "Restaurant Valet" },
    { href: "/services/hotel-valet", label: "Hotel & Resort" },
    { href: "/services/wedding-valet", label: "Wedding Valet" },
    { href: "/services/corporate-valet", label: "Corporate Valet" },
    { href: "/services/parking-management", label: "Parking Management" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Our Projects" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white">
                <FontAwesomeIcon icon={faCar} className="size-4" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white">Prestige</span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-slate-400 -mt-0.5">Valet & Parking</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Five-star valet parking and parking management services. Creating seamless arrival experiences for events, restaurants, hotels, and corporations since 2008.
            </p>
            <div className="flex items-center gap-3">
              {[faInstagram, faFacebook, faLinkedin, faYelp].map((icon, i) => (
                <a key={i} href="#" className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-slate-400 hover:bg-primary hover:text-white transition-colors" aria-label={`Social media ${i + 1}`}>
                  <FontAwesomeIcon icon={icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <FontAwesomeIcon icon={faMapPin} className="size-3.5 mt-0.5 text-primary shrink-0" />
                <span>200 Park Avenue, Suite 400<br />Metropolis, NY 10017</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faPhone} className="size-3.5 text-primary shrink-0" />
                <a href="tel:+15551237275" className="hover:text-white transition-colors">(555) 123-PARK</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faEnvelope} className="size-3.5 text-primary shrink-0" />
                <a href="mailto:info@prestigevalet.com" className="hover:text-white transition-colors">info@prestigevalet.com</a>
              </li>
            </ul>
            <Link href="/contact" className="inline-flex mt-5">
              <Button variant="secondary" size="sm" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold">
                Get a Quote
                <FontAwesomeIcon icon={faArrowRight} className="size-3 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Prestige Valet & Parking Services. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
