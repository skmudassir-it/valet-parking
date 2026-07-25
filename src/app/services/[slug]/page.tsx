import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faArrowRight,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services, type ServiceItem } from "@/lib/data";

// ---------------------------------------------------------------------------
// generateStaticParams
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// ---------------------------------------------------------------------------
// generateMetadata (async, Promise params — Next.js 16.2)
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Prestige Valet & Parking Services`,
      description: service.shortDescription,
      type: "website",
    },
  };
}

// ---------------------------------------------------------------------------
// Page component (async, Promise params — Next.js 16.2)
// ---------------------------------------------------------------------------

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/70 py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
              <FontAwesomeIcon icon={service.icon} className="size-7" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              {service.shortDescription}
            </p>
            {service.highlight && (
              <Badge className="mt-5 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-1.5 text-sm font-medium">
                {service.highlight}
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Detail content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Image banner */}
              <div className="glass-card overflow-hidden mb-10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                About This Service
              </h2>
              <div className="gradient-divider w-16 mb-6" />

              <p className="text-base leading-relaxed text-muted-foreground mb-10">
                {service.description}
              </p>

              {/* Features list */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What&apos;s Included
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="size-5 text-secondary mt-0.5 shrink-0"
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="glass-card overflow-hidden p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Ready to get started?
                </h3>
                <p className="text-muted-foreground mb-5">
                  Let&apos;s discuss your {service.title.toLowerCase()} needs.
                  We&apos;ll provide a custom quote within 24 hours.
                </p>
                <Link href="/contact" className="inline-flex">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
                    <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="glass-card overflow-hidden p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Related Services
                </h3>
                <div className="gradient-divider w-12 mb-5" />
                <ul className="space-y-2">
                  {relatedServices.map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={`/services/${related.slug}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors group"
                      >
                        <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                          <FontAwesomeIcon icon={related.icon} className="size-3.5" />
                        </div>
                        <span className="flex-1">{related.title}</span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="size-3 text-muted-foreground/40 group-hover:text-secondary transition-colors"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
