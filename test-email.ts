import nodemailer from "nodemailer"

async function sendTestEmail() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "hardiksfreelancer@gmail.com",
      pass: "yfaz recg twtt qwer", // Replace with Gmail App Password
    },
  })

  const info = await transporter.sendMail({
    from: '"Hardik Portfolio" <hardiksfreelancer@gmail.com>',
    to: "hardiksfreelancer@gmail.com",
    subject: "✅ Gmail SMTP Test",
    text: "If you're seeing this, your SMTP config is working!",
  })

  console.log("✅ Email sent:", info.messageId)
}

sendTestEmail().catch(console.error)
