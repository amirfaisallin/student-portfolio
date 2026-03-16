"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  MessageCircle, 
  Lightbulb, 
  Users, 
  Palette, 
  Monitor, 
  Presentation,
  FileText,
  Layout
} from "lucide-react"

const skills = [
  {
    icon: MessageCircle,
    name: "Communication",
    description: "Clear and effective verbal and written communication skills",
    level: 85,
  },
  {
    icon: Lightbulb,
    name: "Problem Solving",
    description: "Analytical thinking and creative solution finding",
    level: 80,
  },
  {
    icon: Users,
    name: "Teamwork",
    description: "Collaborative mindset and leadership abilities",
    level: 90,
  },
  {
    icon: Palette,
    name: "Creativity",
    description: "Innovative thinking and artistic expression",
    level: 75,
  },
  {
    icon: Monitor,
    name: "Computer Skills",
    description: "Proficient in basic computer operations and internet research",
    level: 85,
  },
  {
    icon: Presentation,
    name: "PowerPoint",
    description: "Creating engaging presentations and visual content",
    level: 90,
  },
  {
    icon: FileText,
    name: "Microsoft Word",
    description: "Document creation, formatting, and editing",
    level: 88,
  },
  {
    icon: Layout,
    name: "Canva",
    description: "Designing graphics, posters, and social media content",
    level: 82,
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Abilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            The skills I have developed through my academic journey and personal growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
              
              {/* Skill Level Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
