import Image from "next/image";
import {
 
  ExternalLink,
  ArrowRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
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
    <Card className="overflow-hidden rounded-3xl border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
      <CardContent className="p-0">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <div className="relative h-[320px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />

            <div className="absolute right-4 top-4">
              <Badge
                variant={isComingSoon ? "secondary" : "default"}
              >
                {project.status}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="text-3xl font-bold">
              {project.title}
            </h3>

            <p className="mt-5 leading-8 text-muted-foreground">
              {project.shortDescription}
            </p>

            {/* Tech */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {!isComingSoon && (
                <>
                  <Button asChild variant="outline">
                    <a
                      href={project.github}
                      target="_blank"
                    >
                      <FaGithub className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>

                  {project.live && (
                    <Button asChild variant="outline">
                      <a
                        href={project.live}
                        target="_blank"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </>
              )}

              <Button onClick={onOpen}>
                {isComingSoon
                  ? "View Preview"
                  : "View Details"}

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}