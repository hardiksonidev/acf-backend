// import { HeroSection } from "@/components/sections/hero-section"
// import { AboutSection } from "@/components/sections/about-section"
// import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsPreview } from "@/components/sections/projects-preview"
// import { ContactCTA } from "@/components/sections/contact-cta"
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


// "use client"

// import { useState } from "react"
// import FreelancerPage from "./freelancer/page"
// import ContactPage from "./contact/page"
// export default function HomePage() {
//    const [activeSection, setActiveSection] = useState("home")
//   return (
//     <div className="relative">
//       {/* Navigation */}
//       <nav className="flex space-x-4 mb-8">
//         <button onClick={() => setActiveSection("home")}>Home</button>
//         <button onClick={() => setActiveSection("contact")}>Contact</button>
//         {/* Add more buttons for other sections */}
//       </nav>

//       {/* Section rendering */}
//       {activeSection === "home" && <FreelancerPage />}
//       {activeSection === "contact" && <ContactPage />}
//       {/* Add more sections as needed */}
//     </div>
//     // <div className="relative">
//     //   <FreelancerPage />
//     //   <section id="contact">
//     //   <ContactPage />
//     //   </section>
//     // </div>  
//   )
// }
