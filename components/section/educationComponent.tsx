import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionHeading from "@/components/shared/section-heading";

import { education } from "@/data/education";

import { Card } from "@/components/ui/card";

export default function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionHeading
          align="center"
          badge="Education"
          title="My Academic Journey"
          description="My educational background and the foundation that shaped my learning journey."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Timeline */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-10">
            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative flex flex-col gap-6 md:flex-row md:gap-8"
                >
                  {/* Timeline Icon */}
                  <div className="hidden md:flex">
                    <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-background shadow-sm">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="flex md:hidden">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background shadow-sm">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Card */}
                  <Card className="flex-1 rounded-3xl border-border/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-bold">
                        {item.degree}
                      </h3>

                      <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                        {item.duration}
                      </span>
                    </div>

                    <h4 className="mt-3 text-lg font-semibold text-muted-foreground">
                      {item.institute}
                    </h4>

                    <p className="mt-5 leading-8 text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}