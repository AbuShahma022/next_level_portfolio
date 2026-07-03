"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navLinks } from "../../lib/constants";

import Container from "../shared/container";
import { ModeToggle } from "@/components/mode-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const activeSection = useActiveSection([
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "services",
    "contact",
  ]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <Container>
        <nav className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            Shahma<span className="text-primary">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <ModeToggle />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <div className="mt-12 flex flex-col gap-4">
                  {navLinks.map((item) => (
                    <SheetClose key={item.name} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-lg px-2 py-2 text-lg font-medium transition-colors",
                          activeSection === item.href.replace("#", "")
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-muted hover:text-primary",
                        )}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}