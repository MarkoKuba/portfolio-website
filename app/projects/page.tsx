"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Projects</h1>
            <p className="text-muted-foreground">
              A selection of my recent work
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/">Back Home</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button className="flex items-center gap-2" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}