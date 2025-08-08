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


// import nodemailer from 'nodemailer';
// import { parse } from 'querystring';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   // CORS headers
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   if (req.method === 'OPTIONS') return res.status(200).end();
//   if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

//   // Parse form body
//   let body = '';
//   req.on('data', chunk => {
//     body += chunk.toString();
//   });

//   req.on('end', async () => {
//     const { name, email, subject, message } = parse(body);

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     try {
//       await transporter.sendMail({
//         from: email,
//         to: process.env.MAIL_USER,
//         subject: subject || `New Contact Form Submission from ${name}`,
//         text: message,
//       });

//       res.status(200).send('Email sent successfully');
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Email sending failed');
//     }
//   });
// }

