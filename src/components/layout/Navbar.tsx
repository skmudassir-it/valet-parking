"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faBars, faTimes, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav py-2" : "bg-transparent py-4"
      )}
    >
      {/* Notification bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-amber-500 text-white overflow-hidden animate-flash">
        <div className="flex animate-marquee whitespace-nowrap py-1.5 text-xs font-semibold tracking-wide">
          <span className="inline-block px-8">
            Five-Star Valet Service, Every Arrival — Call (555) 123-PARK for a Free Consultation
          </span>
          <span className="inline-block px-8">
            Five-Star Valet Service, Every Arrival — Call (555) 123-PARK for a Free Consultation
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:bg-primary/90 transition-colors">
              <FontAwesomeIcon icon={faCar} className="size-4" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-foreground">Prestige</span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-muted-foreground -mt-0.5">Valet & Parking</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-slate-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="tel:+15551237275" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
              <FontAwesomeIcon icon={faPhone} className="size-3 text-primary" />
              (555) 123-PARK
            </Link>
            <Link href="/contact" className="inline-flex">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faBars} className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pt-12">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      pathname === link.href
                        ? "text-primary bg-primary/8"
                        : "text-muted-foreground hover:text-foreground hover:bg-slate-100"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Get a Quote
                      <FontAwesomeIcon icon={faPhone} className="size-3 ml-2" />
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
