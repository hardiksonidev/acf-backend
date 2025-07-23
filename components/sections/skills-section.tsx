"use client"

import { motion } from "framer-motion"
import { Code2, Database, Cloud, GitBranch, Server, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: [
      { name: "C# / .NET Core", level: 95 },
      { name: "Angular / TypeScript", level: 92 },
      { name: "JavaScript / HTML / CSS", level: 88 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "ASP.NET Core Web API", level: 95 },
      { name: "Entity Framework", level: 90 },
      { name: "CQRS Pattern", level: 85 },
      { name: "RESTful Services", level: 92 },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 90 },
      { name: "Azure Cosmos DB", level: 80 },
      { name: "LINQ", level: 88 },
      { name: "Stored Procedures", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Microsoft Azure", level: 88 },
      { name: "Azure Functions", level: 85 },
      { name: "AWS Lambda", level: 80 },
      { name: "Azure DevOps", level: 82 },
    ],
  },
]

const tools = [
  { name: "Visual Studio", icon: Code2 },
  { name: "VS Code", icon: Code2 },
  { name: "Git", icon: GitBranch },
  { name: "Azure Portal", icon: Cloud },
  { name: "SQL Server Management Studio", icon: Database },
  { name: "Postman", icon: Globe },
]

const certifications = [
  "Azure Developer Associate (AZ-204)",
  "Azure Fundamentals (AZ-900)",
  "Azure AI Fundamentals (AI-900)",
]

export function SkillsSection() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to build enterprise-grade solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mr-3">
                        <Icon className="h-5 w-5 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Progress value={skill.level} className="h-2" />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Microsoft Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg glass-effect text-center hover:bg-white/20 transition-all duration-200"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-blue-500" />
                </div>
                <h4 className="font-semibold text-sm">{cert}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Development Tools</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center p-4 rounded-lg glass-effect hover:bg-white/20 transition-all duration-200"
                >
                  <Icon className="h-8 w-8 mb-2 text-blue-500" />
                  <span className="text-sm font-medium">{tool.name}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
