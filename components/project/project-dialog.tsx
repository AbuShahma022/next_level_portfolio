
"use client";

import Image from "next/image";
import { ExternalLink, CheckCircle2, Wrench, Rocket, X } from "lucide-react";
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
  project: {
    id: number;
    title: string;
    image: string;
    status: string;
    shortDescription: string;
    technologies: string[];
    github: string;
    live: string;
    features?: string[];
    challenges?: string[];
    improvements?: string[];
  } | null;
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
          flex h-[95dvh] w-[calc(100%-1rem)] max-w-7xl
          flex-col gap-0 overflow-hidden rounded-2xl p-0
          sm:h-[92dvh] sm:w-[95vw] sm:rounded-3xl
        "
      >
        {/* Hero Image */}
        <div className="relative h-48 w-full shrink-0 overflow-hidden border-b sm:h-64 md:h-[35dvh]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1200px"
            priority
            className="object-cover object-top"
          />

          <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

          <Badge className="absolute left-4 top-4 sm:left-6 sm:top-6">
            {project.status}
          </Badge>

          {/* Close Button */}
          <Button
            type="button"
            size="icon"
            variant="secondary"
            aria-label="Close project details"
            onClick={() => onOpenChange(false)}
            className="
              absolute right-3 top-3 z-20 size-10 rounded-full
              border border-border/50 bg-background/90 shadow-lg
              backdrop-blur-md transition hover:bg-primary
              hover:text-primary-foreground sm:right-5 sm:top-5
              sm:size-11
            "
          >
            <X className="size-5" />
          </Button>
        </div>

        {/* Scrollable Content */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-8 sm:py-8 md:px-10">
          <DialogHeader className="text-left">
            <DialogTitle className="wrap-break-word text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          {/* Description */}
          <p className="mt-4 wrap-break-word text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8">
            {project.shortDescription}
          </p>

          {/* Technology Stack */}
          <section className="mt-7 sm:mt-10">
            <h3 className="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
              Technology Stack
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {(project.technologies ?? []).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="max-w-full wrap-break-word rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* Features */}
          {!isComingSoon && (project.features?.length ?? 0) > 0 && (
            <section className="mt-8 sm:mt-10">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold sm:mb-5 sm:text-xl">
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                Features
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {project.features!.map((feature) => (
                  <div
                    key={feature}
                    className="min-w-0 wrap-break-word rounded-xl border p-3 text-sm leading-6 transition hover:border-primary/40 sm:p-4 sm:text-base"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges */}
          {!isComingSoon && (project.challenges?.length ?? 0) > 0 && (
            <section className="mt-8 sm:mt-10">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold sm:mb-5 sm:text-xl">
                <Wrench className="size-5 shrink-0 text-primary" />
                Challenges
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {project.challenges!.map((challenge) => (
                  <div
                    key={challenge}
                    className="wrap-break-word rounded-xl border p-3 text-sm leading-6 sm:p-4 sm:text-base"
                  >
                    {challenge}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Future Improvements */}
          {!isComingSoon && (project.improvements?.length ?? 0) > 0 && (
            <section className="mt-8 sm:mt-10">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold sm:mb-5 sm:text-xl">
                <Rocket className="size-5 shrink-0 text-primary" />
                Future Improvements
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {project.improvements!.map((item) => (
                  <div
                    key={item}
                    className="wrap-break-word rounded-xl border p-3 text-sm leading-6 sm:p-4 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Action Buttons */}
          {!isComingSoon && (
            <div className="mt-8 flex flex-wrap gap-3 border-t pt-6 sm:mt-12 sm:pt-8">
              {project.github && (
                <Button asChild className="flex-1 sm:flex-none" size="lg">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2 size-5" />
                    GitHub
                  </a>
                </Button>
              )}

              {project.live && (
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 sm:flex-none"
                  size="lg"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 size-5" />
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
