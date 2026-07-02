import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionHeading from "@/components/shared/section-heading";

import { services } from "@/data/services";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          align="center"
          badge="Services"
          title="How I Can Help You"
          description="I build modern, scalable, and user-focused web applications tailored to your business and product needs."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border-border/50 bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl"
              >
                {/* Background Glow */}
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-primary/5 blur-3xl transition-all duration-300 group-hover:bg-primary/10" />

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-8 text-2xl font-bold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-4 leading-7 text-muted-foreground">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}