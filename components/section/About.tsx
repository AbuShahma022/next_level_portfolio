import Container from "@/components/shared/container";
import SectionHeading from "@/components/shared/section-heading";
import { aboutFeatures } from "@/data/about";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Section from "../shared/section";
import MotionWrapper from "../shared/motion-wraper";
import { fadeLeft, fadeRight } from "@/lib/motion";

export default function About() {
  return (
    <Section id="about">
      
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <MotionWrapper variants={fadeLeft}>
          <div>
            <SectionHeading
              badge="About Me"
              title="Passionate About Building Modern Web Applications"
              description="I enjoy building modern, scalable, and user-friendly web applications using the latest technologies. My focus is on writing clean code, creating responsive interfaces, and continuously improving my development skills."
            />

            <div className="mt-8 space-y-5 text-muted-foreground leading-8">
              <p>
                My programming journey started with HTML, CSS, and JavaScript.
                As I explored web development further, I became passionate
                about creating complete full-stack applications using React,
                Next.js, Node.js, Express.js, Prisma, MongoDB, PostgreSQL and ai integration with langchain.
              </p>

              <p>
                I enjoy transforming ideas into real-world applications,
                learning modern technologies, and solving challenging problems
                through clean and maintainable code.
              </p>
            </div>
          </div>
          </MotionWrapper>
          {/* Right Side */}
          <MotionWrapper variants={fadeRight}>
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="mb-3 text-xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          </MotionWrapper>
        </div>
      </Container>
    </Section>
  );
}