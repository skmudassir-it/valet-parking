import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { siteName } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-3">
              <FontAwesomeIcon icon={faCar} className="text-secondary" />
              <span>{siteName}</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium valet parking and hospitality services for restaurants, hotels, events, weddings, and corporate venues.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-secondary transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-secondary transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/services/restaurant-valet" className="hover:text-secondary transition-colors">Restaurant Valet</Link></li>
              <li><Link href="/services/event-valet" className="hover:text-secondary transition-colors">Event Valet</Link></li>
              <li><Link href="/services/hotel-valet" className="hover:text-secondary transition-colors">Hotel Valet</Link></li>
              <li><Link href="/services/wedding-valet" className="hover:text-secondary transition-colors">Wedding Valet</Link></li>
              <li><Link href="/services/corporate-valet" className="hover:text-secondary transition-colors">Corporate Valet</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-3 text-secondary" />
                <span>(555) 234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-3 text-secondary" />
                <span>hello@parkprovalet.com</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="size-3 text-secondary mt-1" />
                <span>500 Commerce Drive<br />Metro City, MC 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
