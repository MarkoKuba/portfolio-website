import { Code, Library, Frame } from 'lucide-react';

export const skills = [
  {
    name: "Languages",
    description: ["HTML", "CSS, Sass, Tailwind CSS", "JavaScript, TypeScript", "SQL"],
    icon: Code,
  },
  {
    name: "Libraries",
    description: ["React", "Bootstrap, Material, shadcn", "Redux Toolkit, Zustand", "Tanstack Query"],
    icon: Library,
  },
  {
    name: "Frameworks",
    description: ["Next.js", "Remix / React-Router", "Express, Hono", "Node.js"],
    icon: Frame,
  },
];

export const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills, built with Next.js and Radix-UI.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix-UI"],
    github: "https://github.com/IgnjatMarko/portfolio-website",
    demo: "https://markonext.pages.dev"
  },
  {
    title: "E-commerce Retro Store",
    description: "A full-stack e-commerce platform with responosive design for a Retro Video rental shop.",
    technologies: ["React", "JavaScript", "SCSS", "MongoDB", "Express"],
    github: "https://github.com/IgnjatMarko/RetroVideo",
    demo: "https://github.com/IgnjatMarko/RetroVideo",
  },
  {
    title: "Online Bible Verse Reader",
    description: "A user-friendly online platform for reading and searching Bible verses, utilizing real-time data updates.",
    technologies: ["React", "JavaScript", "Tailwind CSS / DaisyUI" ,"Firebase"],
    github: "https://github.com/IgnjatMarko/",
    demo: "https://chanceverse.pages.dev"
  },
  {
    title: "Budget Calculator App",
    description: "A budget calculator application that saves your data in localStorage. Advanced JavaScript app using MVC architecture.",
    technologies: ["JavaScript", "Model View Controller", "localStorage"],
    github: "https://github.com/IgnjatMarko/BudgetCalculator",
    demo: "https://budgetcalcul8r.netlify.app/",
  }
];