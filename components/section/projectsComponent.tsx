"use client";

import {useState} from "react";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionHeading from "@/components/shared/section-heading";

import ProjectCard from "@/components/project/ListProjecCard";
import ProjectDialog from "@/components/project/project-dialog";

import {projects} from "@/data/projects";
import {motion} from "framer-motion";
import {fadeUp, staggerContainer} from "@/lib/motion";

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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          className="mt-20 space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProjectCard
                project={project}
                reverse={index % 2 !== 0}
                onOpen={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>

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
