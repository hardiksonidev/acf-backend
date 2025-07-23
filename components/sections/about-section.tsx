"use client"

import { motion } from "framer-motion"
import { Code, Cloud, Database, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Expert in .NET Core, Angular, and modern web technologies for enterprise solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Azure certified developer with experience in serverless computing and cloud migrations.",
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Proficient in SQL Server, Entity Framework, and designing scalable database architectures.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Leading development teams and mentoring junior developers in agile environments.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate Senior Software Technologist with 6+ years of experience building enterprise-grade
            applications across FinTech, Healthcare, and Construction domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 h-full hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Started my career as a Software Developer and evolved into a Senior Software Technologist, specializing
                in enterprise solutions across multiple domains including FinTech, Healthcare, and Construction.
              </p>
              <p>
                Currently working at Tata Capital Housing Finance Limited, where I develop vendor empanelment systems
                with JSON-driven form engines and integrate complex validation systems with real-time verification
                through SAP, Posidex, and CIBIL.
              </p>
              <p>
                I hold Azure certifications (AZ-204, AZ-900, AI-900) and have extensive experience with .NET Core,
                Angular, and cloud technologies. I'm passionate about creating scalable solutions that drive business
                value.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl glass-effect p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">Years Experience</div>
                <div className="text-2xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">Projects Delivered</div>
                <div className="text-2xl font-bold gradient-text mb-2">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Azure Certifications</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
