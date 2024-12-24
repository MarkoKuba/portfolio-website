"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { skills } from "@/lib/data";
import { SkillCard } from "@/components/skill-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <section className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I&apos;m <span className="text-primary">Marko Ignjatovic</span>
            </h1>
            <h2 className="text-2xl text-muted-foreground">
              Frontend Developer
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            I aim to craft exceptional digital experiences with modern web technologies.
            Specializing in React, Next.js, and Node.js, I build scalable and
            performant applications that solve real-world problems.
          </p>

          <div className="flex gap-4">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </section>

        <section className="mt-24">
          <h3 className="text-2xl font-semibold mb-8">Featured Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24">
          <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="mailto:alex@example.com">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}