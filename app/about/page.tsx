"use client"

import { motion } from "framer-motion"
import { Code, Award, Users, Target, Heart, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Code,
    title: "Technical Excellence",
    description:
      "Committed to writing clean, maintainable code and staying updated with the latest technologies and best practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Believe in the power of teamwork and knowledge sharing to achieve exceptional results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always looking for creative solutions to complex problems and ways to improve existing processes.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focus on delivering high-quality solutions that provide real business value and user satisfaction.",
  },
]

const achievements = [
  "Successfully delivered 50+ enterprise projects across FinTech, Healthcare, and Construction domains",
  "Led development teams in implementing complex JSON-driven form engines and workflow systems",
  "Achieved Azure certifications (AZ-204, AZ-900, AI-900) demonstrating cloud expertise",
  "Integrated multiple third-party systems including SAP, Posidex, CIBIL for real-time validations",
  "Mentored junior developers and contributed to team knowledge sharing initiatives",
]

const interests = [
  "Cloud Architecture & Serverless Computing",
  "Machine Learning & AI Integration",
  "Open Source Contributions",
  "Technical Writing & Blogging",
  "Mentoring & Knowledge Sharing",
  "Emerging Web Technologies",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get to know more about my journey, values, and what drives me as a Senior Software Technologist.
            </p>
          </motion.div>

          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <Card className="glass-effect border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">My Story</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    My journey in software development began in 2018 when I graduated with a Master's in Computer
                    Engineering from Charusat University. What started as a curiosity about how software systems work
                    has evolved into a passionate career spanning over 6 years in enterprise software development.
                  </p>
                  <p>
                    Throughout my career, I've had the privilege of working across diverse domains - from FinTech
                    solutions at Tata Capital Housing Finance Limited to Healthcare systems at Civica, and Construction
                    domain applications at DEMETER. Each project has taught me something new and reinforced my belief in
                    the power of technology to solve real-world problems.
                  </p>
                  <p>
                    Currently, as a Senior Software Engineer at Tata Capital Housing Finance Limited, I'm working on
                    cutting-edge vendor empanelment systems with JSON-driven form engines, integrating complex
                    validation systems, and building scalable solutions that serve thousands of users daily.
                  </p>
                  <p>
                    What excites me most about software development is the constant evolution of technology and the
                    opportunity to create solutions that make a meaningful impact on businesses and end-users alike.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">My Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="glass-effect border-0 h-full hover:bg-white/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-blue-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{value.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <Card className="glass-effect border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="mr-3 h-6 w-6 text-blue-500" />
                  Key Achievements
                </h2>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <Card className="glass-effect border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Heart className="mr-3 h-6 w-6 text-blue-500" />
                  Interests & Passions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-400">{interest}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Card className="glass-effect border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  I'm always interested in discussing new opportunities, sharing knowledge, or collaborating on exciting
                  projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:hardik100nis@gmail.com"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="https://linkedin.com/in/hardik-soni-62b370140"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
