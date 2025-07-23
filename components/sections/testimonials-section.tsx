import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Hardik delivered exceptional quality and was a pleasure to work with. Highly recommended!",
      author: "Jane Doe",
      title: "CEO, Tech Solutions",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      quote:
        "Professional, efficient, and truly understood our needs. Our project was completed on time and exceeded our expectations.",
      author: "John Smith",
      title: "Project Manager, Global Corp",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      quote:
        "Hardik's expertise in WordPress and ACF is unparalleled. He transformed our website into a powerful marketing tool.",
      author: "Alice Johnson",
      title: "Marketing Director, Creative Agency",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  ]

  return (
    <Card className="w-full shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Client Testimonials</CardTitle>
        <CardDescription>What my clients say about my work.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-6 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <Quote className="h-8 w-8 text-muted-foreground mb-4" />
            <p className="text-md italic mb-4 flex-grow">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <Avatar className="h-12 w-12">
                <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                <AvatarFallback>
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
