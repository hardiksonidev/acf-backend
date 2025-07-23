"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DollarSign, Hourglass } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { loadRazorpay } from '@/lib/loadRazorpay';

export default function SupportSection() {
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

  // const handlePurchase = async () => {
  //   if (hours <= 0) {
  //     toast({
  //       title: "Invalid Hours",
  //       description: "Please enter a valid number of hours.",
  //       variant: "destructive",
  //     })
  //     return
  //   }

  //   toast({
  //     title: "Initiating Payment",
  //     description: `Preparing to purchase ${hours} hours for $${totalCost}...`,
  //   })

  //   try {
  //     const response = await fetch("/api/create-payment-intent", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ amount: Number.parseFloat(totalCost), description: `Purchase of ${hours} hours` }),
  //     })

  //     if (response.ok) {
  //       const { clientSecret } = await response.json()
  //       toast({
  //         title: "Payment Intent Created",
  //         description: "Redirecting to payment. (Integration with Stripe.js required)",
  //       })
  //       console.log("Client Secret:", clientSecret)
  //       // In a real app, you would now use clientSecret with Stripe.js or similar:
  //       // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  //       // stripe.confirmCardPayment(clientSecret, { ... });
  //     } else {
  //       const errorData = await response.json()
  //       toast({
  //         title: "Payment Error",
  //         description: errorData.error || "Failed to create payment intent. Please try again.",
  //         variant: "destructive",
  //       })
  //     }
  //   } catch (error) {
  //     console.error("Payment initiation failed:", error)
  //     toast({
  //       title: "Payment Error",
  //       description: "An unexpected error occurred during payment initiation.",
  //       variant: "destructive",
  //     })
  //   }
  // }
  const handlePurchase = async () => {
    if (!hours) return;

    /* 1. Create order on the server */
    const res = await fetch('/api/razorpay/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: totalCost }), // rupees
    });

    if (!res.ok) {
      const errorText = await res.text(); // helpful for debugging
      console.error('Order API failed:', errorText);
      alert('Failed to create Razorpay order. Try again.');
      return;
    }

    const order = await res.json();


    /* 2. Load checkout.js */
    const ok = await loadRazorpay();
    if (!ok) return alert('Unable to load Razorpay SDK');

    /* 3. Open the checkout */
    const rzp = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,           // paise
      currency: order.currency,
      name: 'Hardik Soni - Freelance Web Developer',
      description: `${hours} hrs support`,
      image: '/logo.svg',
      order_id: order.id,
      handler: async (response: any) => {
        // Optional server‑side signature verification
        await fetch('/api/razorpay/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(response),
        });
        alert('Payment successful!');
      },
      prefill: {
        name: 'Hardik Soni',
        email: 'hardiksonidev@gmail.com',
        contact: '8238321218',
      },
      method: {
    upi: true,
    card: true,
    netbanking: true,
    wallet: true,
  },
      theme: { color: '#3399cc' },
        redirect: false,
    });

    rzp.open();
  };
  return (
    <Card className="w-full h-full shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Services & Support</CardTitle>
        <CardDescription>
          Purchase dedicated hours for project support, consultations, or new development.
        </CardDescription>
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
        <Button
          onClick={handlePurchase}
          className="w-full bg-black text-white transition-all duration-300 hover:scale-105"
        >
          Proceed to Payment
        </Button>
        {/* <p className="text-sm text-muted-foreground mt-4 text-center">
          Note: Actual payment integration (e.g., Stripe Checkout, PayPal) requires installing client-side libraries
          (e.g., `@stripe/react-stripe-js`) and securely handling payment elements.
        </p> */}
      </CardContent>
    </Card> 
  )
}
