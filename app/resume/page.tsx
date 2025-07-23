"use client"

import { motion } from "framer-motion"
import { Download, MapPin, Mail, Phone, Linkedin, Calendar, Building, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const workExperience = [
  {
    period: "2024 - Present",
    company: "Tata Capital Housing Finance Limited (TCL—TCHLF - FinTech)",
    position: "Senior Software Engineer",
    employer: "Cygnet One",
    achievements: [
      "Developed a vendor empanelment system with a JSON-driven form engine for validation and multi-level workflows, creating Angular components, directives, pipes to handle complex logic and dynamic HTML from JSON controls.",
      "Integrated PAN, MSME, and GST validations with real-time vendor verification through SAP, Posidex, Leegality, and CIBIL, supporting loan processing for TCL and TCHFL product verticals.",
    ],
  },
  {
    period: "2023 - 2024",
    company: "PAGE Industries Limited (FinTech)",
    position: "Senior Software Engineer",
    employer: "Cygnet One",
    achievements: [
      "Managed end-to-end automation with a JSON-driven form for vendor journeys and dynamic workflows, streamlining accounts payable processes, enhancing tax compliance, and improving data accuracy while reducing costs.",
    ],
  },
  {
    period: "2022 - 2023",
    company: "DEMETER (Construction Domain)",
    position: "Software Engineer",
    employer: "Cygnet One",
    achievements: [
      "Implemented Graph Query/Mutation methods for ASP.NET Core Web API retrieval, data saving.",
      "Created MVC controllers, integrated Angular services for dynamic data display and advanced search filters with stored procedures for Power BI reporting.",
    ],
  },
  {
    period: "2021 - 2022",
    company: "CITO (Healthcare Domain)",
    position: "Software Engineer",
    employer: "Civica",
    achievements: [
      "Developed CQRS pattern for CRUD operations using ASP.NET Core, verified API results with Swagger.",
      "Integrated Knockout.js for frontend data binding and MVC controllers for data handling.",
    ],
  },
  {
    period: "2020 - 2021",
    company: "VNEXT Prescribing (Healthcare Domain)",
    position: "Software Engineer",
    employer: "Civica",
    achievements: [
      "Developed ASP.NET Core Web API for electronic prescribing and medicine administration, verified with Swagger.",
      "Created ASP.NET MVC web controllers integrated with link classes for seamless data interaction.",
    ],
  },
  {
    period: "2019 - 2020",
    company: "Universal Pensions Management (UPM)",
    position: "Software Engineer",
    employer: "Civica",
    achievements: [
      "Created MVC controllers, views for pension administration, automating processes for compliance risk reduction.",
    ],
  },
  {
    period: "2018 - 2019",
    company: "EY Zurich Audit Trail (Insurance Security and Risk Management)",
    position: "Software Engineer",
    employer: "Svaapta IT-ally",
    achievements: [
      "Developed a web application for operational risk management using C# .NET MVC (5.0), MS-SQL Server, JavaScript, jQuery, HTML, CSS, and Bootstrap, while performing bug fixes and new feature development.",
      "Created stored procedures with a database-first approach and integrated HighCharts for data visualization.",
    ],
  },
  {
    period: "2018 - 2019",
    company: "EY Amazon Alexa Skill",
    position: "Software Developer",
    employer: "Svaapta IT-ally",
    achievements: [
      "Developed a .NET Core REST API with AWS Lambda Alexa skills for real-time data processing, enabling conversational interactions through intents, utterances, slots for dashboard status counts, managing appointments",
    ],
  },
  {
    period: "2018",
    company: "In-House Project Management Software",
    position: "Software Developer",
    employer: "Svaapta IT-ally",
    achievements: [
      "Developed ASP.NET Core Web API and .NET MVC controllers for data processing, ensuring API reliability with Postman, and integrated data with Angular services for frontend display in resource and project management tasks",
    ],
  },
]

const education = [
  {
    year: "2018",
    degree: "Master of Technology (Computer Engineering)",
    institution: "Charusat University of Science and Technology - Changa, India",
  },
  {
    year: "2016",
    degree: "Bachelor of Engineering (Information Technology)",
    institution: "K. J. Institute of Engineering & Technology - Vadodara, India",
  },
]

const skills = {
  "Languages and Frameworks": [
    "C#",
    "Angular",
    "Typescript",
    "JavaScript",
    "HTML",
    "CSS",
    "Knockout.js",
    "jQuery",
    "Node.js",
    "Jasmine",
    "Angular Material-UI",
    "RestAPI",
    "ASP.NET MVC (C#)",
    "ASP.NET CORE (C#)",
    "ASP.NET (C#)",
  ],
  "Developer Tools": [
    "Git",
    "AZURE Devops",
    "SVN",
    "Google Cloud Platform",
    "VS Code",
    "Visual Studio",
    "SQL Server (management studio)",
    "7- Edit Hl7 Messages",
    "FTP",
    "IIS",
    "Karma",
    "Azure Portal",
    "Amazon EC2",
  ],
  "Libraries and Packages": ["Highcharts", "Indexed DB", "Ng-select", "Source-map-explorer", "Ngrx/store", "Npm Xlsx"],
  Technologies: [
    "AWS Lambda",
    "Web API",
    "Web Services",
    "Entity Framework",
    "LINQ",
    "Amazon Web Services",
    "Azure (Functions, Key Vault, Logic App, Microsoft Entra ID, Cosmos DB)",
  ],
  "Architectures and Messaging": ["CQRS pattern", "Dynamic HTML - Based on JSON File controls", "RabbitMQ"],
}

const certifications = [
  "Azure Developer Associate certification (AZ-204)",
  "Azure Fundamentals (AZ-900)",
  "Azure AI Fundamentals (AI-900)",
]

export default function ResumePage() {
  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume-hardik-soni.pdf"
    link.download = "Hardik_Soni_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Resume</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Senior Software Technologist with 6+ years of experience
            </p>
            <Button onClick={downloadResume} size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download PDF Resume
            </Button>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <Card className="glass-effect border-0">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Hardik Soni</CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-400">Senior Software Technologist</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <a href="mailto:hardik100nis@gmail.com" className="text-sm hover:text-blue-500">
                      hardik100nis@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">8238321218</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Vadodara, India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Linkedin className="h-4 w-4 text-blue-500" />
                    <a
                      href="https://linkedin.com/in/hardik-soni-62b370140"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-blue-500"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Building className="mr-3 h-8 w-8 text-blue-500" />
              Work Experience
            </h2>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card key={index} className="glass-effect border-0">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{job.position}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 mb-1">{job.company}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{job.employer}</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{job.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 h-8 w-8 text-blue-500" />
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="glass-effect border-0">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{edu.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={category} className="glass-effect border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Award className="mr-3 h-8 w-8 text-blue-500" />
              Microsoft Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass-effect border-0">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 mx-auto mb-3 text-blue-500" />
                    <p className="font-medium text-sm">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
