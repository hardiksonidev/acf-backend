"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, DollarSign } from "lucide-react"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

export default function PluginDownloadSection() {
  const { toast } = useToast()
  const plugins = [
    {
      name: "Advanced Custom Fields Pro Helper",
      description: "A custom plugin to extend ACF Pro functionalities for complex WordPress projects.",
      price: 49.99,
      image: "/placeholder.svg?height=150&width=250",
    },
  ]

  const handlePurchase = async (pluginName: string, amount: number) => {
    toast({
      title: "Initiating Payment",
      description: `Preparing to purchase ${pluginName} for $${amount.toFixed(2)}...`,
    })

    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, description: `Purchase of ${pluginName}` }),
      })

      if (response.ok) {
        const { clientSecret } = await response.json()
        toast({
          title: "Payment Intent Created",
          description: "Redirecting to payment. (Integration with Stripe.js required)",
        })
        console.log("Client Secret:", clientSecret)
        // In a real app, you would now use clientSecret with Stripe.js or similar:
        // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        // stripe.confirmCardPayment(clientSecret, { ... });
      } else {
        const errorData = await response.json()
        toast({
          title: "Payment Error",
          description: errorData.error || "Failed to create payment intent. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Payment initiation failed:", error)
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred during payment initiation.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="lg:col-span-2 w-full shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Products & Plugins</CardTitle>
        <CardDescription>Download my custom-built WordPress plugins to enhance your website.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-6">
        {plugins.map((plugin, index) => (
          <Card
            key={index}
            className="flex flex-col md:flex-row items-center p-4 gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <Image
              src={plugin.image || "/placeholder.svg"}
              alt={plugin.name}
              width={150}
              height={150}
              className="object-cover rounded-md"
            />
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-semibold mb-1">{plugin.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{plugin.description}</p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">{plugin.price.toFixed(2)}</span>
              </div>
            </div>
            <Button
              onClick={() => handlePurchase(plugin.name, plugin.price)}
              className="bg-black text-white w-full md:w-auto transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" /> Buy Now
            </Button>
          </Card>
        ))}
        {/* <p className="text-sm text-muted-foreground mt-4 text-center">
          Note: Actual payment integration (e.g., Stripe, PayPal) requires installing client-side libraries (e.g.,
          `@stripe/react-stripe-js`) and securely handling payment elements.
        </p> */}
      </CardContent>
    </Card>
  )
}
