"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { projects } from "@/lib/data";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const categories = [
  "All",
  "Event Valet",
  "Hotel Valet",
  "Corporate Valet",
  "Wedding Valet",
  "Parking Management",
  "Restaurant Valet",
];

const filteredProjects = (category: string) =>
  category === "All"
    ? projects
    : projects.filter((p) => p.category === category);

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

// ---------------------------------------------------------------------------
// Category colors
// ---------------------------------------------------------------------------

const categoryVariant: Record<string, "default" | "secondary" | "outline"> = {
  "Event Valet": "default",
  "Hotel Valet": "secondary",
  "Corporate Valet": "default",
  "Wedding Valet": "secondary",
  "Parking Management": "default",
  "Restaurant Valet": "secondary",
};

// ---------------------------------------------------------------------------
// ProjectsClient
// ---------------------------------------------------------------------------

export function ProjectsClient() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/70 py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Projects
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80 sm:text-xl">
              A showcase of valet and parking management excellence — from
              intimate weddings to large-scale corporate events and ongoing
              commercial partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Projects with Tabs */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Work
            </h2>
            <div className="gradient-divider mx-auto mt-4 w-20" />
          </div>

          <div className="mt-10">
            <Tabs
              value={activeTab}
              onValueChange={(v) => setActiveTab(v as string)}
              className="w-full"
            >
              <div className="flex justify-center mb-10">
                <TabsList variant="default">
                  {categories.map((cat) => (
                    <TabsTrigger key={cat} value={cat}>
                      {cat}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((cat) => (
                <TabsContent key={cat} value={cat}>
                  <motion.div
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    key={cat}
                  >
                    {filteredProjects(cat).map((project, i) => (
                      <motion.div
                        key={project.title}
                        variants={fadeUp}
                        custom={i}
                      >
                        <Card className="glass-card overflow-hidden h-full">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                          <CardHeader>
                            <Badge
                              variant={
                                categoryVariant[project.category] || "default"
                              }
                              className="w-fit mb-2"
                            >
                              {project.category}
                            </Badge>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>
                              {project.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pb-4">
                            <div className="text-xs font-medium text-muted-foreground bg-muted/60 rounded-lg px-3 py-2 mb-3">
                              {project.stats}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <FontAwesomeIcon
                                icon={faMapPin}
                                className="size-3 text-secondary"
                              />
                              {project.location}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
