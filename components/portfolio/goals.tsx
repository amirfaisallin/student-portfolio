"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, GraduationCap, Code, Globe } from "lucide-react"

const goals = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    items: [
      "Graduate with honors from high school",
      "Pursue a degree in Computer Science or Engineering",
      "Earn academic scholarships for higher education",
      "Participate in research programs during college",
    ],
  },
  {
    icon: Code,
    title: "Skills to Learn",
    items: [
      "Master programming languages like Python and JavaScript",
      "Learn web development and mobile app creation",
      "Develop expertise in data science and AI",
      "Improve foreign language proficiency",
    ],
  },
  {
    icon: Rocket,
    title: "Career Dreams",
    items: [
      "Work at a leading technology company",
      "Contribute to projects that make a positive impact",
      "Start my own venture or nonprofit organization",
      "Mentor and support future students",
    ],
  },
  {
    icon: Globe,
    title: "Personal Growth",
    items: [
      "Travel and experience different cultures",
      "Build a strong professional network",
      "Maintain work-life balance and well-being",
      "Continue lifelong learning journey",
    ],
  },
]

export function Goals() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="goals" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Goals & Future Plans
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            My aspirations and the path I am working towards for a fulfilling future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <goal.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{goal.title}</h3>
              </div>
              <ul className="space-y-3">
                {goal.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
