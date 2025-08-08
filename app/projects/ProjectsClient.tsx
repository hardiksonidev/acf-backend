"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  // {
  //   id: 1,
  //   title: "E-Commerce Platform",
  //   description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  //   category: "fullstack",
  //   github: "#",
  //   demo: "#",
  // },
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description: "Collaborative task management with real-time updates",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tags: ["Next.js", "Socket.io", "MongoDB"],
  //   category: "frontend",
  //   github: "#",
  //   demo: "#",
  // },
  // {
  //   id: 3,
  //   title: "API Gateway Service",
  //   description: "Microservices API gateway with authentication and rate limiting",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tags: ["Node.js", "Redis", "Docker"],
  //   category: "backend",
  //   github: "#",
  //   demo: "#",
  // },
  // {
  //   id: 4,
  //   title: "Mobile Banking App",
  //   description: "React Native banking application with biometric authentication",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tags: ["React Native", "Firebase", "Biometrics"],
  //   category: "mobile",
  //   github: "#",
  //   demo: "#",
  // }, 
  {
  id: 1,
  title: "WooCommerce Product Description Enhancement",
  description: "Added an extra product description section before the hero block in WooCommerce, providing customers with detailed product info for better purchase decisions.",
  image: "/portfolio-images/Product-description-frontend-acf-hardik39945.png?height=300&width=500&text=WooCommerce+Desc",
  tags: ["WooCommerce", "WordPress", "PHP", "ACF"],
  category: "wordpress",
  github: "#",
  demo: "#",
},
{
  id: 2,
  title: "Divi Theme Customization by ACF",
  description: "Customized Divi theme using a child theme and integrated new ACF data for tailored design and dynamic content presentation.",
  image: "/portfolio-images/Divi Theme Customization by ACF-acf-hardik39945.jpg?height=300&width=500&text=Divi+ACF",
  tags: ["WordPress", "Divi", "ACF", "PHP", "CSS"],
  category: "wordpress",
  github: "#",
  demo: "#",
},
{
  id: 3,
  title: "Front-End User Form Edit (Gravity Forms)",
  description: "Enabled logged-in users to edit their own form submissions via a secure, user-friendly front-end interface, improving data management and user engagement.",
  image: "/portfolio-images/Front-End User Form Edit GRAVITY-acf-hardik39945.png?height=300&width=500&text=Gravity+Edit",
  tags: ["WordPress", "Gravity Forms", "PHP", "JavaScript"],
  category: "wordpress",
  github: "#",
  demo: "#",
},
{
  id: 4,
  title: "Google Maps API Autocomplete Fix",
  description: "Resolved issues with Google Maps API autocomplete, ensuring accurate and seamless location search for improved user navigation.",
  image: "/portfolio-images/Google Maps API Autocomplete Fix- moving-from-acf-hardik39945.jpg?height=300&width=500&text=Maps+Autocomplete",
  tags: ["JavaScript", "Google Maps API", "Debugging"],
  category: "frontend",
  github: "#",
  demo: "#",
},
  {
    id: 5,
    title: "ACF PRO Filter Configuration Fix",
    description: "Fixed configuration issues with Advanced Custom Fields by implementing optimized filters for improved data management and content presentation.",
    image: "/portfolio-images/ACF PRO Filter Configuration Fix-acf-hardik39945.jpg?height=300&width=500&text=ACF+Filter",
    tags: ["WordPress", "ACF", "PHP"],
    category: "wordpress",
    github: "#",
    demo: "#",
  },
    {
    id: 6,
    title: "Homepage and Single Post Edits",
    description: "Enhanced homepage and single post templates with ACF sections for latest videos, pulse briefs, must reads, and author Gravatar images.",
    image: "/portfolio-images/Homepage and Single Post Edits-acf-hardik39945.png?height=300&width=500&text=Homepage+Edits",
    tags: ["WordPress", "ACF", "PHP", "CSS"],
    category: "wordpress",
    github: "#",
    demo: "#",
  },
  {
    id: 7,
    title: "ACF PRO Advent Calendar Setup",
    description: "Established an interactive Advent calendar using ACF fields for easy content management and daily updates.",
    image: "/portfolio-images/ACF PRO Advent Calendar Setup-acf-hardik39945.png?height=300&width=500&text=Advent+Calendar",
    tags: ["WordPress", "ACF", "PHP", "JavaScript"],
    category: "wordpress",
    github: "#",
    demo: "#",
  },
  {
    id: 8,
    title: "ACF Pro Checkboxes Alignment Fix",
    description: "Resolved frontend and backend alignment issues with ACF Pro checkboxes for a polished and consistent user interface.",
    image: "/portfolio-images/ACF Pro Checkboxes Alignment Fix-acf-hardik39945.png?height=300&width=500&text=Checkbox+Fix",
    tags: ["WordPress", "ACF", "CSS"],
    category: "wordpress",
    github: "#",
    demo: "#",
  },
  {
    id: 9,
    title: "WordPress Social Feed Integration",
    description: "Integrated Facebook and Twitter feeds into WordPress for real-time updates and improved social media engagement.",
    image: "/portfolio-images/WordPres Social Feed Integration-acf-hardik39945.png?height=300&width=500&text=Social+Feed",
    tags: ["WordPress", "Social Media APIs", "PHP"],
    category: "wordpress",
    github: "#",
    demo: "#",
  },
  {
    id: 10,
    title: "Single Page Filter by Angular",
    description: "Created a single-page filter system using Angular, HTML, and CSS for dynamic and user-friendly content sorting.",
    image: "/portfolio-images/Single Page Filter by ANGULAR - filetr-page-acf-hardik39945.png?height=300&width=500&text=Angular+Filter",
    tags: ["Angular", "HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "#",
    demo: "#",
  },
  {
    id: 11,
    title: "CSV Import/Export Checkbox & ACF",
    description: "Implemented CSV import/export for user data, checkboxes, and ACF metadata to streamline data management.",
    image: "/portfolio-images/CSV ImportExport Checkbox and ACF-acf-hardik39945.png?height=300&width=500&text=CSV+ACF",
    tags: ["WordPress", "ACF", "PHP", "CSV"],
    category: "wordpress",
    github: "#",
    demo: "#",
  },
  {
    id: 12,
    title: "ACF Pro Fields Migration",
    description: "Migrated all ACF fields and configurations from staging to production, ensuring data consistency and feature continuity.",
    image: "/portfolio-images/ACF Pro Fields Migration-acf-hardik39945.png?height=300&width=500&text=ACF+Migration",
    tags: ["WordPress", "ACF", "PHP"],
    category: "wordpress",
    github: "#",
    demo: "#",
  },
  {
    id: 13,
    title: "Users Checkbox Based Redirection",
    description: "Integrated ACF checkboxes in user profiles and implemented redirection logic using Elementor buttons for personalized user experiences.",
    image: "/portfolio-images/Users Checkbox based Redirection-acf-hardik39945.png?height=300&width=500&text=Checkbox+Redirect",
    tags: ["WordPress", "ACF", "Elementor", "PHP"],
    category: "wordpress",
    github: "#",
    demo: "#",
  },
  {
    id: 14,
    title: "ACF Forms History Data Display",
    description: "Extended ACF Forms to include history tracking and display, providing users with a clear overview of past changes in a structured table format.",
    image: "/portfolio-images/ACF Forms History Data Display-History-Data-front-end-acf-hardik39945.png?height=300&width=500&text=ACF+History",
    tags: ["WordPress", "ACF", "PHP", "JavaScript"],
    category: "wordpress",
    github: "#",
    demo: "#",
  },
  {
    id: 15,
    title: "ACF with WCFM Fields Integration",
    description: "Configured ACF for seamless integration with WCFM fields, optimizing data management and compatibility.",
    image: "/portfolio-images/ACF with WCFM fields Integration-wcfm-acf-hardik39945.jpg?height=300&width=500&text=ACF+WCFM",
    tags: ["WordPress", "ACF", "WCFM", "PHP"],
    category: "wordpress",
    github: "#",
    demo: "#",
  },
  {
    id: 16,
    title: "JSON to PHP Array Conversion",
    description: "Converted complex JSON data from ACF API into PHP arrays for easier data handling and integration.",
    image: "/portfolio-images/JSON to PHP Array Conversion-acf-hardik39945.png?height=300&width=500&text=JSON+PHP",
    tags: ["PHP", "ACF", "JSON"],
    category: "backend",
    github: "#",
    demo: "#",
  },
  {
    id: 17,
    title: ".NET CORE MultiFilter Dropdown",
    description: "Implemented dynamic multi-filter dropdowns for data tables in ASP.NET CORE using RAZOR syntax, enhancing search and data presentation.",
    image: "/portfolio-images/ASP NET CORE MultiFilter Dropdown-acf-hardik39945.png?height=300&width=500&text=MultiFilter+Dropdown",
    tags: [".NET CORE", "Razor", "C#", "JavaScript"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
  {
    id: 18,
    title: "Synchroniz Highchart Integration",
    description: "Integrated synchronized Highcharts with custom data feeds for unified and enhanced data visualization on HTML webpages.",
    image: "/portfolio-images/Synchroniz Highchart Integration-acf-hardik39945.jpg?height=300&width=500&text=Highcharts",
    tags: ["JavaScript", "Highcharts", "HTML", "Data Visualization"],
    category: "frontend",
    github: "#",
    demo: "#",
  },
  {
    id: 19,
    title: "Oodaloop - New Home Page",
    description: "Developed a new home page with optimized performance, responsive design, and seamless navigation, showcasing technical and design expertise.",
    image: "/portfolio-images/New-Home-Page-OODA-Loop-hardik39945.png?height=300&width=500&text=Oodaloop+Home",
    tags: ["React", "Next.js", "CSS", "UI/UX"],
    category: "frontend",
    github: "#",
    demo: "#",
  },
  {
    id: 20,
    title: "ACF Pro and Elementor Integration",
    description: "Created a loop grid in Elementor with dynamic featured images and popups displaying ACF galleries for enhanced content interaction.",
    image: "/portfolio-images/hardik39945-acf-hardik-lightbox-wordpress-php-html-css-acf-gallery.jpg?height=300&width=500&text=ACF+Elementor",
    tags: ["WordPress", "ACF", "Elementor", "PHP", "JavaScript"],
    category: "elementor",
    github: "#",
    demo: "#",
  },
  {
  id: 21,
  title: "Divi Theme | Membership | ACF",
  description: "Optimize Divi theme's membership listing page by integrating Advanced Custom Fields for improved functionality and data presentation. Made adjustments to the membership listing page within the Divi theme, utilizing Advanced Custom Fields data.",
  image: "/portfolio-images/membership-listings- devlivery.png?height=300&width=500&text=WordPress+1",
  tags: ["WordPress", "Divi", "ACF", "PHP", "CSS"],
  category: "wordpress",
  github: "#",
  demo: "#",
},
{
  id: 22,
  title: "Package Selection Dropdown | ACF",
  description: "Created an interactive webpage for selecting service packages with multi-dropdowns and dynamic package details. Enhanced user experience and presentation for service packages.",
  image: "/portfolio-images/Package Selection Dropdown  ACF.png?height=300&width=500&text=Package+Dropdown",
  tags: ["WordPress", "ACF", "JavaScript", "CSS", "UX/UI"],
  category: "wordpress",
  github: "#",
  demo: "#",
},
{
  id: 23,
  title: "ACF Fields and URL Resolution",
  description: "Resolved issues with Advanced Custom Fields visibility and improved URL redirection for a smoother user experience and better data presentation.",
  image: "/portfolio-images/We want the whole article to show without logging in.png?height=300&width=500&text=ACF+URL+Fix",
  tags: ["WordPress", "ACF", "PHP", "URL Routing"],
  category: "wordpress",
  github: "#",
  demo: "#",
},

]
const categories = [
  { id: "all", label: "All Projects" },
  { id: "wordpress", label: "WordPress/ACF" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "elementor", label: "Elementor" },
]
// const categories = [
//   { id: "all", label: "All Projects" },
//   { id: "fullstack", label: "Full Stack" },
//   { id: "frontend", label: "Frontend" },
//   { id: "backend", label: "Backend" },
//   { id: "mobile", label: "Mobile" },
// ]

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of projects I've worked on, showcasing different technologies and approaches.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <Filter size={16} />
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass-effect border-0 overflow-hidden group hover:bg-white/20 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {/* <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button> */}
                      {/* <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </a>
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
