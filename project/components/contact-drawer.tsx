"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Github, Coffee, Mail } from 'lucide-react'
// import { Linkedin } from 'lucide-react'

export function ContactDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Contact Me</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Get in Touch</DrawerTitle>
            <DrawerDescription>Connect with me on various platforms</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="flex items-center justify-start gap-2" asChild>
                <a href="mailto:ignjatovicmarko2023@gmail.com">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
              <Button variant="outline" className="flex items-center justify-start gap-2" asChild>
                <a href="https://github.com/IgnjatMarko" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="flex items-center justify-start gap-2" asChild>
                <a href="https://ko-fi.com/markokuba" target="_blank" rel="noopener noreferrer">
                  <Coffee className="w-4 h-4" />
                  Ko-Fi
                </a>
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

