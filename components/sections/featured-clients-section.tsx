import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function FeaturedClientsSection() {
  const clients = [
    {
      name: "Client A",
      logo: "/placeholder.svg?height=64&width=64",
      testimonial: "Hardik delivered exceptional quality and was a pleasure to work with.",
    },
    {
      name: "Client B",
      logo: "/placeholder.svg?height=64&width=64",
      testimonial: "Highly recommend Hardik for any web development needs. Professional and efficient.",
    },
    {
      name: "Client C",
      logo: "/placeholder.svg?height=64&width=64",
      testimonial: "Our project was completed on time and exceeded our expectations.",
    },
  ]

  return (
    <Card className="w-full shadow-lg transition-all duration-300 hover:scale-[1.005] hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Featured Clients</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client, index) => (
          <Card
            key={index}
            className="flex flex-col items-center text-center p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <Avatar className="h-16 w-16 mb-4">
              <AvatarImage src={client.logo || "/placeholder.svg"} alt={client.name} />
              <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h4 className="text-lg font-semibold mb-2">{client.name}</h4>
            <p className="text-sm text-muted-foreground italic">"{client.testimonial}"</p>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
