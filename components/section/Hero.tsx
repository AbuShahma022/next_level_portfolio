import Image from "next/image";
import Link from "next/link";
import {ArrowDownToLine} from "lucide-react";
import {FaGithub, FaLinkedinIn, FaFacebookF} from "react-icons/fa6";

import Container from "@/components/shared/container";
import {Button} from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="mb-4 text-primary font-semibold tracking-wide">
              Hello, I'm
            </p>

            <h1 className="font-heading text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Md Abu
              <span className="block text-primary">Shahma</span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-muted-foreground">
              Full Stack Developer
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-muted-foreground lg:mx-0">
              Passionate about building modern, scalable and responsive web
              applications using React, Next.js, Node.js, Express.js,MongoDB,
              Prisma and PostgreSQL.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="#">
                  <ArrowDownToLine className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-3 lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/AbuShahma022"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <FaGithub className="size-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/md-abu-shahma-536861225?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="size-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.facebook.com/share/1BKS74TtPK/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="size-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-full border-4 border-primary/20 bg-card p-2 shadow-2xl">
                <Image
                  src="/myphoto.png"
                  alt="Mijanur Rahman"
                  width={420}
                  height={420}
                  priority
                  className="aspect-square rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
