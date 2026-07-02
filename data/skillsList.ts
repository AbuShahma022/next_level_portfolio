import {
  RiNextjsFill,
  RiReactjsLine,
  RiTailwindCssFill,
  RiBootstrapFill,
  RiJavascriptFill,
} from "react-icons/ri";

import {
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiLangchain,
} from "react-icons/si";

import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

export const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3 },
      { name: "JavaScript", icon: RiJavascriptFill },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: RiReactjsLine },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Bootstrap", icon: RiBootstrapFill },
    ],
  },

  {
    title: "Backend Development",
    description: "Creating scalable REST APIs and server-side applications.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },

  {
    title: "Database",
    description: "Designing and managing relational and NoSQL databases.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },

  {
    title: "AI & Integration",
    description: "Integrating AI features into modern web applications.",
    skills: [
      { name: "LangChain", icon: SiLangchain },
    ],
  },

  {
    title: "Tools",
    description: "Development, collaboration and deployment tools I use daily.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscCode },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];