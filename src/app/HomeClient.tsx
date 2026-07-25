"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faQuoteLeft,
  faArrowRight,
  faPhone,
  faCheckCircle,
  faShield,
  faClock,
  faSmile,
  faCar,
  faUsers,
  faCalendarCheck,
  faHandshake,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  services,
  testimonials,
  type ServiceItem,
  type TestimonialItem,
} from "@/lib/data";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const stats = [
  { value: "15+", label: "Years Experience", icon: faClock },
  { value: "500+", label: "Events Annually", icon: faCalendarCheck },
  { value: "10K+", label: "Cars Parked Monthly", icon: faCar },
  { value: "98%", label: "Client Satisfaction", icon: faSmile },
];

const whyUs = [
  {
    icon: faShield,
    title: "Fully Insured",
    description: "$5M liability coverage on every event and venue.",
  },
  {
    icon: faUsers,
    title: "Trained Professionals",
    description: "Every attendant completes our signature Host Mindset program.",
  },
  {
    icon: faHandshake,
    title: "Trusted Partners",
    description: "Long-term relationships with hotels, venues, and restaurants.",
  },
  {
    icon: faLocationDot,
    title: "Local Expertise",
    description: "Deep knowledge of venues, traffic patterns, and logistics.",
  },
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

// ---------------------------------------------------------------------------
// TestimonialCarousel (inline client component)
// ---------------------------------------------------------------------------

function TestimonialCarousel({ items }: { items: TestimonialItem[] }) {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[autoplayPlugin.current]}
      className="mx-auto max-w-3xl"
    >
      <CarouselContent>
        {items.map((t, i) => (
          <CarouselItem key={i}>
            <div className="glass-card mx-auto max-w-2xl px-8 py-10 text-center">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="mx-auto mb-4 size-8 text-secondary/60"
              />
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <FontAwesomeIcon
                    key={s}
                    icon={faStar}
                    className={s < t.rating ? "size-4 text-secondary" : "size-4 text-muted/40"}
                  />
                ))}
              </div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">
                {t.role}, {t.company}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}

// ---------------------------------------------------------------------------
// HomeClient
// ---------------------------------------------------------------------------

export function HomeClient() {
  return (
    <>
      {/* ================================================================= */}
      {/* Hero                                                              */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/70 pt-20 pb-20 sm:pt-28 sm:pb-28">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <Badge className="mb-6 bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
              Premium Valet &amp; Parking Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Five-Star Service,{" "}
              <span className="text-secondary">Every Arrival</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              From gala events to fine dining, hotels to corporate campuses —
              we deliver valet and parking management that makes your guests
              feel like VIPs from the moment they arrive.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6 py-3 text-base"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm px-6 py-3 text-base"
                >
                  Explore Services
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Services                                                          */}
      {/* ================================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Services
            </h2>
            <div className="gradient-divider mx-auto mt-4 w-20" />
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive valet and parking solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Stats Bar                                                         */}
      {/* ================================================================= */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
              >
                <FontAwesomeIcon
                  icon={stat.icon}
                  className="mx-auto mb-3 size-8 text-secondary/80"
                />
                <div className="text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-white/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Why Choose Us                                                     */}
      {/* ================================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Prestige
            </h2>
            <div className="gradient-divider mx-auto mt-4 w-20" />
            <p className="mt-4 text-lg text-muted-foreground">
              We don&apos;t just park cars — we create experiences.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                className="group glass-card p-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FontAwesomeIcon icon={item.icon} className="size-5" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Testimonials                                                      */}
      {/* ================================================================= */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
            <div className="gradient-divider mx-auto mt-4 w-20" />
          </motion.div>

          <motion.div
            className="mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
          >
            <TestimonialCarousel items={testimonials} />
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CTA                                                               */}
      {/* ================================================================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-accent via-accent/90 to-primary/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Elevate Your Guest Experience?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Let&apos;s discuss your valet and parking needs. Whether it&apos;s
              a one-time event, nightly restaurant service, or full property
              management — we&apos;re ready to deliver.
            </p>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/90 text-sm">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-secondary" />
                Free site walkthrough
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-secondary" />
                Custom quote in 24hrs
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-secondary" />
                No-obligation consultation
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 text-base"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                  Request Your Quote
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm px-8 py-3 text-base"
                >
                  View All Services
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// ---------------------------------------------------------------------------
// ServiceCard helper
// ---------------------------------------------------------------------------

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      custom={index}
    >
      <Link href={`/services/${service.slug}`} className="block group">
        <Card className="glass-card overflow-hidden h-full">
          <CardHeader>
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <FontAwesomeIcon icon={service.icon} className="size-5" />
            </div>
            <CardTitle className="mt-4 text-lg">{service.title}</CardTitle>
            <CardDescription>{service.shortDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1.5 text-sm font-medium text-secondary">
              Learn more
              <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
