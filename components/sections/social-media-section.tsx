import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Twitter, Facebook, LinkIcon } from "lucide-react"
import Link from "next/link"

export default function SocialMediaSection() {
  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: Linkedin },
    { name: "GitHub", url: "https://github.com/yourprofile", icon: Github },
    { name: "Twitter", url: "https://twitter.com/yourprofile", icon: Twitter },
    { name: "Facebook", url: "https://facebook.com/yourprofile", icon: Facebook },
    { name: "Fiverr", url: "https://www.fiverr.com/yourprofile", icon: LinkIcon }, // Using LinkIcon for Fiverr/Upwork
    { name: "Upwork", url: "https://www.upwork.com/freelancers/~yourprofile", icon: LinkIcon },
  ]

  return (
    <Card className="w-full shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Connect With Me</CardTitle>
        <CardDescription>Find me on social media and professional platforms.</CardDescription>
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
    </Card>
  )
}
