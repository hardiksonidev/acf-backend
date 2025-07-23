import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { connectDB } from "@/lib/database"
import { sendCommentNotification } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value

    if (!token) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key") as any
    const { blogSlug, content } = await request.json()

    if (!blogSlug || !content) {
      return NextResponse.json({ error: "Blog slug and content are required" }, { status: 400 })
    }

    const db = await connectDB()
    const user = await db.collection("users").findOne({ _id: decoded.userId })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const comment = {
      blogSlug,
      content,
      userId: user._id,
      userName: user.name,
      userEmail: user.email,
      createdAt: new Date(),
      likes: 0,
    }

    const result = await db.collection("comments").insertOne(comment)

    // Send notification email to admin
    await sendCommentNotification({
      blogSlug,
      content,
      userName: user.name,
      userEmail: user.email,
    })

    return NextResponse.json({
      message: "Comment added successfully",
      comment: {
        id: result.insertedId,
        ...comment,
      },
    })
  } catch (error) {
    console.error("Comment error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const blogSlug = searchParams.get("blogSlug")

    if (!blogSlug) {
      return NextResponse.json({ error: "Blog slug is required" }, { status: 400 })
    }

    const db = await connectDB()
    const comments = await db.collection("comments").find({ blogSlug }).sort({ createdAt: -1 }).toArray()

    return NextResponse.json({ comments })
  } catch (error) {
    console.error("Get comments error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
