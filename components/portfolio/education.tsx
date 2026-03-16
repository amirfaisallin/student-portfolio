"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award } from "lucide-react"

const educationData = [
  {
    id: 1,
    institution: "Lincoln High School",
    degree: "High School Diploma",
    major: "Science Stream",
    year: "2022 - Present",
    achievements: ["Honor Roll Student", "GPA: 3.8/4.0", "Science Club President"],
    current: true,
  },
  {
    id: 2,
    institution: "Oak Valley Middle School",
    degree: "Middle School Certificate",
    major: "General Studies",
    year: "2019 - 2022",
    achievements: ["Perfect Attendance Award", "Math Olympiad Participant"],
    current: false,
  },
  {
    id: 3,
    institution: "Riverside Elementary",
    degree: "Elementary Education",
    major: "Foundation Studies",
    year: "2013 - 2019",
    achievements: ["Class Representative", "Art Competition Winner"],
    current: false,
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            My academic journey and the milestones that shaped my learning experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className={`bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow ${
                    item.current ? "ring-2 ring-primary/20" : ""
                  }`}>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      {item.current && (
                        <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.institution}
                    </h3>
                    <p className="text-primary font-medium mb-1">{item.degree}</p>
                    <p className="text-sm text-muted-foreground mb-2">{item.major}</p>
                    <p className="text-sm text-muted-foreground mb-4">{item.year}</p>
                    
                    <div className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4 text-accent shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
