// import { NextResponse } from "next/server"
// import Stripe from "stripe"

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2024-04-10", // Use your desired API version
// })

// export async function POST(req: Request) {
//   try {
//     const { amount, currency = "usd", description } = await req.json()

//     // Validate amount
//     if (!amount || amount <= 0) {
//       return NextResponse.json({ error: "Amount must be a positive integer." }, { status: 400 })
//     }

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: Math.round(amount * 100), // Stripe expects amount in cents
//       currency: currency,
//       description: description || "Portfolio service/plugin purchase",
//       automatic_payment_methods: { enabled: true },
//     })

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret }, { status: 200 })
//   } catch (error: any) {
//     console.error("Error creating payment intent:", error.message)
//     return NextResponse.json({ error: error.message }, { status: 500 })
//   }
// }
