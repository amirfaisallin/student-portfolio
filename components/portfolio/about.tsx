"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Heart, Target, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: BookOpen,
    title: "Curious Learner",
    description: "Always eager to explore new subjects and expand my knowledge horizon.",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description: "Dedicated to making a positive impact through volunteering and leadership.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Setting ambitious goals and working persistently to achieve them.",
  },
  {
    icon: Sparkles,
    title: "Creative Thinker",
    description: "Finding innovative solutions and approaching challenges with fresh perspectives.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get to know who I am, what drives me, and what I aspire to become.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I am a dedicated student with a passion for learning and personal development. 
              My journey through education has taught me the value of perseverance, curiosity, 
              and the importance of building meaningful connections with others.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Outside of academics, I enjoy exploring technology, reading books on various 
              subjects, and participating in community service activities. I believe that 
              true growth comes from stepping outside our comfort zones and embracing 
              new challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              My interests span across science, arts, and humanities. I find joy in 
              connecting different fields of knowledge and discovering how they intersect 
              to create innovative solutions for real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
