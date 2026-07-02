import Link from "next/link";

import Container from "@/components/shared/container";

import { Button } from "@/components/ui/button";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col gap-10 py-12 lg:flex-row lg:justify-between">
          {/* Left */}
          <div className="max-w-md">
            <h3 className="text-2xl font-bold">
              Abu Shahma
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              Full Stack Developer passionate about building modern,
              scalable and AI-powered web applications using
              Next.js, Node.js and Prisma.
            </p>

            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <Link
                  href="https://github.com/AbuShahma022"
                  target="_blank"
                >
                  <FaGithub />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/md-abu-shahma-536861225?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <Link
                  href="https://www.facebook.com/share/1BKS74TtPK/"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
              </Button>
            </div>
          </div>

          {/* Center */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-lg font-semibold">
              Back to Top
            </h4>

            <Button asChild>
              <Link href="#home">
                Go to Top
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          © {year} Abu Shahma. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}