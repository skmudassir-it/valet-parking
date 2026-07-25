import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive valet and parking solutions — from event valet and restaurant service to hotel management, weddings, corporate campuses, and shuttle coordination.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/70 py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80 sm:text-xl">
              Comprehensive valet and parking solutions tailored to your needs.
              From intimate private parties to large-scale corporate events —
              we deliver five-star service every time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Offer
            </h2>
            <div className="gradient-divider mx-auto mt-4 w-20" />
            <p className="mt-4 text-lg text-muted-foreground">
              Every service is delivered with our signature Host Mindset —
              trained professionals who treat every guest like a VIP.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block group"
              >
                <Card className="glass-card overflow-hidden h-full">
                  <CardHeader>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <FontAwesomeIcon icon={service.icon} className="size-5" />
                    </div>
                    <CardTitle className="mt-4 text-lg">
                      {service.title}
                    </CardTitle>
                    <CardDescription>
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-secondary">
                      Learn More
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="size-3 transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
