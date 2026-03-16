"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Users2, 
  Heart, 
  Trophy, 
  Music, 
  Camera,
  BookMarked
} from "lucide-react"

const activities = [
  {
    icon: Users2,
    category: "Clubs",
    title: "Science Club",
    description: "Active member and current president, organizing science fairs and experiments",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Heart,
    category: "Volunteering",
    title: "Community Service",
    description: "Regular volunteer at local food bank and elderly care center",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Trophy,
    category: "Sports",
    title: "Basketball Team",
    description: "Junior varsity player developing teamwork and discipline",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Music,
    category: "Hobbies",
    title: "Music & Guitar",
    description: "Self-taught guitarist who enjoys playing acoustic melodies",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Camera,
    category: "Creative",
    title: "Photography Club",
    description: "Capturing moments and learning visual storytelling techniques",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: BookMarked,
    category: "Academic",
    title: "Debate Society",
    description: "Enhancing public speaking and critical thinking abilities",
    color: "bg-cyan-500/10 text-cyan-600",
  },
]

export function Activities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="activities" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Activities & Interests
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Beyond academics, here are the activities and hobbies that enrich my life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${activity.color}`}>
                  <activity.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {activity.category}
                  </span>
                  <h3 className="font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
