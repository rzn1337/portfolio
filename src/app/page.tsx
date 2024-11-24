import { AboutMe } from "@/components/AboutMe"
import { Contact } from "@/components/Contact"
import { Hero } from "@/components/Hero"
import { Navigation } from "@/components/Navigation"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
// import { ThemeToggle } from "@/components/ThemeToggle"
// import { AboutMe } from "@/components/about-me"
// import { Projects } from "@/components/projects"
// import { Skills } from "@/components/skills"
// import { Contact } from "@/components/contact"
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 py-10">
        <Hero />
         <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
      {/* <ThemeToggle /> */}
    </div>
  )
}

