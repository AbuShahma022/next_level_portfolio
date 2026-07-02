"use client";

import Link from "next/link";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import SectionHeading from "@/components/shared/section-heading";

import { contactInfo } from "@/data/contact";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.info("Contact form integration coming soon.");
  };

  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          align="center"
          badge="Contact"
          title="Let's Build Something Amazing Together"
          description="Have an idea, project, or opportunity? I'd love to hear from you. Feel free to reach out through any of the platforms below."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <CardContent className="flex items-center gap-5 p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.title}
                      </p>

                      <Link
                        href={item.href}
                        target="_blank"
                        className="font-medium hover:text-primary"
                      >
                        {item.value}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <Input placeholder="Your Name" />

                <Input
                  type="email"
                  placeholder="Email Address"
                />

                <Input placeholder="Subject" />

                <Textarea
                  rows={6}
                  placeholder="Write your message..."
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}