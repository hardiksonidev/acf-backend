"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Calendar,
  Users,
  Award,
  ExternalLink,
  Github,
  MessageCircle,
  Code,
  Database,
  Cloud,
  Palette,
  ShoppingCart,
  BarChart3,
  Wrench,
  Globe,
  Smartphone,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FilloutPopup from "@/components/fillout-popup"
import ShareButton from "@/components/share-button"

const services = [
  {
    icon: Code,
    title: "Custom WordPress Development",
    description: "ACF, ACF PRO, Elementor, Themes, Plugins",
    features: ["Advanced Custom Fields", "Custom Post Types", "Plugin Development", "Theme Customization"],
  },
  {
    icon: Palette,
    title: "UI/UX Development & Responsive Design",
    description: "Plugin & Theme customization",
    features: ["Responsive Design", "Cross-browser Compatibility", "Mobile Optimization", "User Experience"],
  },
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "WordPress, .NET Core, Angular, Node.js",
    features: ["Frontend Development", "Backend APIs", "Database Integration", "Cloud Deployment"],
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description: "MS SQL Server, MySQL",
    features: ["Database Architecture", "Query Optimization", "Data Migration", "Performance Tuning"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Payment Gateway Integration",
    features: ["WooCommerce", "Payment Processing", "Inventory Management", "Order Processing"],
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Power BI Dashboards",
    features: ["Interactive Charts", "Real-time Data", "Custom Dashboards", "Analytics"],
  },
  {
    icon: Wrench,
    title: "Technical Support & Maintenance",
    description: "Ongoing support and optimization",
    features: ["Bug Fixes", "Performance Optimization", "Security Updates", "24/7 Support"],
  },
  {
    icon: Smartphone,
    title: "Alexa Custom Skill Development",
    description: "Voice applications and integrations",
    features: ["Custom Skills", "Voice UI", "AWS Integration", "Multi-language Support"],
  },
]

const techStack = {
  "WordPress & CMS": [
    "PHP",
    "ACF",
    "ACF PRO",
    "Elementor",
    "Search and Filter Pro",
    "WP All Export Import",
    "Gravity Forms",
    "WordPress",
    "Divi",
    "WooCommerce",
    "Visual Composer",
    "Contact Form 7",
  ],
  "Backend Technologies": [
    ".NET Core",
    "Azure",
    "ASP.NET MVC",
    "ASP.NET Core C#",
    "ASP.NET C#",
    "MySQL",
    "Microsoft SQL Server",
    "Entity Framework",
    "Web API",
  ],
  "Frontend Technologies": [
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "jQuery",
    "HTML",
    "CSS",
    "Knockout",
    "Angular Material",
    "Bootstrap",
  ],
  "Cloud & DevOps": ["Azure", "AWS", "Node.js", "JSON", "Ajax", "OAuth", "REST APIs"],
  "Data & Analytics": [
    "Power BI",
    "Highcharts",
    "Data Visualization",
    "CSV Import/Export",
    "SQL Server Programming",
    "Database Design",
  ],
}

const certifications = [
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "September 23, 2024",
    icon: Cloud,
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "June 20, 2024",
    icon: Cloud,
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "June 19, 2020",
    icon: Cloud,
  },
]

const portfolioProjects = [
  {
    title: "Divi Theme | Membership | ACF",
    description:
      "Optimized membership listing page in Divi theme using ACF for dynamic data. Enhanced data presentation and admin flexibility with custom ACF fields.",
    tags: ["WordPress", "Divi", "ACF", "PHP", "CSS"],
    image: "/placeholder.svg?height=200&width=300&text=Divi+Membership",
  },
  {
    title: "Package Selection Dropdown | ACF",
    description:
      "Implemented multi-select dropdowns for package customization. Displayed dynamic package details for user selections.",
    tags: ["WordPress", "ACF", "JavaScript", "CSS", "UX/UI"],
    image: "/placeholder.svg?height=200&width=300&text=Package+Selection",
  },
  {
    title: "WooCommerce Product Enhancement",
    description:
      "Inserted additional product description before hero block. Improved product presentation and user engagement.",
    tags: ["WooCommerce", "WordPress", "PHP", "ACF"],
    image: "/placeholder.svg?height=200&width=300&text=WooCommerce+Enhancement",
  },
  {
    title: "Front-End User Form Edit (Gravity Forms)",
    description: "Developed front-end edit form for user submissions. Ensured secure access and data integrity.",
    tags: ["WordPress", "Gravity Forms", "PHP", "JavaScript"],
    image: "/placeholder.svg?height=200&width=300&text=Gravity+Forms",
  },
  {
    title: "Google Maps API Autocomplete Fix",
    description: "Fixed Google Maps API autocomplete functionality. Enhanced location search experience.",
    tags: ["JavaScript", "Google Maps API", "Debugging"],
    image: "/placeholder.svg?height=200&width=300&text=Google+Maps",
  },
  {
    title: "ACF PRO Advent Calendar Setup",
    description: "Implemented dynamic Advent calendar with ACF. Enabled daily content scheduling and presentation.",
    tags: ["WordPress", "ACF", "PHP", "JavaScript"],
    image: "/placeholder.svg?height=200&width=300&text=Advent+Calendar",
  },
  {
    title: "Single Page Filter by Angular",
    description: "Developed real-time filter with Angular. Enhanced content sorting and user experience.",
    tags: ["Angular", "HTML", "CSS", "JavaScript"],
    image: "/placeholder.svg?height=200&width=300&text=Angular+Filter",
  },
  {
    title: ".NET CORE MultiFilter Dropdown",
    description: "Developed multiple dropdown filters for data tables. Enabled complex and tailored searches.",
    tags: [".NET CORE", "Razor", "C#", "JavaScript"],
    image: "/placeholder.svg?height=200&width=300&text=NET+Core+Filter",
  },
  {
    title: "Oodaloop - New Home Page",
    description:
      "Crafted a visually appealing and functional landing page. Integrated modern technologies for swift user experience.",
    tags: ["React", "Next.js", "CSS", "UI/UX"],
    image: "/placeholder.svg?height=200&width=300&text=Oodaloop+Homepage",
  },
]

const stats = [
  { label: "Years of Experience", value: "7.5+", icon: Calendar },
  { label: "Websites Created", value: "350+", icon: Globe },
  { label: "Happy Clients", value: "200+", icon: Users },
  { label: "Projects Completed", value: "500+", icon: Award },
]
const testimonials = [
  {
    name: "Jeff Logan",
    role: "",
    company: "",
    country: "United States",
    image: "/testimonial-images/jeff-l.jpg?height=300&width=500&text=ACF+hardik+soni",
    content:
      "Hardik did an outstanding job setting up Google Maps integration using Advanced Custom Fields and our Google API key. The implementation was seamless, everything functions perfectly, and communication was prompt and clear from start to finish. We always trust him with our development work and highly recommend him.",
    rating: 5,
    myResponse:
      "I fixed the google map api key with different design maps using elementor and the client is very happy with it",
      flag:"/testimonial-images/us.png?height=300&width=500&text=ACF+hardik+soni",
  },
      {
    name: "danieldoerrer",
    role: "",
    company: "",
    country: "Germany",
    flag: "/testimonial-images/de.png", // Add your Germany flag image path here
    image: "/testimonial-images/danieldoerrer.jpeg?height=60&width=60", // Replace with actual image if available
    content:
      "Enjoyed working with hardik. He is such a great Advance custom field expert. Speedy response and always transparent on progress. Work quality is excellent and I am pleased with the quick support he provided.",
    rating: 5,
    myResponse:
      "In this project client want to get all the custom fields from the backend to front end and they want to fit them into thr datatable with pfd, excel button and i completed that and he is very happy with that",
  },
    {
    name: "maciune",
    role: "",
    company: "",
    country: "Lithuania",
  
    image: "/testimonial-images/maciune.jpg?height=300&width=500&text=ACF+hardik+soni", // Replace with actual image if available
    content:
      "Hardik has done an exceptional job developing the feature to display product feature icons on our product pages. He provided a solution that allows us to select up to four icons from a predefined list, making the user experience both intuitive and flexible. The icons are displayed seamlessly with appropriate validation, ensuring that no more than four features can be selected. The front-end display is clean and responsive, and Hardik ensured that everything works smoothly without any issues. Overall, his attention to detail, efficiency, and quick implementation made the entire process stress-free. Highly recommended for any development tasks!",
    rating: 5,
    myResponse:
      "Client's main requirements were regarding developing the feature to display product feature icons. I used ACF select fields with a custom solution to meet their needs.",
    flag: "/testimonial-images/lt.png?height=300&width=500&text=ACF+hardik+soni",
  },
    {
    name: "markroberts",
    role: "",
    company: "",
    country: "United Kingdom",
    flag: "/testimonial-images/gb.png?height=300&width=500&text=ACF+hardik+soni", // Add your UK flag image path here
    image: "/testimonial-images/markroberts.jpeg?height=60&width=60", // Replace with actual image if available
    content:
      "Great seller. Quick and very knowledgeable. Looking forward to working with you again soon.",
    rating: 5,
    myResponse:
      "In this project client wanted to add an extra product description before the hero block in WooCommerce. I fixed it within 30 minutes and the client is very happy with it.",
  },

  {
    name: "nwdesigncompany",
    role: "",
    company: "",
    country: "United Kingdom",
    flag: "/testimonial-images/gb.png", // Add your UK flag image path here
    image: "/testimonial-images/nwdesigncompany.jpg?height=60&width=60", // Replace with actual image if available
    content:
      "Outstanding work, great communication from the start, fast response and got the job done on the day. Highly recommended will be using again.",
    rating: 5,
    myResponse:
      "In this project the client wanted the Advent calendar setup with ACF fields. I did completely fix that for this client and the client is very happy with my service.",
  },
  {
  name: "stevenfranz",
  role: "",
  company: "",
  country: "Chile",
  flag: "/testimonial-images/cl.png", // Add your Chile flag image path here
  image: "/testimonial-images/stevenfranz.jpeg?height=60&width=60", // Replace with actual image if available
  content:
    "Hardk is a great developer, special for backend purposes. Thanks a lot.",
  rating: 5,
  myResponse:
    "In this project client needed some difficult conditional changes based on the Advanced Custom Fields and within my expertise I completed that in a few hours. Client is very happy with it.",
},
// {
  //   name: "Sarah Johnson",
  //   role: "CTO, FinTech Solutions",
  //   company: "TechCorp",
  //   country: "",
  //   image: "/placeholder.svg?height=60&width=60",
  //   content:
  //     "Hardik delivered an exceptional vendor management system that exceeded our expectations. His expertise in .NET and Angular, combined with his understanding of FinTech requirements, made him the perfect choice for our project.",
  //   rating: 5,
  //   myResponse: "",
  // },
  // {
  //   name: "Michael Chen",
  //   role: "Product Manager",
  //   company: "Healthcare Innovations",
  //   country: "",
  //   image: "/placeholder.svg?height=60&width=60",
  //   content:
  //     "Working with Hardik was a game-changer for our healthcare platform. His attention to detail and ability to integrate complex systems seamlessly helped us launch on time and within budget.",
  //   rating: 5,
  //   myResponse: "",
  // },
  // {
  //   name: "Emily Rodriguez",
  //   role: "Lead Developer",
  //   company: "Enterprise Solutions",
  //   country: "",
  //   image: "/placeholder.svg?height=60&width=60",
  //   content:
  //     "Hardik's cloud migration expertise helped us move our legacy systems to Azure efficiently. His technical guidance and hands-on approach made the transition smooth and successful.",
  //   rating: 5,
  //   myResponse: "",
  //   flag:"",
  // },
  // {
  //   name: "David Thompson",
  //   role: "Startup Founder",
  //   company: "InnovateNow",
  //   country: "",
  //   image: "/placeholder.svg?height=60&width=60",
  //   content:
  //     "As a startup, we needed someone who could deliver quickly without compromising quality. Hardik built our MVP in record time and provided valuable technical insights that shaped our product strategy.",
  //   rating: 5,
  //   myResponse: "",
  //   flag:"",
  // },
]
export default function FreelancerPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <div className="mb-8">
              <div className="flex justify-center items-center gap-4 mb-6">
                <h1 className="text-5xl font-bold">
                  <span className="gradient-text">Hardik S.</span> – Advanced Custom Fields (ACF) Expert
                </h1>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {[
                  "ACF",
                  "Dot Net",
                  "Angular",
                  "PHP",
                  "Gravity Form",
                  "Elementor",
                  "Payment Gateway",
                  "Laravel",
                  "Azure",
                  "Node.js",
                  "Next.js",
                  "React",
                  "Knockout"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
              <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-6">Full-Stack Web Developer Specializing in WordPress & Modern Frameworks</h2>
              <div className="md:hidden flex justify-center space-x-6 mb-4">
                            <FilloutPopup />
              <ShareButton />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                I specialize in crafting clean, scalable, and user-focused web solutions that solve real business challenges. Whether you need to fix something complex or build from the ground up, I’m here to help.
              </p>
               <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mt-4">
 Let’s bring your vision to life with powerful tools like ACF, WordPress, Angular, and .NET Core, Azure.
               </p>
              {/* <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                I help businesses and startups build scalable, robust, and user-friendly web applications with expertise
                in WordPress, .NET Core, Angular, and more.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mt-4">
                With over 7.5 years of freelancing experience on platforms like Fiverr and Upwork, I have successfully
                created more than 350+ websites using WordPress and ACF. I am passionate about web application
                development and constantly eager to learn new technologies.
              </p> */}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <Button variant="outline" asChild>
                <a href="https://www.fiverr.com/hardik39945/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Fiverr
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.upwork.com/freelancers/devhardik" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Upwork
                </a>
              </Button>
                            <Button variant="outline" asChild>
                <a href="https://github.com/hardiksonidev" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
            {/* <div className="flex justify-center space-x-6 mb-4">
              
              <FilloutPopup />
              <ShareButton />
            </div> */}

            {/* Schedule Call Section */}
            {/* <div className="flex justify-center mb-8">
              <FilloutPopup />
            </div> */}
          </motion.div>
                    {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className="glass-effect border-0 text-center">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 mx-auto mb-3 text-blue-500" />
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>



          {/* Main Content Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            
            className="mb-10"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-12">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <Card className="glass-effect border-0">
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-600 dark:text-gray-400">
                    <p>
                      I am always excited to learn more and more about web application development. Have a huge interest
                      in web application, blog, portfolio development using WordPress, ACF, ACF PRO, ASP.NET CORE C#,
                      ASP.NET C#, ASP.NET MVC C#, Microsoft SQL Server Programming, Ajax, JSON, Node.js, Angular, CSS,
                      HTML, jQuery, and PHP, JavaScript library/frameworks, Knockout, TypeScript.
                    </p>
                    <p>
                      With more than 7 years of experience in web Application development with strong knowledge of
                      ASP.NET Core, ASP.NET MVC, PHP and Object-Oriented concepts I want to enhance my skills in web
                      development.
                    </p>
                    <p>
                      Completed Masters in computer engineering with lots of skills to enhance further in the field of
                      software development. I am experienced in all aspects of web development from writing to designing
                      to programming.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-0">
                  <CardHeader>
                    <CardTitle>My Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div>
                        <h4 className="font-semibold mb-3">Wordpress Development</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• WordPress theme customization</li>
                          <li>• WordPress bug fixing & maintenance</li>
                          <li>• PSD to WordPress</li>
                          <li>• Html to WordPress theme</li>
                          <li>• WordPress child theme building</li>
                          <li>• WordPress responsive design</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">ASP.NET Technologies</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• ASP.NET CORE</li>
                          <li>• ASP.NET MVC</li>
                          <li>• C# Programming</li>
                          <li>• ASP.NET Web API</li>
                          <li>• Entity Framework</li>
                          <li>• OAuth based Web API Development</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Frontend Technologies</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Angular & Angular Material</li>
                          <li>• TypeScript & JavaScript</li>
                          <li>• Knockout.js</li>
                          <li>• HTML5 & CSS3</li>
                          <li>• jQuery</li>
                          <li>• Responsive Design</li>
                        </ul>
                      </div>
                        <div>
                        <h4 className="font-semibold mb-3">Data Visualization, Analytics, and Dashboards</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• HighCharts</li>
                          <li>• Area chart</li>
                          <li>• Areaspline chart</li>
                          <li>• Bar chart</li>
                          <li>• Box plot series</li>
                          <li>• Column chart</li>
                          {/* <li>• Error bar series</li>
                          <li>• Funnel series</li>
                          <li>• Heat map series</li> */}
                          <li>• Line chart</li>
                          <li>• Pie chart</li>
                          {/* <li>• Polar chart</li>
                          <li>• Range series</li>
                          <li>• Scatter chart</li>
                          <li>• Spline chart</li>
                          <li>• Treemap</li>
                          <li>• Waterfall series</li> */}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Laravel Admin Panels and E-commerce</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Laravel Collective</li>
                          <li>• Voyager Admin Panel</li>
                          <li>• Quick Admin Panel</li>
                          <li>• Maatwebsite/Laravel - Excel sheet Generator package configuration</li>
                          <li>• barryvdh/laravel-dompdf - PDF Generator package configuration</li>
                          <li>• Ajax - DataTables</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Microsoft Azure Services</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Azure Virtual Machines </li>
                          <li>• Azure Blob Storage </li>   
                          <li>• Azure Functions </li>
                          <li>• Azure SQL Database </li>
                          <li>• Azure Logic Apps </li>
                          <li>• Azure Active Directory (Azure AD) </li>
                          <li>• Azure AI Services </li>
                          <li>• Azure App Service </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>

                                        <CardContent>
                     <h1 className="font-semibold mb-3 text-center text-2xl">Wordpress Plugin Hands on Experience</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
     
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• WooCommerce</li>
                          <li>• Search and Filter Pro</li>
                          <li>• Custom post types </li>
                          <li>• Child Theme </li>
                          <li>• ACF (Advanced Custom Fields) </li>
                          <li>• ACF Pro </li>
                          <li>• Visual Composer </li>
                          <li>• Contact Form 7 </li>
                          <li>• Gravity Forms </li>
                          <li>• MailChimp </li>
                          <li>• Divi </li>
                          <li>• WPengine </li>
                        </ul>
                      </div>

                                            <div>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• CDN </li>
                          <li>• Speed Optimization, SSL </li>
                          <li>• Ajax Load More </li>
                          <li>• Infinite single Posts Scrolling </li>
                          <li>• Display Twitter Feed </li>
                          <li>• Facebook Feed </li>
                          <li>• Elementor Builder </li>
                          <li>• Elementor Pro </li>       
                          <li>• Beaver Builder </li>
                          <li>• Visual Builder </li>
                          <li>• WPBakery Page Builder </li>
                          <li>• WP Rocket </li>   
                        </ul>
                      </div>

                      
                                            <div>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Slider Revolution </li>
                          <li>• WP All Import </li>
                          <li>• WP All Export </li>
                          <li>• Yith Plugins </li>
                          <li>• WP Job Manager </li>
                          <li>• Newspaper Themes </li>
                          <li>• Wedding Planner Theme </li>
                          <li>• Javo Theme </li>
                          <li>• Flatsome | Multi-Purpose Responsive WooCommerce Theme </li>
                          <li>• Avada | Responsive Multi-Purpose Theme </li> 
                        </ul>
                      </div>
                      </div>
                      </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="glass-effect border-0 h-full hover:bg-white/20 transition-all duration-300">
                          <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                              <Icon className="h-6 w-6 text-blue-500" />
                            </div>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="skills" className="space-y-8">
                {Object.entries(techStack).map(([category, skills], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glass-effect border-0">
                      <CardHeader>
                        <CardTitle>{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="glass-effect border-0 h-full hover:bg-white/20 transition-all duration-300">
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-semibold mb-2">{project.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certifications" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => {
                    const Icon = cert.icon
                    return (
                      <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="glass-effect border-0 text-center h-full">
                          <CardContent className="p-6">
                            <Icon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                            <h3 className="font-semibold mb-2">{cert.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                            <p className="text-xs text-gray-500">{cert.date}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>
            {/* <Card className="glass-effect border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <img
                    src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonials[activeTestimonial].name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === activeTestimonial ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card> */}

            <Card className="glass-effect border-0">
  <CardContent className="p-8">
    <div className="text-center mb-8">
      <img
        src={testimonials[activeTestimonial].image || "/placeholder.svg"}
        alt={testimonials[activeTestimonial].name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <div className="flex justify-center mb-4">
        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-5xl mx-auto">
        "{testimonials[activeTestimonial].content}"
      </blockquote>
      <div>
        <div className="font-semibold">{testimonials[activeTestimonial].name}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {testimonials[activeTestimonial].role}
          {testimonials[activeTestimonial].role && testimonials[activeTestimonial].company ? " at " : ""}
          {testimonials[activeTestimonial].company}
        </div>
        {/* {testimonials[activeTestimonial].country && (
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {testimonials[activeTestimonial].country}
          </div>
        )} */}

        {testimonials[activeTestimonial].country && (
  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center justify-center gap-1">
    {/* Country flag for United States, add more as needed */}
    {/* {testimonials[activeTestimonial].country === "United States" && (
      <img
        src={testimonials[activeTestimonial].flag || "/placeholder.svg"}
        alt={testimonials[activeTestimonial].name}
        className="inline-block w-4 h-4 mr-1 rounded-sm"
        loading="lazy"
      />
    )} */}

    <img
        src={testimonials[activeTestimonial].flag || "/placeholder.svg"}
        alt={testimonials[activeTestimonial].name}
        className="inline-block w-4 h-4 mr-1 rounded-sm"
        loading="lazy"
      />
    {testimonials[activeTestimonial].country}
  </div>
)}
      </div>
      {testimonials[activeTestimonial].myResponse && (
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/30 rounded p-2 text-left max-w-5xl mx-auto border-l-4 border-blue-400">
          {/* <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1">My Response</div> */}
          <div className="text-sm text-gray-700 dark:text-gray-200">
            {testimonials[activeTestimonial].myResponse}
          </div>
        </div>
      )}
    </div>

    {/* Testimonial Dots */}
    <div className="flex justify-center space-x-2">
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveTestimonial(index)}
          className={`w-3 h-3 rounded-full transition-all duration-200 ${
            index === activeTestimonial ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
          }`}
        />
      ))}
    </div>
  </CardContent>
</Card>
          </motion.div>
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-4"
          >
            <Card className="glass-effect border-0">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project requirements and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Start a Project
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/services">View Services & Pricing</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
