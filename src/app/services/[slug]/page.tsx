import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCheckCircle, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-6">
            <FontAwesomeIcon icon={faArrowLeft} className="size-3" />
            Back to All Services
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-xl bg-white/15 text-white">
              <FontAwesomeIcon icon={service.icon} className="size-6" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{service.title}</h1>
              <p className="text-white/70 mt-1">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold mb-4">About This Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{service.longDescription}</p>

              {/* Quick CTA */}
              <div className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Interested in {service.title}?</h3>
                  <p className="text-sm text-muted-foreground">Get a custom quote tailored to your venue's needs.</p>
                </div>
                <div className="flex gap-3">
                  <Link href="/contact" className="inline-flex">
                    <Button className="btn-gold">Request a Quote</Button>
                  </Link>
                  <a href="tel:+155****5678" className="inline-flex">
                    <Button variant="outline">
                      <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                      Call
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Features */}
              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-secondary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Services */}
              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-4">Other Services</h3>
                <ul className="space-y-2">
                  {services.filter((s) => s.slug !== slug).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        <FontAwesomeIcon icon={s.icon} className="size-3" />
                        <span>{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="flex justify-between mt-16 pt-8 border-t border-border">
            {prevService ? (
              <Link href={`/services/${prevService.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faArrowLeft} className="size-3" />
                {prevService.title}
              </Link>
            ) : <div />}
            {nextService ? (
              <Link href={`/services/${nextService.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                {nextService.title}
                <FontAwesomeIcon icon={faArrowRight} className="size-3" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  );
}
