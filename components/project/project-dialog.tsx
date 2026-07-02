"use client";

import Image from "next/image";
import {
  ExternalLink,
  CheckCircle2,
  Wrench,
  Rocket,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: any;
}

export default function ProjectDialog({
  open,
  onOpenChange,
  project,
}: ProjectDialogProps) {
  if (!project) return null;

  const isComingSoon = project.status === "In Progress";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
  showCloseButton={false}
  className="
    w-[95vw]
    max-w-7xl
    h-[92vh]
    overflow-hidden
    rounded-3xl
    p-0
  "
>
        {/* Close Button */}
        <Button
          size="icon"
          variant="secondary"
          onClick={() => onOpenChange(false)}
          className="
            absolute
            right-6
            top-6
            z-50
            h-12
            w-12
            rounded-full
            border
            border-border/50
            bg-background/80
            backdrop-blur-md
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:bg-primary
            hover:text-primary-foreground
          "
        >
          <X className="size-5" />
        </Button>

        {/* Hero Image */}
        <div className="relative h-[45vh] w-full overflow-hidden border-b">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="95vw"
            priority
            className="object-cover object-top transition-transform duration-500 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

          <Badge className="absolute left-6 top-6">
            {project.status}
          </Badge>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(92vh-45vh)] overflow-y-auto px-8 py-8 md:px-10">
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {project.shortDescription}
          </p>

          {/* Technology */}
          <div className="mt-10">
            <h3 className="mb-4 text-xl font-semibold">
              Technology Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-full px-4 py-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          {!isComingSoon && (
            <div className="mt-10">
              <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Features
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                {project.features.map((feature: string) => (
                  <div
                    key={feature}
                    className="rounded-xl border p-4 transition hover:border-primary/40"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {!isComingSoon && (
            <div className="mt-10">
              <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold">
                <Wrench className="h-5 w-5 text-primary" />
                Challenges
              </h3>

              <div className="space-y-4">
                {project.challenges.map((challenge: string) => (
                  <div
                    key={challenge}
                    className="rounded-xl border p-4"
                  >
                    {challenge}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Future */}
          {!isComingSoon && (
            <div className="mt-10">
              <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold">
                <Rocket className="h-5 w-5 text-primary" />
                Future Improvements
              </h3>

              <div className="space-y-4">
                {project.improvements.map((item: string) => (
                  <div
                    key={item}
                    className="rounded-xl border p-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          {!isComingSoon && (
            <div className="mt-12 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>

              {project.live && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}