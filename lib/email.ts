import nodemailer from "nodemailer"

// Create transporter for both local and production
const createTransporter = () => {
  if (process.env.NODE_ENV === "production") {
    // Production - using SendGrid/Gmail/etc
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "hardiksfreelancer@gmail.com",
        pass: process.env.EMAIL_PASS || "yfaz recg twtt qwer",
      },
    })
  } else {
    // Local development - using Ethereal Email for testing
    return nodemailer.createTransport({
      // host: "smtp.ethereal.email",
      // port: 587,
      // auth: {
      //   user: process.env.ETHEREAL_USER || "ethereal.user@ethereal.email",
      //   pass: process.env.ETHEREAL_PASS || "ethereal.pass",
      // },
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: 587,
       secure: false,
      auth: {
        user: process.env.EMAIL_USER || "hardiksfreelancer@gmail.com",
        pass: process.env.EMAIL_PASS || "yfaz recg twtt qwer",
      },
    })
  }
}

export async function sendWelcomeEmail(email: string, name: string) {
  const transporter = createTransporter()

  const mailOptions = {
    from: process.env.EMAIL_FROM || "hardiksfreelancer@gmail.com",
    to: email,
    subject: "Welcome to Hardik Soni's Portfolio!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #3B82F6;">Welcome ${name}!</h1>
        <p>Thank you for signing up to my portfolio website. You can now:</p>
        <ul>
          <li>Comment on blog posts</li>
          <li>Get notified about new content</li>
          <li>Access exclusive resources</li>
        </ul>
        <p>Best regards,<br>Hardik Soni</p>
        <p style="color: #666; font-size: 12px;">
          Senior Software Technologist | .NET & Angular Expert
        </p>
      </div>
    `,
  }

  const info = await transporter.sendMail(mailOptions)
  console.log("Welcome email sent:", info.messageId)
  return info
}

export async function sendCommentNotification({
  blogSlug,
  content,
  userName,
  userEmail,
}: {
  blogSlug: string
  content: string
  userName: string
  userEmail: string
}) {
  const transporter = createTransporter()

  const mailOptions = {
    from: process.env.EMAIL_FROM || "hardiksfreelancer@gmail.com",
    to: "hardiksfreelancer@gmail.com",
    subject: `New Comment on Blog: ${blogSlug}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">New Comment Received</h2>
        <p><strong>Blog Post:</strong> ${blogSlug}</p>
        <p><strong>From:</strong> ${userName} (${userEmail})</p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Comment:</strong></p>
          <p>${content}</p>
        </div>
        <p><a href="https://hardik-soni.dev/blog/${blogSlug}" style="color: #3B82F6;">View Comment</a></p>
      </div>
    `,
  }

  const info = await transporter.sendMail(mailOptions)
  console.log("Comment notification sent:", info.messageId)
  return info
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const transporter = createTransporter()

  const mailOptions = {
    from: process.env.EMAIL_FROM || "hardiksfreelancer@gmail.com",
    to: "hardiksfreelancer@gmail.com",
    subject: `Contact Form: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
        <p><a href="mailto:${email}" style="color: #3B82F6;">Reply to ${name}</a></p>
      </div>
    `,
  }

  const info = await transporter.sendMail(mailOptions)
  console.log("Contact email sent:", info.messageId)
  return info
}

export async function sendPaymentConfirmation({
  orderId,
  amount,
  planName,
}: {
  orderId: string
  amount: number
  planName: string
}) {
  const transporter = createTransporter()

  const mailOptions = {
    from: process.env.EMAIL_FROM || "hardiksfreelancer@gmail.com",
    to: "hardiksfreelancer@gmail.com",
    subject: `Payment Received - ${planName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10B981;">Payment Received!</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Plan:</strong> ${planName}</p>
        <p><strong>Amount:</strong> $${amount}</p>
        <p><strong>Status:</strong> Paid</p>
        <p>Thank you for your payment. I'll be in touch soon!</p>
        <p>Best regards,<br>Hardik Soni</p>
      </div>
    `,
  }

  const info = await transporter.sendMail(mailOptions)
  console.log("Payment confirmation sent:", info.messageId)
  return info
}
