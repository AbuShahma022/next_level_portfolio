"use client";

import { motion } from "framer-motion";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionHeading from "@/components/shared/section-heading";

import { skillCategories } from "@/data/skillsList";

import { Card } from "@/components/ui/card";

import { scaleIn, staggerContainer } from "@/lib/motion";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          align="center"
          badge="My Skills"
          title="Technologies I Work With"
          description="A collection of technologies, frameworks, databases, AI tools, and development utilities I use to build modern web applications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={scaleIn}
            >
              <Card
                className="
                  flex
                  min-h-[400px]
                  flex-col
                  rounded-3xl
                  border
                  border-border/50
                  bg-card
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-xl
                "
              >
                {/* Header */}
                <div className="min-h-[80px]">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-8 flex-1">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {category.skills.map((skill) => {
                      const Icon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="
                            group
                            flex
                            h-36
                            flex-col
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-border/50
                            bg-muted/30
                            p-4
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            hover:border-primary
                            hover:bg-primary/5
                          "
                        >
                          <Icon className="mb-4 h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />

                          <span className="text-center text-sm font-semibold">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}