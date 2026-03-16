import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Education } from "@/components/portfolio/education"
import { Skills } from "@/components/portfolio/skills"
import { Activities } from "@/components/portfolio/activities"
import { Achievements } from "@/components/portfolio/achievements"
import { Goals } from "@/components/portfolio/goals"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { ScrollToTop } from "@/components/portfolio/scroll-to-top"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Activities />
      <Achievements />
      <Goals />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
