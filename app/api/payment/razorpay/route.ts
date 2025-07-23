import { type NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"
import { connectDB } from "@/lib/database"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = "USD", planName } = await request.json()

    const options = {
      amount: amount * 100, // amount in paise
      currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        planName,
      },
    }

    const order = await razorpay.orders.create(options)

    // Save order to database
    const db = await connectDB()
    await db.collection("orders").insertOne({
      orderId: order.id,
      amount,
      currency,
      planName,
      status: "created",
      createdAt: new Date(),
    })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
    })
  } catch (error) {
    console.error("Razorpay order creation error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
