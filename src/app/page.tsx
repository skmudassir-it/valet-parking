import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faPhone, faStar, faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services, testimonials, projects, siteName } from "@/lib/data";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,white_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 backdrop-blur text-sm px-4 py-1.5">
              <FontAwesomeIcon icon={faStar} className="size-3 mr-2" />
              Premium Valet &amp; Hospitality Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Arrive Like Royalty.<br />
              <span className="text-secondary">Every Time.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
              {siteName} delivers white-glove valet parking for restaurants, hotels, events, and corporate venues. Impeccable service, insured professionals, and seamless guest experiences.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="btn-gold text-base px-8 py-6">
                  Get a Free Quote
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-white/20 text-white hover:bg-white/10 hover:text-white">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Our Services</h2>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              From restaurant valet to large-scale event management, we deliver premium parking experiences tailored to your venue.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group no-underline">
                <Card className="glass-card h-full overflow-hidden">
                  <div className="w-full h-36 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                      <FontAwesomeIcon icon={service.icon} className="size-5" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex">
              <Button variant="outline" size="lg">View All Services <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "Events Annually" },
              { num: "200+", label: "Trained Attendants" },
              { num: "50+", label: "Venue Partners" },
              { num: "99.8%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold text-primary">{stat.num}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Featured Projects</h2>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              See how we've transformed parking experiences for our clients.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Link key={project.slug} href="/projects" className="group no-underline">
                <Card className="glass-card h-full overflow-hidden">
                  <div className="w-full h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-1">{project.category}</Badge>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex">
              <Button variant="outline" size="lg">View All Projects <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">What Our Clients Say</h2>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
              <FontAwesomeIcon icon={faPhone} className="size-7" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Ready to Elevate Your Arrival Experience?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's discuss your venue's needs — whether it's a one-time event or ongoing service. We'll create a custom valet solution that fits your budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="btn-gold px-8">Request a Quote</Button>
              </Link>
              <a href="tel:+15552345678" className="inline-flex">
                <Button size="lg" variant="outline">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                  (555) 234-5678
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
