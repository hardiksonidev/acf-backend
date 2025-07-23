"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Calendar, Clock, ArrowRight, Tag, Filter, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable FinTech Applications with .NET Core and Angular",
    excerpt:
      "Learn how to architect and develop enterprise-grade FinTech applications using modern .NET Core and Angular technologies, with real-world examples from my experience at Tata Capital.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: [".NET Core", "Angular", "FinTech", "Architecture"],
    slug: "building-scalable-fintech-applications",
    image: "/placeholder.svg?height=200&width=400&text=FinTech+Development",
    views: 1250,
    comments: 12,
  },
  {
    id: 2,
    title: "JSON-Driven Form Engines: A Deep Dive into Dynamic UI Generation",
    excerpt:
      "Explore the implementation of JSON-driven form engines that enable dynamic UI generation, validation, and workflow management in enterprise applications.",
    date: "2024-01-08",
    readTime: "12 min read",
    tags: ["Angular", "JSON", "Dynamic Forms", "Enterprise"],
    slug: "json-driven-form-engines",
    image: "/placeholder.svg?height=200&width=400&text=Dynamic+Forms",
    views: 980,
    comments: 8,
  },
  {
    id: 3,
    title: "Azure Integration Patterns for Enterprise Applications",
    excerpt:
      "Discover best practices for integrating Azure services like Functions, Key Vault, and Cosmos DB in enterprise applications, based on real-world implementations.",
    date: "2024-01-01",
    readTime: "10 min read",
    tags: ["Azure", "Cloud", "Integration", "Best Practices"],
    slug: "azure-integration-patterns",
    image: "/placeholder.svg?height=200&width=400&text=Azure+Integration",
    views: 1450,
    comments: 15,
  },
  {
    id: 4,
    title: "CQRS Pattern Implementation in ASP.NET Core",
    excerpt:
      "A comprehensive guide to implementing the Command Query Responsibility Segregation (CQRS) pattern in ASP.NET Core applications for better scalability and maintainability.",
    date: "2023-12-25",
    readTime: "15 min read",
    tags: ["CQRS", "ASP.NET Core", "Architecture", "Design Patterns"],
    slug: "cqrs-pattern-implementation",
    image: "/placeholder.svg?height=200&width=400&text=CQRS+Pattern",
    views: 2100,
    comments: 23,
  },
  {
    id: 5,
    title: "Real-time Validation Systems: Integrating Multiple APIs",
    excerpt:
      "Learn how to build robust real-time validation systems that integrate with multiple third-party APIs like PAN, MSME, GST, and CIBIL for comprehensive data verification.",
    date: "2023-12-18",
    readTime: "9 min read",
    tags: ["API Integration", "Validation", "Real-time", "Third-party"],
    slug: "real-time-validation-systems",
    image: "/placeholder.svg?height=200&width=400&text=API+Integration",
    views: 875,
    comments: 6,
  },
  {
    id: 6,
    title: "From Healthcare to FinTech: Lessons Learned Across Domains",
    excerpt:
      "Insights and lessons learned from working across different domains including Healthcare, Construction, and FinTech, and how domain knowledge impacts software architecture decisions.",
    date: "2023-12-11",
    readTime: "7 min read",
    tags: ["Career", "Domain Knowledge", "Software Architecture", "Lessons"],
    slug: "lessons-learned-across-domains",
    image: "/placeholder.svg?height=200&width=400&text=Career+Lessons",
    views: 1320,
    comments: 18,
  },
]

const categories = [
  { name: "All Posts", count: blogPosts.length, id: "all" },
  { name: ".NET Core", count: 3, id: ".NET Core" },
  { name: "Angular", count: 2, id: "Angular" },
  { name: "Azure", count: 2, id: "Azure" },
  { name: "Architecture", count: 3, id: "Architecture" },
  { name: "FinTech", count: 2, id: "FinTech" },
  { name: "API Integration", count: 1, id: "API Integration" },
  { name: "Career", count: 1, id: "Career" },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [visiblePosts, setVisiblePosts] = useState(3)

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.tags.includes(activeCategory)
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const displayedPosts = filteredPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < filteredPosts.length

  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, filteredPosts.length))
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
            <h1 className="text-4xl font-bold mb-6">Technical Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Sharing insights, experiences, and technical knowledge from my journey as a Senior Software Technologist.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                {/* Search */}
                <Card className="glass-effect border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </h3>
                    <Input
                      placeholder="Search posts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-transparent"
                    />
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card className="glass-effect border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Filter className="mr-2 h-4 w-4" />
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <motion.button
                          key={category.id}
                          onClick={() => {
                            setActiveCategory(category.id)
                            setVisiblePosts(3) // Reset visible posts when changing category
                          }}
                          className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-200 text-left ${
                            activeCategory === category.id
                              ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                              : "hover:bg-white/10"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-sm font-medium">{category.name}</span>
                          <Badge variant={activeCategory === category.id ? "default" : "secondary"} className="text-xs">
                            {category.count}
                          </Badge>
                        </motion.button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <p className="text-gray-600 dark:text-gray-400">
                  Showing {displayedPosts.length} of {filteredPosts.length} posts
                  {activeCategory !== "all" && ` in "${activeCategory}"`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory}-${searchTerm}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {displayedPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      layout
                    >
                      <Card className="glass-effect border-0 hover:bg-white/20 transition-all duration-300 group overflow-hidden">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardContent className="md:w-2/3 p-8">
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {post.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="text-xs cursor-pointer hover:bg-blue-500/20"
                                  onClick={() => {
                                    setActiveCategory(tag)
                                    setVisiblePosts(3)
                                  }}
                                >
                                  <Tag className="h-3 w-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>{post.views} views</span>
                                <span>{post.comments} comments</span>
                              </div>
                              <Button variant="ghost" asChild className="p-0 h-auto">
                                <Link
                                  href={`/blog/${post.slug}`}
                                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                                >
                                  <span>Read More</span>
                                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <Card className="glass-effect border-0">
                    <CardContent className="p-12">
                      <h3 className="text-xl font-semibold mb-4">No posts found</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Try adjusting your search terms or category filter.
                      </p>
                      <Button
                        onClick={() => {
                          setActiveCategory("all")
                          setSearchTerm("")
                          setVisiblePosts(3)
                        }}
                      >
                        Clear Filters
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Load More */}
              {hasMorePosts && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-center mt-12"
                >
                  <Button onClick={loadMorePosts} variant="outline" size="lg">
                    Load More Posts ({filteredPosts.length - visiblePosts} remaining)
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
