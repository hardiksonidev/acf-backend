// "use client"

// import { motion } from "framer-motion"
// import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { TypewriterText } from "@/components/typewriter-text"

// export function HeroSection() {
//   const scrollToNext = () => {
//     const nextSection = document.getElementById("about")
//     nextSection?.scrollIntoView({ behavior: "smooth" })
//   }

//   const downloadResume = () => {
//     // Create a downloadable PDF resume
//     const resumeContent = `
//       HARDIK SONI - SENIOR SOFTWARE TECHNOLOGIST
      
//       Contact Information:
//       Email: hardik100nis@gmail.com
//       Phone: +91 8238321218
//       Location: Vadodara, India
//       LinkedIn: https://linkedin.com/in/hardik-soni-62b370140
//       GitHub: https://github.com/hardik-soni
      
//       PROFESSIONAL SUMMARY
//       Senior Software Technologist with 6+ years of experience in developing scalable enterprise solutions across FinTech, Healthcare, and Construction domains using .NET, Angular, and Azure cloud technologies.
      
//       WORK EXPERIENCE
      
//       Senior Software Engineer | Tata Capital Housing Finance Limited (2024 - Present)
//       • Developed vendor empanelment system with JSON-driven form engine
//       • Integrated PAN, MSME, and GST validations with real-time verification
//       • Worked with SAP, Posidex, Leegality, and CIBIL integrations
      
//       Senior Software Engineer | PAGE Industries Limited (2023 - 2024)
//       • Managed end-to-end automation with JSON-driven forms
//       • Streamlined accounts payable processes and enhanced tax compliance
      
//       Software Engineer | DEMETER Construction (2022 - 2023)
//       • Implemented Graph Query/Mutation methods for ASP.NET Core Web API
//       • Created MVC controllers and integrated Angular services
      
//       TECHNICAL SKILLS
//       Languages & Frameworks: C#, .NET Core, Angular, TypeScript, JavaScript, HTML, CSS, Node.js
//       Backend: ASP.NET Core Web API, Entity Framework, CQRS Pattern, RESTful Services
//       Database: SQL Server, Azure Cosmos DB, LINQ, Stored Procedures
//       Cloud & DevOps: Microsoft Azure, Azure Functions, AWS Lambda, Azure DevOps
      
//       CERTIFICATIONS
//       • Azure Developer Associate (AZ-204) - September 2024
//       • Azure AI Fundamentals (AI-900) - June 2024
//       • Azure Fundamentals (AZ-900) - June 2020
      
//       EDUCATION
//       Master of Technology (Computer Engineering) - Charusat University (2018)
//       Bachelor of Engineering (Information Technology) - K.J. Institute (2016)
//     `

//     // Create and download the resume as a text file (in real app, this would be a PDF)
//     const blob = new Blob([resumeContent], { type: "text/plain" })
//     const url = window.URL.createObjectURL(blob)
//     const link = document.createElement("a")
//     link.href = url
//     link.download = "Hardik_Soni_Resume.txt"
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//     window.URL.revokeObjectURL(url)
//   }

//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
//             Hi, I'm <span className="gradient-text">Hardik Soni</span>
//           </h1>

//           <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12">
//             <TypewriterText
//               texts={[
//                 "Senior Software Technologist",
//                 ".NET & Angular Expert",
//                 "Cloud Solutions Architect",
//                 "FinTech Specialist",
//               ]}
//             />
//           </div>

//           <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
//             Senior Software Engineer with 6+ years of experience in developing scalable enterprise solutions across
//             FinTech, Healthcare, and Construction domains using .NET, Angular, and Azure cloud technologies.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
//             <Button size="lg" className="group" onClick={scrollToNext}>
//               View My Work
//               <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
//             </Button>

//             <Button variant="outline" size="lg" onClick={downloadResume}>
//               <Download className="mr-2 h-4 w-4" />
//               Download Resume
//             </Button>
//           </div>

//           <div className="flex items-center justify-center space-x-6">
//             {[
//               { icon: Github, href: "https://github.com/hardik-soni", label: "GitHub" },
//               { icon: Linkedin, href: "https://linkedin.com/in/hardik-soni-62b370140", label: "LinkedIn" },
//               { icon: Mail, href: "mailto:hardik100nis@gmail.com", label: "Email" },
//             ].map(({ icon: Icon, href, label }) => (
//               <motion.a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-3 rounded-full glass-effect hover:bg-white/20 transition-all duration-200"
//                 aria-label={label}
//               >
//                 <Icon size={24} />
//               </motion.a>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       <motion.button
//         onClick={scrollToNext}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//       >
//         <ArrowDown className="h-6 w-6 text-gray-400" />
//       </motion.button>
//     </section>
//   )
// }
