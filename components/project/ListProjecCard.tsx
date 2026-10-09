
"use client";

import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    image: string;
    status: string;
    shortDescription: string;
    technologies: string[];
    github: string;
    live: string;
  };
  reverse?: boolean;
  onOpen: () => void;
}

export default function ProjectCard({
  project,
  reverse = false,
  onOpen,
}: ProjectCardProps) {
  const isComingSoon = project.status === "In Progress";

  return (
    <Card className="w-full min-w-0 overflow-hidden rounded-2xl border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-xl sm:rounded-3xl">
      <CardContent className="p-0">
        <div
          className={`grid min-w-0 grid-cols-1 items-center gap-0 lg:grid-cols-2 lg:gap-8 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Project Image */}
          <div className="relative aspect-16/10 w-full min-w-0 overflow-hidden sm:aspect-video lg:aspect-auto lg:h-90">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
              <Badge
                variant={isComingSoon ? "secondary" : "default"}
              >
                {project.status}
              </Badge>
            </div>
          </div>

          {/* Project Content */}
          <div className="min-w-0 p-4 sm:p-6 lg:p-8">
            <h3 className="wrap-break-word text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
              {project.title}
            </h3>

            <p className="mt-3 wrap-break-word text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="max-w-full wrap-break-word text-xs sm:text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-3">
              {!isComingSoon && (
                <>
                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="sm:h-10 sm:px-4"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="mr-2 size-4" />
                        GitHub
                      </a>
                    </Button>
                  )}

                  {project.live && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="sm:h-10 sm:px-4"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 size-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </>
              )}

              <Button
                size="sm"
                onClick={onOpen}
                className="max-w-full sm:h-10 sm:px-4"
              >
                {isComingSoon ? "View Preview" : "View Details"}
                <ArrowRight className="ml-2 size-4 shrink-0" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
