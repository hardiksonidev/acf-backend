import { type NextRequest, NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email"
import { connectDB } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Save to database
    // const db = await connectDB()
    // await db.collection("contacts").insertOne({
    //   name,
    //   email,
    //   subject,
    //   message,
    //   createdAt: new Date(),
    //   status: "new",
    // })

    // Send email notification
    await sendContactEmail({ name, email, subject, message })

    return NextResponse.json({ message: "Message sent successfully" })
  } catch (error) {
    console.error("Contact error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
