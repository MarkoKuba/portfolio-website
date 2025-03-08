"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { skills } from "@/lib/data";
import { SkillCard } from "@/components/skill-card";
import { ContactDrawer } from "@/components/contact-drawer";
import DecryptedText from "@/components/decrypted-text";

export default function Home() {
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className={index === 2 ? "col-span-2 md:col-span-1" : ""}>
                <SkillCard key={skill.name} {...skill} />
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24">
          <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://github.com/IgnjatMarko" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://linkedin.com/in/m-ignjatovic/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="mailto:ignjatovicmarko2023@gmail.com">
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