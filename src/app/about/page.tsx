import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faShield, faStar, faUsers, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { team, siteName } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "ParkPro Valet delivers white-glove valet parking with 15+ years of hospitality expertise. Meet our team and learn our story.",
};

const values = [
  { icon: faShield, title: "Trust & Safety", desc: "Every attendant is background-checked, bonded, and insured. We treat every vehicle like it's our own." },
  { icon: faStar, title: "Hospitality First", desc: "Our roots are in luxury hospitality. We believe a great parking experience sets the tone for everything that follows." },
  { icon: faUsers, title: "People Powered", desc: "200+ trained professionals who take pride in their work. We invest in our team so they invest in your guests." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About {siteName}</h1>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We believe every arrival should be a moment — seamless, elegant, and effortless.
            </p>
          </div>

          {/* Story */}
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <div>
              <div className="w-full h-72 rounded-xl overflow-hidden bg-muted">
                <img src="/images/hero/hero-bg.jpg" alt="ParkPro Valet team" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {siteName} was founded by Marcus Chen, a 15-year veteran of luxury hospitality who saw a gap in the market: valet parking services that felt transactional instead of transformational. Having spent years as Director of Guest Services at The Ritz-Carlton, Marcus knew that the arrival experience sets the emotional tone for every visit — whether it's dinner at a restaurant, check-in at a hotel, or walking into a gala.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What started as a two-person operation serving one downtown restaurant has grown into a team of 200+ trained professionals serving 50+ venue partners across the metropolitan area. We've managed parking for 15,000-seat arenas, 350-room luxury hotels, and 1,200-guest fundraising galas — always with the same white-glove attention to detail.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, {siteName} is the region's most trusted valet and parking management company. We combine old-school hospitality values with modern technology — digital key tracking, real-time dashboards, and GPS-monitored shuttle fleets — to deliver experiences that guests remember and venues rely on.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Drives Us</h2>
            <div className="gradient-divider w-20 mx-auto mt-4 mb-4" />
          </div>
          <div className="grid gap-6 sm:grid-cols-3 mb-20">
            {values.map((v) => (
              <Card key={v.title} className="glass-card text-center p-8">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                  <FontAwesomeIcon icon={v.icon} className="size-6" />
                </div>
                <CardTitle className="text-lg mb-2">{v.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </Card>
            ))}
          </div>

          {/* Team */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Leadership Team</h2>
            <div className="gradient-divider w-20 mx-auto mt-4 mb-4" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="glass-card overflow-hidden text-center p-8">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-secondary/30">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription className="text-secondary font-medium text-sm mb-3">{member.role}</CardDescription>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-6">Ready to elevate your venue's arrival experience? We'd love to hear from you.</p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" className="btn-gold">Get in Touch <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button>
          </Link>
        </div>
      </section>
    </>
  );
}
