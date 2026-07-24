"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteName } from "@/lib/data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary no-underline">
              <FontAwesomeIcon icon={faCar} className="size-5 text-secondary" />
              <span>{siteName}</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="inline-flex ml-2">
                <Button className="btn-gold shadow-sm">Get a Quote</Button>
              </Link>
            </div>

            {/* Mobile nav */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="p-2">
                  <FontAwesomeIcon icon={faBars} className="size-5" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[260px] pt-12">
                  <div className="flex flex-col gap-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-lg font-medium px-3 py-2 rounded-md hover:bg-primary/5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link href="/contact" className="inline-flex mt-4" onClick={() => setOpen(false)}>
                      <Button className="btn-gold w-full">Get a Quote</Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
