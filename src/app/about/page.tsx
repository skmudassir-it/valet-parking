import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faHeart,
  faGaugeHigh,
  faHandshake,
  faPhone,
  faCar,
  faCalendarCheck,
  faSmile,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { team, type TeamMember } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Prestige Valet & Parking Services — our story, mission, team, and the values that drive our five-star hospitality approach to parking.",
};

const stats = [
  { value: "15+", label: "Years Experience", icon: faCalendarCheck },
  { value: "500+", label: "Events Annually", icon: faCar },
  { value: "10K+", label: "Cars Monthly", icon: faSmile },
  { value: "98%", label: "Satisfaction Rate", icon: faAward },
];

const values = [
  {
    icon: faShield,
    title: "Safety First",
    description:
      "Every vehicle is treated with the utmost care. $5M liability coverage, rigorous driver vetting, and documented safety protocols protect what matters most.",
  },
  {
    icon: faHeart,
    title: "Hospitality Mindset",
    description:
      "We don't just park cars — we create welcoming experiences. Our signature Host Mindset training turns attendants into hospitality professionals.",
  },
  {
    icon: faGaugeHigh,
    title: "Operational Excellence",
    description:
      "From traffic flow to key management, every process is optimized. Real-time tracking, utilization reporting, and continuous improvement drive results.",
  },
  {
    icon: faHandshake,
    title: "True Partnership",
    description:
      "We invest in long-term relationships, not transactions. Understanding your unique needs and consistently exceeding expectations is our commitment.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/70 py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Prestige
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80 sm:text-xl">
              We believe that great parking is the first — and last — impression
              your guests will have. That&apos;s why we bring five-star hospitality
              standards to every vehicle, every event, every time.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <div className="gradient-divider w-16 mt-4 mb-6" />
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Prestige Valet &amp; Parking Services was founded with a simple
                idea: parking should never feel like an afterthought. Our
                founder, Michael Preston, spent two decades in luxury hospitality
                watching guests&apos; experiences begin and end in the parking lot —
                often the least memorable part of their visit.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                He saw an opportunity to transform parking from a logistical
                necessity into a genuine hospitality experience. Starting with a
                single restaurant client in 2009, Prestige has grown to serve
                over 500 events annually, manage 10,000+ parking spaces daily,
                and partner with hotels, venues, and corporations across the
                metropolitan area.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Today, our team of trained professionals brings the same
                white-glove standards to every job — whether it&apos;s a 2,000-guest
                gala, a nightly restaurant service, or a full commercial parking
                management contract. We&apos;ve parked over a million cars, and
                we&apos;re just getting started.
              </p>
            </div>
            <div className="glass-card overflow-hidden p-8 sm:p-10">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-8">
                To elevate every arrival and departure into a five-star
                experience — setting the standard for safety, hospitality,
                and operational excellence in valet and parking management.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                To be the most trusted name in valet and parking services —
                recognized not just for perfectly parked cars, but for the
                warmth, professionalism, and peace of mind we bring to every
                interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
            <div className="gradient-divider mx-auto mt-4 w-20" />
            <p className="mt-4 text-lg text-muted-foreground">
              These principles guide every decision we make and every guest we serve.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group glass-card p-6 text-center"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FontAwesomeIcon icon={value.icon} className="size-5" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Leadership
            </h2>
            <div className="gradient-divider mx-auto mt-4 w-20" />
            <p className="mt-4 text-lg text-muted-foreground">
              The people behind the five-star service.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="glass-card overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-secondary mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-accent via-accent/90 to-primary/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Ready to experience the Prestige difference? We&apos;d love to learn
              about your parking needs and show you what five-star service
              looks like.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 text-base"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
