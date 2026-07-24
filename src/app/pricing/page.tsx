import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingTiers, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for valet parking services. Custom quotes for events, monthly retainers for venues, and annual contracts for enterprises.",
};

export default function PricingPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Transparent Pricing</h1>
          <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every venue is unique — choose the plan that fits your needs and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`glass-card relative ${tier.popular ? "ring-2 ring-secondary shadow-lg" : ""}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-secondary text-secondary-foreground font-semibold px-4">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-extrabold text-primary">{tier.price}</span>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <FontAwesomeIcon icon={faCheck} className="size-4 text-secondary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block">
                  <Button className={`w-full ${tier.popular ? "btn-gold" : ""}`} variant={tier.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-5 font-medium flex items-center justify-between text-foreground">
                  {faq.q}
                  <svg className="size-4 transition-transform group-open:rotate-180 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">We're happy to provide a custom quote based on your venue's specific needs.</p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" className="btn-gold">Contact Us <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
