"use client";

import { useState } from "react";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionHeading from "@/components/shared/section-heading";

import ProjectCard from "@/components/project/ListProjecCard";
import ProjectDialog from "@/components/project/project-dialog";

import { projects } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          align="center"
          badge="Projects"
          title="Featured Projects"
          description="A selection of full-stack applications showcasing modern technologies, clean architecture, and real-world problem solving."
        />

        <div className="mt-20 space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <ProjectDialog
          open={selectedProject !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
          project={selectedProject}
        />
      </Container>
    </Section>
  );
}