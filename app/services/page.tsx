"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check, Star, ArrowRight, Code, Cloud, Database, Zap, MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FilloutPopup from "@/components/fillout-popup"
import ShareButton from "@/components/share-button"

const services = [
    {
    icon: Code,
    title: "WordPress Customization",
    description: "Tailored WordPress theme and site customization for unique branding and business needs.",
    features: [
      "Bug Fixes and performance improvements",
      "Custom theme modifications",
      "Advanced Custom Fields (ACF) integration",
      "Responsive design adjustments",
      "Performance and SEO optimization",
      "WooCommerce and plugin setup",
    ],
    pricing: {
      hourly: 25,
      project: "Starting from $200",
    },
  },
  {
    icon: Code,
    title: "WordPress Plugin Development",
    description: "Custom plugin development to extend WordPress functionality for your specific requirements.",
    features: [
      "Custom plugin design and coding",
      "Integration with third-party APIs",
      "Security and performance best practices",
      "Plugin updates and maintenance",
      "Comprehensive documentation",
    ],
    pricing: {
      hourly: 35,
      project: "Starting from $500",
    },
  },
  {
    icon: Code,
    title: "WordPress Full Website",
    description: "Complete WordPress website development from design to deployment, tailored for your business.",
    features: [
      "Custom theme design and development",
      "Content setup and migration",
      "SEO and speed optimization",
      "E-commerce integration (WooCommerce)",
      "Training and post-launch support",
    ],
    pricing: {
      hourly: 20,
      project: "Starting from $1000",
    },
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web application development using .NET Core, Angular, and modern technologies.",
    features: [
      "Custom web application development",
      "API design and development",
      "Database design and optimization",
      "Frontend development with Angular",
      "Code review and optimization",
    ],
    pricing: {
      hourly: 25,
      project: "Starting from $2,500",
    },
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Migration",
    description: "Azure cloud architecture, migration, and optimization services for scalable applications.",
    features: [
      "Azure cloud architecture design",
      "Application migration to cloud",
      "Serverless solutions with Azure Functions",
      "DevOps and CI/CD pipeline setup",
      "Performance optimization",
    ],
    pricing: {
      hourly: 55,
      project: "Starting from $8,000",
    },
  },
  // {
  //   icon: Database,
  //   title: "Enterprise Integration",
  //   description: "Complex system integrations, API development, and enterprise solution architecture.",
  //   features: [
  //     "Third-party API integrations",
  //     "Enterprise system architecture",
  //     "Microservices development",
  //     "Data migration and ETL processes",
  //     "System performance optimization",
  //   ],
  //   pricing: {
  //     hourly: 45,
  //     project: "Starting from $2,000",
  //   },
  // },
  {
    icon: Zap,
    title: "Technical Consulting",
    description: "Strategic technical guidance, code reviews, and architecture consulting services.",
    features: [
      "Technical architecture review",
      "Code quality assessment",
      "Technology stack recommendations",
      "Performance optimization strategies",
      "Team mentoring and training",
    ],
    pricing: {
      hourly: 100,
      project: "Starting from $2,000",
    },
  },
]

const pricingPlans = [
    {
    name: "Support & Bug Fix",
    price: 25,
    period: "per hour",
    description: "For bug fixes, maintenance, and project planning/discussion meetings",
    features: [
      "Bug fixing and troubleshooting",
      "Ongoing maintenance support",
      "Project planning & discussion meetings",
      "Flexible hourly engagement",
      "Quick response time",
      "Email & chat support",
    ],
    popular: false,
  },
  {
    name: "Starter",
    price: 2500,
    period: "per project",
    description: "Perfect for small projects and MVPs",
    features: [
      "Up to 40 hours of development",
      "Basic web application",
      "Database design",
      "API development",
      "2 weeks delivery",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: 7500,
    period: "per project",
    description: "Ideal for medium-sized applications",
    features: [
      "Up to 100 hours of development",
      "Full-stack web application",
      "Advanced database design",
      "Third-party integrations",
      "4 weeks delivery",
      "Priority support",
      "Code documentation",
      "Basic testing",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 15000,
    period: "per project",
    description: "For complex enterprise solutions",
    features: [
      "Up to 200 hours of development",
      "Enterprise-grade application",
      "Complex system integrations",
      "Cloud deployment",
      "8 weeks delivery",
      "24/7 support",
      "Complete documentation",
      "Comprehensive testing",
      "Performance optimization",
      "3 months maintenance",
    ],
    popular: false,
  },
]

const faqs = [
  {
    question: "Can you customize my existing WordPress theme?",
    answer:
      "Absolutely! I offer WordPress theme customization including design adjustments, ACF integration, performance optimization, and WooCommerce enhancements to match your branding and business needs.",
  },
  {
    question: "Do you develop custom WordPress plugins?",
    answer:
      "Yes, I build custom WordPress plugins tailored to your requirements, including third-party API integrations, security best practices, and ongoing maintenance.",
  },
  {
    question: "Can you build a complete WordPress website for my business?",
    answer:
      "Yes, I provide end-to-end WordPress website development, from custom theme design and content migration to e-commerce integration and post-launch support.",
  },
  {
    question: "What does your full-stack development service include?",
    answer:
      "My full-stack development covers frontend (Angular), backend (.NET Core), API design, database optimization, and code reviews for robust and scalable web applications.",
  },
  {
    question: "What is included in your technical consulting service?",
    answer:
      "Technical consulting includes architecture reviews, code quality assessments, technology stack recommendations, performance optimization strategies, and team mentoring.",
  },
  {
    question: "How do you ensure the security and performance of my website?",
    answer:
      "I follow best practices for security and performance, including code reviews, regular updates, optimization techniques, and thorough testing before deployment.",
  },
  {
    question: "Do you provide training or documentation after project delivery?",
    answer:
      "Yes, I offer training sessions and comprehensive documentation to ensure you and your team can manage and maintain your website or application confidently.",
  },

    {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in .NET Core, Angular, TypeScript, Azure cloud services, SQL Server, and modern web technologies. I have extensive experience in FinTech, Healthcare, and Enterprise domains.",
  },
  {
    question: "How do you handle project timelines?",
    answer:
      "I provide realistic timelines based on project complexity and maintain regular communication throughout development. I use agile methodologies to ensure timely delivery and accommodate changes.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, I offer ongoing support and maintenance services. This includes bug fixes, performance optimization, security updates, and feature enhancements based on your needs.",
  },
  {
    question: "Can you work with existing development teams?",
    answer:
      "I can integrate with your existing team, provide technical leadership, code reviews, and mentoring. I'm experienced in collaborative development environments.",
  },
  {
    question: "What is your development process?",
    answer:
      "I follow agile development practices with regular sprints, code reviews, and client feedback sessions. I provide regular updates and maintain transparent communication throughout the project.",
  },
  {
    question: "Do you offer cloud migration services?",
    answer:
      "Yes, I provide comprehensive cloud migration services, particularly for Azure. This includes architecture assessment, migration planning, implementation, and post-migration optimization.",
  },
]

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "CTO, FinTech Solutions",
//     company: "TechCorp",
//     content:
//       "Hardik delivered an exceptional vendor management system that exceeded our expectations. His expertise in .NET and Angular, combined with his understanding of FinTech requirements, made him the perfect choice for our project.",
//     rating: 5,
//     image: "/placeholder.svg?height=60&width=60",
//   },
//   {
//     name: "Michael Chen",
//     role: "Product Manager",
//     company: "Healthcare Innovations",
//     content:
//       "Working with Hardik was a game-changer for our healthcare platform. His attention to detail and ability to integrate complex systems seamlessly helped us launch on time and within budget.",
//     rating: 5,
//     image: "/placeholder.svg?height=60&width=60",
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Lead Developer",
//     company: "Enterprise Solutions",
//     content:
//       "Hardik's cloud migration expertise helped us move our legacy systems to Azure efficiently. His technical guidance and hands-on approach made the transition smooth and successful.",
//     rating: 5,
//     image: "/placeholder.svg?height=60&width=60",
//   },
//   {
//     name: "David Thompson",
//     role: "Startup Founder",
//     company: "InnovateNow",
//     content:
//       "As a startup, we needed someone who could deliver quickly without compromising quality. Hardik built our MVP in record time and provided valuable technical insights that shaped our product strategy.",
//     rating: 5,
//     image: "/placeholder.svg?height=60&width=60",
//   },
// ]
// const testimonials = [
//   {
//     name: "Jeff Logan",
//     role: "",
//     company: "",
//     country: "United States",
//     image: "/testimonial-images/jeff-l.jpg?height=300&width=500&text=ACF+hardik+soni",
//     content:
//       "Hardik did an outstanding job setting up Google Maps integration using Advanced Custom Fields and our Google API key. The implementation was seamless, everything functions perfectly, and communication was prompt and clear from start to finish. We always trust him with our development work and highly recommend him.",
//     rating: 5,
//     myResponse:
//       "I fixed the google map api key with different design maps using elementor and the client is very happy with it",
//       flag:"/testimonial-images/us.png?height=300&width=500&text=ACF+hardik+soni",
//   },
//       {
//     name: "danieldoerrer",
//     role: "",
//     company: "",
//     country: "Germany",
//     flag: "/testimonial-images/de.png", // Add your Germany flag image path here
//     image: "/testimonial-images/danieldoerrer.jpeg?height=60&width=60", // Replace with actual image if available
//     content:
//       "Enjoyed working with hardik. He is such a great Advance custom field expert. Speedy response and always transparent on progress. Work quality is excellent and I am pleased with the quick support he provided.",
//     rating: 5,
//     myResponse:
//       "In this project client want to get all the custom fields from the backend to front end and they want to fit them into thr datatable with pfd, excel button and i completed that and he is very happy with that",
//   },
//     {
//     name: "maciune",
//     role: "",
//     company: "",
//     country: "Lithuania",
  
//     image: "/testimonial-images/maciune.jpg?height=300&width=500&text=ACF+hardik+soni", // Replace with actual image if available
//     content:
//       "Hardik has done an exceptional job developing the feature to display product feature icons on our product pages. He provided a solution that allows us to select up to four icons from a predefined list, making the user experience both intuitive and flexible. The icons are displayed seamlessly with appropriate validation, ensuring that no more than four features can be selected. The front-end display is clean and responsive, and Hardik ensured that everything works smoothly without any issues. Overall, his attention to detail, efficiency, and quick implementation made the entire process stress-free. Highly recommended for any development tasks!",
//     rating: 5,
//     myResponse:
//       "Client's main requirements were regarding developing the feature to display product feature icons. I used ACF select fields with a custom solution to meet their needs.",
//     flag: "/testimonial-images/lt.png?height=300&width=500&text=ACF+hardik+soni",
//   },
//     {
//     name: "markroberts",
//     role: "",
//     company: "",
//     country: "United Kingdom",
//     flag: "/testimonial-images/gb.png?height=300&width=500&text=ACF+hardik+soni", // Add your UK flag image path here
//     image: "/testimonial-images/markroberts.jpeg?height=60&width=60", // Replace with actual image if available
//     content:
//       "Great seller. Quick and very knowledgeable. Looking forward to working with you again soon.",
//     rating: 5,
//     myResponse:
//       "In this project client wanted to add an extra product description before the hero block in WooCommerce. I fixed it within 30 minutes and the client is very happy with it.",
//   },

//   {
//     name: "nwdesigncompany",
//     role: "",
//     company: "",
//     country: "United Kingdom",
//     flag: "/testimonial-images/gb.png", // Add your UK flag image path here
//     image: "/testimonial-images/nwdesigncompany.jpg?height=60&width=60", // Replace with actual image if available
//     content:
//       "Outstanding work, great communication from the start, fast response and got the job done on the day. Highly recommended will be using again.",
//     rating: 5,
//     myResponse:
//       "In this project the client wanted the Advent calendar setup with ACF fields. I did completely fix that for this client and the client is very happy with my service.",
//   },
//   {
//   name: "stevenfranz",
//   role: "",
//   company: "",
//   country: "Chile",
//   flag: "/testimonial-images/cl.png", // Add your Chile flag image path here
//   image: "/testimonial-images/stevenfranz.jpeg?height=60&width=60", // Replace with actual image if available
//   content:
//     "A great delivery, a great delivery, thanks a lot Hardik.",
//   rating: 5,
//   myResponse:
//     "In this project client needed some difficult conditional changes based on the Advanced Custom Fields and within my expertise I completed that in a few hours. Client is very happy with it.",
// },
// // {
//   //   name: "Sarah Johnson",
//   //   role: "CTO, FinTech Solutions",
//   //   company: "TechCorp",
//   //   country: "",
//   //   image: "/placeholder.svg?height=60&width=60",
//   //   content:
//   //     "Hardik delivered an exceptional vendor management system that exceeded our expectations. His expertise in .NET and Angular, combined with his understanding of FinTech requirements, made him the perfect choice for our project.",
//   //   rating: 5,
//   //   myResponse: "",
//   // },
//   // {
//   //   name: "Michael Chen",
//   //   role: "Product Manager",
//   //   company: "Healthcare Innovations",
//   //   country: "",
//   //   image: "/placeholder.svg?height=60&width=60",
//   //   content:
//   //     "Working with Hardik was a game-changer for our healthcare platform. His attention to detail and ability to integrate complex systems seamlessly helped us launch on time and within budget.",
//   //   rating: 5,
//   //   myResponse: "",
//   // },
//   // {
//   //   name: "Emily Rodriguez",
//   //   role: "Lead Developer",
//   //   company: "Enterprise Solutions",
//   //   country: "",
//   //   image: "/placeholder.svg?height=60&width=60",
//   //   content:
//   //     "Hardik's cloud migration expertise helped us move our legacy systems to Azure efficiently. His technical guidance and hands-on approach made the transition smooth and successful.",
//   //   rating: 5,
//   //   myResponse: "",
//   //   flag:"",
//   // },
//   // {
//   //   name: "David Thompson",
//   //   role: "Startup Founder",
//   //   company: "InnovateNow",
//   //   country: "",
//   //   image: "/placeholder.svg?height=60&width=60",
//   //   content:
//   //     "As a startup, we needed someone who could deliver quickly without compromising quality. Hardik built our MVP in record time and provided valuable technical insights that shaped our product strategy.",
//   //   rating: 5,
//   //   myResponse: "",
//   //   flag:"",
//   // },
// ]
export default function ServicesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleRazorpayPayment = async (amount: number, planName: string) => {
    try {
      // Create order
      const response = await fetch("/api/payment/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, planName }),
      })

      const { orderId, key } = await response.json()

      const options = {
        key,
        amount: amount * 100,
        currency: "USD",
        name: "Hardik Soni",
        description: `Payment for ${planName} plan`,
        order_id: orderId,
        handler: async (response: any) => {
          // Verify payment
          const verifyResponse = await fetch("/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          })

          if (verifyResponse.ok) {
            alert("Payment successful!")
          } else {
            alert("Payment verification failed!")
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#3B82F6",
        },
      }

      const rzp = new (window as any).Razorpay(options)
      rzp.open()
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment failed. Please try again.")
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center gap-4 mb-6">
              <h1 className="text-4xl font-bold">Services & Pricing</h1>
              
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional software development services tailored to your business needs. From full-stack development to
              cloud solutions and technical consulting.
            </p>
          </motion.div>

          {/* Schedule Call Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-16"
          >
            <FilloutPopup /><ShareButton />
          </motion.div> */}

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                  >
                    <Card className="glass-effect border-0 h-full hover:bg-white/20 transition-all duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Hourly Rate:</span>
                            <span className="font-semibold">${service.pricing.hourly}/hour</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Project Rate:</span>
                            <span className="font-semibold">{service.pricing.project}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Pricing Plans */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-2-em left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <Card
                    className={`glass-effect border-0 h-full ${
                      plan.popular ? "ring-2 ring-blue-500 bg-blue-500/5" : ""
                    }`}
                  >
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="text-3xl font-bold gradient-text">
                        ${plan.price.toLocaleString()}
                        <span className="text-sm font-normal text-gray-600 dark:text-gray-400">/{plan.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 h-20">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8 h-20-rem">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full"
                        variant={plan.popular ? "default" : "outline"}
                        onClick={() => handleRazorpayPayment(plan.price, plan.name)}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2> */}
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
          {testimonials[activeTestimonial].role}
          {testimonials[activeTestimonial].role && testimonials[activeTestimonial].company ? " at " : ""}
          {testimonials[activeTestimonial].company}
        </div>
        {testimonials[activeTestimonial].country && (
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {testimonials[activeTestimonial].country}
          </div>
        )}

        {testimonials[activeTestimonial].country && (
  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center justify-center gap-1">

    {testimonials[activeTestimonial].country === "United States" && (
      <img
        src={testimonials[activeTestimonial].flag || "/placeholder.svg"}
        alt={testimonials[activeTestimonial].name}
        className="inline-block w-4 h-4 mr-1 rounded-sm"
        loading="lazy"
      />
    )}

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
         <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1">My Response</div> 
          <div className="text-sm text-gray-700 dark:text-gray-200">
            {testimonials[activeTestimonial].myResponse}
          </div>
        </div>
      )}
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
</Card>
          </motion.div> */}

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <HelpCircle className="mr-3 h-8 w-8 text-blue-500" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-effect border-0">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                    >
                      <span className="font-semibold">{faq.question}</span>
                      <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ArrowRight className="h-5 w-5 transform rotate-90" />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">{faq.answer}</div>
                    </motion.div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-20"
          >
            <Card className="glass-effect border-0">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Let's discuss your requirements and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Get In Touch
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:hardik100nis@gmail.com">Schedule a Call</a>
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
