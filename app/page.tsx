import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsPreview } from "@/components/sections/projects-preview"
import { ContactCTA } from "@/components/sections/contact-cta"
import FreelancerPage from "./freelancer/page"

export default function HomePage() {
  return (
    <div className="relative">
      <FreelancerPage />
      {/* <HeroSection /> */}
      {/* <AboutSection />
      <SkillsSection />
      <ProjectsPreview />
      <ContactCTA /> */}
    </div>
  )
}
