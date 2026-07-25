import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore our portfolio of valet and parking management projects — from grand galas and weddings to hotel partnerships and commercial properties.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
