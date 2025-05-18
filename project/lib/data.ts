import { Code, Library, Frame } from "lucide-react";

export const skills = [
  {
    name: "Languages",
    description: [
      "HTML",
      "CSS, Sass, Tailwind CSS",
      "JavaScript, TypeScript",
      "SQL, NoSQL",
    ],
    icon: Code,
  },
  {
    name: "Libraries",
    description: [
      "React",
      "Tanstack Query",
      "DaisyUI, Material, shadcn",
      "Redux Toolkit",
    ],
    icon: Library,
  },
  {
    name: "Frameworks",
    description: [
      "Next.js, Tanstack Start",
      "Remix / React-Router",
      "Express",
      "Node.js",
    ],
    icon: Frame,
  },
];

export const projects = [
  {
    title: "React Starter Repo",
    description:
      "A boilerplate for React projects with an interactive roadmap page, Appwrite backend, and typesafe TanStack Router.",
    technologies: ["React", "TypeScript", "Appwrite DB", "Tanstack Router"],
    github: "https://github.com/MarkoKuba/React-Starter-Repo",
    demo: "https://react-starter-repo.vercel.app/",
  },
  {
    title: "Online Bible Verse Reader",
    description:
      "A user-friendly online platform for reading and searching Bible verses, utilizing real-time data updates.",
    technologies: ["React", "JavaScript", "Tailwind CSS / DaisyUI", "Firebase"],
    github: "https://github.com/MarkoKuba/",
    demo: "https://sacretex.vercel.app/",
  },
  {
    title: "Flowing Ink - Make Your Mark",
    description: "Watermark and Signature Generator using Text-Stroke webkit.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "v0"],
    github: "https://github.com/MarkoKuba/",
    demo: "https://flowing-ink.vercel.app/",
  },
  {
    title: "E-commerce Retro Store",
    description:
      "A full-stack e-commerce platform with responosive design for a Retro Video rental shop.",
    technologies: ["React", "JavaScript", "SCSS", "MongoDB", "Express"],
    github: "https://github.com/MarkoKuba/RetroVideo",
    demo: "https://retrovideo.onrender.com/",
  },
  {
    title: "Budget Calculator App",
    description:
      "A budget calculator application that saves your data in localStorage. Advanced JavaScript app using MVC architecture.",
    technologies: ["JavaScript", "Model View Controller", "localStorage"],
    github: "https://github.com/MarkoKuba/BudgetCalculator",
    demo: "https://budgetcalcul8r.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills, built with Next.js and Radix-UI.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix-UI"],
    github: "https://github.com/MarkoKuba/portfolio-website/tree/main/project",
    demo: "https://markoreact.pages.dev",
  },
];
