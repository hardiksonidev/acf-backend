// import { HeroSection } from "@/components/sections/hero-section"
// import { AboutSection } from "@/components/sections/about-section"
// import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsPreview } from "@/components/sections/projects-preview"
// import { ContactCTA } from "@/components/sections/contact-cta"
import dynamic from 'next/dynamic';
import FreelancerPage from "./freelancer/page"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Hardik S. – ACF Expert & Microsoft Certified Full Stack Developer",
  description: "Helping agencies and businesses build scalable, custom WordPress and Next.js solutions using Advanced Custom Fields (ACF), React, and ASP.NET Core.",
  generator: "acf.hardiksoni.dev",
  keywords: [
    "acf", "acf pro", "acf expert", "advanced custom fields", "acf developer", "wordpress developer", "custom fields wordpress",
    "Hardik Soni", "Senior Software Engineer", "Freelancer", "Next.js", "React", "Angular", "ASP.NET Core", "Azure", "acf wordpress", "acf plugin wordpress", 
    "acf wordpress plugin", "acf in wordpress", "wordpress acf", "hire wordpress developer india","wordpress developer india", "hire wordpress developer usa",
    "hire acf developer india", "hire acf developer usa"
  ],
  authors: [{ name: "Hardik Soni" }],
  creator: "Hardik Soni",
  publisher: "Hardik Soni",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon-32x32", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://acf.hardiksoni.dev",
    title: "Hardik S. – ACF Expert & Full Stack Developer",
    description: "WordPress and ACF development specialist with expertise in custom fields, schemas, and scalable front-end/backend systems.",
    images: [
      {
        url: "https://acf.hardiksoni.dev/preview.png",
        width: 1200,
        height: 630,
        alt: "Hardik Soni – ACF Expert Portfolio"
      }
    ],
    siteName: "Hardik Soni Developer Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardik S. – ACF Expert & Microsoft Certified Full Stack Developer",
    description: "Custom ACF-based WordPress solutions, scalable backends, and modern front-end interfaces built with Next.js and .NET Core.",
    creator: "@hardiksonidev",
    images: ["https://acf.hardiksoni.dev/preview.png"]
  },
  metadataBase: new URL('https://acf.hardiksoni.dev')
}
// 👇 Dynamic import with type
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading component...</p>,
  ssr: false, // optional: disables server-side rendering for this component
});
const HomePage: React.FC = () => {
  return (
    <div className="relative">
      <FreelancerPage />
      {/* <HeroSection /> */}
      {/* <AboutSection />
      <SkillsSection />
      <ProjectsPreview />
      <ContactCTA /> */}
      <HeavyComponent />
    </div>
  )
}
export default HomePage;

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
