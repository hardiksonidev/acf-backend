import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { connectDB } from "@/lib/database"
import { sendPaymentConfirmation } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json()

    const sign = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign.toString())
      .digest("hex")

    if (razorpay_signature === expectedSign) {
      // Payment is valid
      const db = await connectDB()
      await db.collection("orders").updateOne(
        { orderId: razorpay_order_id },
        {
          $set: {
            paymentId: razorpay_payment_id,
            signature: razorpay_signature,
            status: "paid",
            paidAt: new Date(),
          },
        },
      )

      // Send confirmation email
      const order = await db.collection("orders").findOne({ orderId: razorpay_order_id })
      if (order) {
        await sendPaymentConfirmation({
          orderId: razorpay_order_id,
          amount: order.amount,
          planName: order.planName,
        })
      }

      return NextResponse.json({ message: "Payment verified successfully" })
    } else {
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 })
    }
  } catch (error) {
    console.error("Payment verification error:", error)
    return NextResponse.json({ error: "Payment verification failed" }, { status: 500 })
  }
}
