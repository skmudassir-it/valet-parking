import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPhone, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pricingTiers, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for valet and parking services — event packages, nightly restaurant service, and commercial parking management plans.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/70 py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80 sm:text-xl">
              Whether you need a one-time event, nightly restaurant service, or
              full commercial parking management — we have a plan that fits.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Choose Your Plan
            </h2>
            <div className="gradient-divider mx-auto mt-4 w-20" />
            <p className="mt-4 text-lg text-muted-foreground">
              Every plan includes our signature Host Mindset service, fully
              insured attendants, and 24/7 support.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`glass-card overflow-hidden relative ${
                  tier.highlighted
                    ? "ring-2 ring-secondary scale-[1.02] lg:scale-105 z-10"
                    : ""
                }`}
              >
                {tier.highlighted && tier.badge && (
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 z-20">
                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-4 py-1 rounded-b-lg rounded-t-none">
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className={tier.highlighted ? "pt-12" : "pt-8"}>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-foreground">
                      {tier.price}
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="size-4 text-secondary mt-0.5 shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="inline-flex w-full mt-6">
                    <Button
                      size="lg"
                      className={`w-full font-semibold ${
                        tier.highlighted
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-primary hover:bg-primary/90"
                      }`}
                    >
                      <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="gradient-divider mx-auto mt-4 w-20" />
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about our valet and parking services.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group glass-card overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-semibold text-foreground select-none list-none">
                  <span className="text-left">{faq.q}</span>
                  <svg
                    className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-accent via-accent/90 to-primary/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              We&apos;re happy to provide a custom quote and walk you through every
              detail. No obligation, no pressure — just honest advice.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 text-base"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
