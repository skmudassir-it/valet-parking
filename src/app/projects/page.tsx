import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "See how ParkPro Valet has transformed parking experiences for hotels, restaurants, events, and corporate venues.",
};

export default function ProjectsPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Projects</h1>
          <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real results from real partnerships. Here are some of the venues and events we're proud to serve.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.slug} className="glass-card overflow-hidden">
              <div className="w-full h-56 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{project.category}</Badge>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-3">Key Results</h4>
                <ul className="space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <FontAwesomeIcon icon={faCheckCircle} className="size-3 text-secondary mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Want to Be Our Next Success Story?</h2>
          <p className="text-muted-foreground mb-6">Let's talk about how ParkPro can transform your venue's parking experience.</p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" className="btn-gold">Start Your Project <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
