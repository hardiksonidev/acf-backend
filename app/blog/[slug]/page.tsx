"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import {
  Calendar,
  Clock,
  Eye,
  MessageCircle,
  Share2,
  Heart,
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Play,
  Send,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

// Mock blog data - in real app, this would come from CMS or API
const blogPost = {
  id: 1,
  title: "Building Scalable FinTech Applications with .NET Core and Angular",
  content: `
    <p>In today's rapidly evolving financial technology landscape, building scalable and robust applications is crucial for success. Throughout my experience at Tata Capital Housing Finance Limited, I've learned valuable lessons about architecting enterprise-grade FinTech solutions.</p>
    
    <h2>The Challenge</h2>
    <p>When we started building our vendor empanelment system, we faced several challenges:</p>
    <ul>
      <li>Complex validation requirements for PAN, MSME, and GST</li>
      <li>Real-time integration with multiple third-party services</li>
      <li>Dynamic form generation based on JSON configurations</li>
      <li>Multi-level approval workflows</li>
    </ul>
    
    <h2>Architecture Overview</h2>
    <p>Our solution leveraged a modern tech stack combining .NET Core for the backend and Angular for the frontend. Here's how we structured the application:</p>
    
    <h3>Backend Architecture</h3>
    <p>We implemented a clean architecture pattern with the following layers:</p>
    <ul>
      <li><strong>API Layer:</strong> ASP.NET Core Web API controllers</li>
      <li><strong>Business Logic:</strong> Service layer with dependency injection</li>
      <li><strong>Data Access:</strong> Entity Framework Core with repository pattern</li>
      <li><strong>Integration:</strong> Dedicated services for third-party API calls</li>
    </ul>
    
    <h3>Frontend Implementation</h3>
    <p>The Angular frontend featured:</p>
    <ul>
      <li>Dynamic form generation using JSON configurations</li>
      <li>Real-time validation with custom validators</li>
      <li>Responsive design with Angular Material</li>
      <li>State management using NgRx</li>
    </ul>
    
    <h2>Key Implementation Details</h2>
    
    <h3>JSON-Driven Form Engine</h3>
    <p>One of the most innovative aspects of our solution was the JSON-driven form engine. This allowed us to:</p>
    <ul>
      <li>Configure forms without code changes</li>
      <li>Implement complex validation rules</li>
      <li>Support conditional field visibility</li>
      <li>Enable rapid deployment of new form configurations</li>
    </ul>
    
    <h3>Real-time Validation Integration</h3>
    <p>We integrated with multiple validation services:</p>
    <ul>
      <li><strong>PAN Validation:</strong> Real-time verification through government APIs</li>
      <li><strong>MSME Verification:</strong> Integration with MSME database</li>
      <li><strong>GST Validation:</strong> Live GST number verification</li>
      <li><strong>CIBIL Integration:</strong> Credit score and history checks</li>
    </ul>
    
    <h2>Performance Optimization</h2>
    <p>To ensure optimal performance, we implemented several strategies:</p>
    <ul>
      <li>Async/await patterns for all I/O operations</li>
      <li>Caching strategies using Redis</li>
      <li>Database query optimization</li>
      <li>Frontend lazy loading and code splitting</li>
    </ul>
    
    <h2>Security Considerations</h2>
    <p>Security was paramount in our FinTech application:</p>
    <ul>
      <li>JWT-based authentication and authorization</li>
      <li>Data encryption at rest and in transit</li>
      <li>Input validation and sanitization</li>
      <li>Audit logging for all transactions</li>
    </ul>
    
    <h2>Lessons Learned</h2>
    <p>Through this project, I learned several valuable lessons:</p>
    <ul>
      <li>The importance of flexible architecture in FinTech</li>
      <li>How JSON-driven configurations can accelerate development</li>
      <li>The critical role of real-time validations in user experience</li>
      <li>The need for comprehensive testing in financial applications</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>Building scalable FinTech applications requires careful consideration of architecture, security, and user experience. The combination of .NET Core and Angular provides a powerful foundation for creating robust financial solutions.</p>
    
    <p>The key to success lies in understanding the domain requirements, implementing flexible architectures, and maintaining a focus on security and performance throughout the development process.</p>
  `,
  date: "2024-01-15",
  readTime: "8 min read",
  tags: [".NET Core", "Angular", "FinTech", "Architecture"],
  slug: "building-scalable-fintech-applications",
  image: "/placeholder.svg?height=400&width=800&text=FinTech+Development",
  views: 1250,
  comments: 12,
  likes: 89,
  author: {
    name: "Hardik Soni",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Senior Software Technologist with 6+ years of experience in enterprise applications",
  },
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video
}

const relatedPosts = [
  {
    id: 2,
    title: "JSON-Driven Form Engines: A Deep Dive",
    slug: "json-driven-form-engines",
    image: "/placeholder.svg?height=200&width=300&text=Dynamic+Forms",
  },
  {
    id: 3,
    title: "Azure Integration Patterns for Enterprise",
    slug: "azure-integration-patterns",
    image: "/placeholder.svg?height=200&width=300&text=Azure+Integration",
  },
]

const allPosts = [
  { id: 1, title: "Building Scalable FinTech Applications", slug: "building-scalable-fintech-applications" },
  { id: 2, title: "JSON-Driven Form Engines: A Deep Dive", slug: "json-driven-form-engines" },
  { id: 3, title: "Azure Integration Patterns for Enterprise", slug: "azure-integration-patterns" },
  { id: 4, title: "CQRS Pattern Implementation", slug: "cqrs-pattern-implementation" },
]

const comments = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2 days ago",
    content:
      "Excellent article! The JSON-driven form engine approach is brilliant. We're implementing something similar in our project.",
    likes: 5,
    userId: "user1",
  },
  {
    id: 2,
    author: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "3 days ago",
    content: "Great insights on FinTech architecture. The security considerations section was particularly helpful.",
    likes: 3,
    userId: "user2",
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "4 days ago",
    content: "Thanks for sharing your experience with real-time validations. Very practical examples!",
    likes: 2,
    userId: "user3",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [liked, setLiked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Mock login state
  const [currentUser, setCurrentUser] = useState(null)

  // Find current post index for navigation
  const currentPostIndex = allPosts.findIndex((post) => post.slug === params.slug)
  const previousPost = currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null
  const nextPost = currentPostIndex < allPosts.length - 1 ? allPosts[currentPostIndex + 1] : null

  const shareUrl = `https://hardik-soni.dev/blog/${params.slug}`
  const shareTitle = blogPost.title

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(
        shareTitle,
      )}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    }

    if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl)
      alert("Link copied to clipboard!")
      return
    }

    window.open(urls[platform as keyof typeof urls], "_blank", "width=600,height=400")
    setShowShareMenu(false)
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoggedIn) {
      alert("Please login to comment")
      return
    }
    if (newComment.trim()) {
      // Here you would typically send the comment to your backend
      console.log("New comment:", newComment)
      setNewComment("")
      alert("Comment submitted successfully!")
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild>
              <Link href="/blog" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Blog</span>
              </Link>
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-bold mb-6">{blogPost.title}</h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Published 2 days ago</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{blogPost.views} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{blogPost.comments} comments</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLiked(!liked)}
                  className={liked ? "text-red-500" : ""}
                >
                  <Heart className={`h-4 w-4 mr-2 ${liked ? "fill-current" : ""}`} />
                  {blogPost.likes + (liked ? 1 : 0)}
                </Button>

                <div className="relative">
                  <Button variant="ghost" size="sm" onClick={() => setShowShareMenu(!showShareMenu)}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>

                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border p-2 z-10"
                    >
                      <div className="flex flex-col space-y-2">
                        <Button variant="ghost" size="sm" onClick={() => handleShare("facebook")}>
                          <Facebook className="h-4 w-4 mr-2" />
                          Facebook
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleShare("twitter")}>
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleShare("linkedin")}>
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleShare("copy")}>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Link
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4 p-6 rounded-lg glass-effect mb-8">
              <Avatar className="h-12 w-12">
                <AvatarImage src={blogPost.author.avatar || "/placeholder.svg"} alt={blogPost.author.name} />
                <AvatarFallback>HS</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{blogPost.author.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{blogPost.author.bio}</div>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="glass-effect border-0">
              <CardContent className="p-8">
                {/* Video Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Play className="h-5 w-5 mr-2 text-blue-500" />
                    Watch the Implementation
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe src={blogPost.videoUrl} title="Blog Video" className="w-full h-full" allowFullScreen />
                  </div>
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-lg dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Comments Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <Card className="glass-effect border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-blue-500" />
                  Comments ({comments.length})
                </h3>

                {/* Comment Form */}
                {isLoggedIn ? (
                  <form onSubmit={handleCommentSubmit} className="mb-8">
                    <div className="flex space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>
                          <User className="h-5 w-5" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-4">
                        <Textarea
                          placeholder="Write a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          rows={3}
                        />
                        <Button type="submit" disabled={!newComment.trim()}>
                          <Send className="h-4 w-4 mr-2" />
                          Post Comment
                        </Button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="mb-8 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <p className="text-center text-gray-600 dark:text-gray-400">
                      <Link href="/auth/login" className="text-blue-500 hover:underline">
                        Login
                      </Link>{" "}
                      or{" "}
                      <Link href="/auth/signup" className="text-blue-500 hover:underline">
                        Sign up
                      </Link>{" "}
                      to leave a comment
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                        <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold">{comment.author}</span>
                          <span className="text-sm text-gray-500">{comment.date}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">{comment.content}</p>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          {comment.likes}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-8">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Card key={post.id} className="glass-effect border-0 hover:bg-white/20 transition-all duration-300">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">{post.title}</h4>
                    <Button variant="ghost" asChild className="p-0 h-auto">
                      <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:text-blue-600">
                        Read More →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Next/Previous Post Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="glass-effect border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  {previousPost ? (
                    <Button variant="ghost" asChild>
                      <Link href={`/blog/${previousPost.slug}`} className="flex items-center space-x-2">
                        <ArrowLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-sm text-gray-500">Previous Post</div>
                          <div className="font-semibold">{previousPost.title}</div>
                        </div>
                      </Link>
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  {nextPost ? (
                    <Button variant="ghost" asChild>
                      <Link href={`/blog/${nextPost.slug}`} className="flex items-center space-x-2">
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Next Post</div>
                          <div className="font-semibold">{nextPost.title}</div>
                        </div>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <div></div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
