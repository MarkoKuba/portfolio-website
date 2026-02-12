"use client";

import { Github, Coffee, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getIconForSkill } from "@/lib/data";
import { SkillCard } from "@/components/skill-card";
import { ContactDrawer } from "@/components/contact-drawer";
import DecryptedText from "@/components/decrypted-text";
import { useEffect, useState } from "react";

type Skill = {
  name: string;
  description: string[];
};

export default function Home() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const res = await fetch("/api/skills");
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to load skills");
        }
        const data: Skill[] = await res.json();
        setSkills(data);
      } catch (err) {
        console.error("Error loading skills:", err);
        setError(err instanceof Error ? err.message : "Could not load skills.");
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <section className="space-y-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            <DecryptedText
              text="Hi, I&apos;m Marko!"
              animateOn="view"
              revealDirection="center"
              useOriginalCharsOnly={true}
              className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground"
            />
          </h1>

          <p className="text-4xl md:text-5xl xl:text-6xl text-muted-foreground font-bold leading-tight md:leading-snug xl:leading-snug mb-4">
            {/* I deliver web projects worldwide. */}
            <DecryptedText
              text="I deliver web projects worldwide."
              animateOn="view"
              revealDirection="center"
              useOriginalCharsOnly={true}
              className="text-4xl md:text-5xl xl:text-6xl text-muted-foreground"
            />
          </p>


          <div className="flex gap-4">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <ContactDrawer />
            {/* <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button> */}
          </div>
        </section>

        <section className="mt-24">
          <h3 className="text-2xl font-semibold mb-8">Featured Skills</h3>
          {loading && (
            <p className="text-muted-foreground">Loading skills...</p>
          )}
          {error && (
            <p className="text-red-500">{error}</p>
          )}
          {!loading && !error && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = getIconForSkill(skill.name);
                return (
                  <div
                    key={skill.name}
                    className={index === 2 ? "col-span-2 md:col-span-1" : ""}
                  >
                    <SkillCard
                      name={skill.name}
                      description={skill.description}
                      icon={Icon}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section id="contact" className="mt-24">
          <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="mailto:marko@gro-build.com">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://github.com/MarkoKuba" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://ko-fi.com/markokuba" target="_blank" rel="noopener noreferrer">
                <Coffee className="w-4 h-4" />
                Ko-Fi
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}