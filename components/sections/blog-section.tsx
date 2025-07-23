import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, ExternalLink } from "lucide-react"
import Link from "next/link"
import SocialMediaSection from "./social-media-section"
import { Linkedin, Github, Twitter, Facebook, LinkIcon } from "lucide-react"

export default function BlogSection() {
    const socialLinks = [
    // { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: Linkedin },
    { name: "GitHub", url: "https://github.com/hardiksdev", icon: Github },
    // { name: "Twitter", url: "https://twitter.com/yourprofile", icon: Twitter },
    // { name: "Facebook", url: "https://facebook.com/yourprofile", icon: Facebook },
    { name: "Fiverr", url: "https://www.fiverr.com/hardik39945/", icon: LinkIcon }, // Using LinkIcon for Fiverr/Upwork
    { name: "Upwork", url: "https://www.upwork.com/freelancers/devhardik", icon: LinkIcon },
  ]
  return (
    <Card className="w-full shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">My Blog & Insights</CardTitle>
        <CardDescription>
          Explore my insights, tutorials, and thoughts on web development and technology.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <p className="text-md leading-relaxed">
          I regularly share my knowledge and experiences on my blog. You'll find articles on WordPress, .Net Core,
          Angular, and various web development best practices.
        </p>
        <Button asChild className="bg-black text-white transition-all duration-300 hover:scale-105">
          <Link href="https://your-blog-site.com" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Visit My Blog
          </Link>
        </Button>

      </CardContent>
            <CardHeader>
        <CardTitle className="text-2xl font-bold">Connect With Me</CardTitle>
      </CardHeader>
            <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {socialLinks.map((platform, index) => (
          <Button
            key={index}
            asChild
            variant="outline"
            className="flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Link href={platform.url} target="_blank" rel="noopener noreferrer">
              <platform.icon className="h-5 w-5" />
              <span>{platform.name}</span>
            </Link>
          </Button>
        ))}
      </CardContent>
            <CardContent className="space-y-4 text-center">
        <BarChart className="h-16 w-16 text-primary mx-auto mb-4" />
        <p className="text-lg font-semibold">Total Visitors: 12,345</p>
      </CardContent>
    </Card>

  )
}
