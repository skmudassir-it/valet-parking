import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Premium valet parking, event management, shuttle services, and more — tailored to restaurants, hotels, weddings, and corporate venues.",
};

export default function ServicesPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Services</h1>
          <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From a single restaurant valet stand to parking management for a 15,000-seat arena — we scale to meet your needs with precision and care.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group no-underline">
              <Card className="glass-card h-full overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 sm:shrink-0 h-40 sm:h-auto overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                        <FontAwesomeIcon icon={service.icon} className="size-5" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                        {service.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-start gap-1">
                            <span className="text-secondary mt-0.5">&#10003;</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6">Every venue is unique. Tell us about yours and we'll design a valet program that fits.</p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" className="btn-gold">Get a Custom Quote <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
