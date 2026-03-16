"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Medal, Star, Trophy } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Regional Science Fair Winner",
    description: "First place in the regional science fair for innovative renewable energy project",
    year: "2024",
    type: "Competition",
  },
  {
    icon: Award,
    title: "Academic Excellence Certificate",
    description: "Recognized for maintaining outstanding academic performance throughout the year",
    year: "2023",
    type: "Certificate",
  },
  {
    icon: Medal,
    title: "Community Service Award",
    description: "Honored for completing over 100 hours of community volunteer work",
    year: "2023",
    type: "Award",
  },
  {
    icon: Star,
    title: "Math Olympiad Finalist",
    description: "Reached state-level finals in the National Math Olympiad competition",
    year: "2023",
    type: "Competition",
  },
  {
    icon: Award,
    title: "Best Public Speaker",
    description: "Won the annual inter-school debate championship as lead speaker",
    year: "2022",
    type: "Award",
  },
  {
    icon: Trophy,
    title: "Art Exhibition Feature",
    description: "Artwork selected for display at the city youth art exhibition",
    year: "2022",
    type: "Recognition",
  },
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Milestones and recognitions that mark my journey of growth and dedication.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md">
                    {achievement.type}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {achievement.year}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
