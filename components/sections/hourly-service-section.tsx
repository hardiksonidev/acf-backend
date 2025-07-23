"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DollarSign, Hourglass } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function HourlyServiceSection() {
  const [hours, setHours] = useState(1)
  const hourlyRate = 15.0 // Your hourly rate
  const totalCost = (hours * hourlyRate).toFixed(2)
  const { toast } = useToast()

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setHours(value)
    } else if (e.target.value === "") {
      setHours(0) // Allow empty input temporarily
    }
  }

  const handlePurchase = () => {
    if (hours <= 0) {
      toast({
        title: "Invalid Hours",
        description: "Please enter a valid number of hours.",
        variant: "destructive",
      })
      return
    }
    // Simulate payment process
    toast({
      title: "Purchase Initiated",
      description: `You are about to purchase ${hours} hours for $${totalCost}. (Payment gateway integration needed)`,
    })
    console.log(`Purchasing ${hours} hours for $${totalCost}`)
    // In a real application, this would redirect to a payment gateway or trigger a server-side payment process.
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Purchase My Services</CardTitle>
        <CardDescription>Book my freelance services by the hour for your web development needs.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2 flex-grow">
            <Label htmlFor="hours" className="text-lg">
              Number of Hours
            </Label>
            <Input
              id="hours"
              type="number"
              value={hours === 0 ? "" : hours} // Display empty string for 0 to allow user to clear
              onChange={handleHoursChange}
              min="1"
              placeholder="e.g., 10"
              className="text-center text-lg"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Hourglass className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">{hourlyRate.toFixed(2)}/hr</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <span className="text-xl font-semibold">Total Cost:</span>
          <div className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold">{totalCost}</span>
          </div>
        </div>
        <Button onClick={handlePurchase} className="w-full bg-black text-white">
          Proceed to Payment
        </Button>
        {/* <p className="text-sm text-muted-foreground mt-4 text-center">
          Note: Actual payment integration (e.g., Stripe Checkout, PayPal) would require backend setup and API calls.
          This button is a placeholder.
        </p> */}
      </CardContent>
    </Card>
  )
}
