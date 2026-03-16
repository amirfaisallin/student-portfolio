"use client"

import { motion } from "framer-motion"
import { Heart, Linkedin, Github, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:alex.morgan@email.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.a
            href="#"
            className="text-2xl font-bold text-foreground mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Alex Morgan
          </motion.a>
          
          <p className="text-muted-foreground mb-6 max-w-md text-pretty">
            Student | Lifelong Learner | Aspiring Innovator
          </p>

          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="mt-2">
              &copy; {new Date().getFullYear()} All rights reserved by @Amir Faisal Linkon
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
