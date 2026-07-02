import {
  Bot,
  Code2,
  Database,
  LayoutDashboard,
  MonitorSmartphone,
  ServerCog,
} from "lucide-react";

export const services = [
  {
    title: "Full Stack Development",
    icon: Code2,
    description:
      "Build complete web applications from frontend to backend with scalable architecture and modern technologies.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
    ],
  },

  {
    title: "Frontend Development",
    icon: MonitorSmartphone,
    description:
      "Create fast, responsive and user-friendly interfaces with modern UI/UX and reusable components.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },

  {
    title: "Backend API Development",
    icon: ServerCog,
    description:
      "Develop secure REST APIs with authentication, authorization and efficient database integration.",
    technologies: [
      "Node.js",
      "Express.js",
      "JWT",
      "Prisma",
      "REST API",
    ],
  },

  {
    title: "Dashboard & Admin Panel",
    icon: LayoutDashboard,
    description:
      "Build powerful dashboards with analytics, reports, charts, CRUD operations and role-based access.",
    technologies: [
      "Recharts",
      "Redux Toolkit",
      "Analytics",
      "Admin Panel",
    ],
  },

  {
    title: "AI Integration",
    icon: Bot,
    description:
      "Integrate AI assistants and intelligent workflows into modern web applications using LLM technologies.",
    technologies: [
      "LangChain",
      "OpenAI",
      "LLM",
      "AI Assistant",
    ],
  },

  {
    title: "Database Design",
    icon: Database,
    description:
      "Design scalable MongoDB and PostgreSQL databases with optimized queries and efficient data models.",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
    ],
  },
];