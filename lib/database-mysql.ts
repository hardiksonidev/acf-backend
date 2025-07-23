import mysql from "mysql2/promise"

let connection: mysql.Connection | null = null

export async function connectDB() {
  if (connection) {
    return connection
  }

  connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost:3306",
    user: process.env.DB_USER || "blog",
    password: process.env.DB_PASSWORD || "pfRU3afTBU8KRD3E1IBR4mvS",
    database: process.env.DB_NAME || "portfolio_db",
  })

  return connection
}

// User operations
export async function createUser(name: string, email: string, hashedPassword: string) {
  const db = await connectDB()
  const [result] = await db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
    name,
    email,
    hashedPassword,
  ])
  return result
}

export async function getUserByEmail(email: string) {
  const db = await connectDB()
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email])
  return (rows as any[])[0]
}

// Comment operations
export async function createComment(
  blogSlug: string,
  content: string,
  userId: number,
  userName: string,
  userEmail: string,
) {
  const db = await connectDB()
  const [result] = await db.execute(
    "INSERT INTO comments (blog_slug, content, user_id, user_name, user_email) VALUES (?, ?, ?, ?, ?)",
    [blogSlug, content, userId, userName, userEmail],
  )
  return result
}

export async function getCommentsByBlogSlug(blogSlug: string) {
  const db = await connectDB()
  const [rows] = await db.execute("SELECT * FROM comments WHERE blog_slug = ? ORDER BY created_at DESC", [blogSlug])
  return rows
}

// Contact operations
export async function createContact(name: string, email: string, subject: string, message: string) {
  const db = await connectDB()
  const [result] = await db.execute("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)", [
    name,
    email,
    subject,
    message,
  ])
  return result
}

// Order operations
export async function createOrder(orderId: string, amount: number, currency: string, planName: string) {
  const db = await connectDB()
  const [result] = await db.execute("INSERT INTO orders (order_id, amount, currency, plan_name) VALUES (?, ?, ?, ?)", [
    orderId,
    amount,
    currency,
    planName,
  ])
  return result
}

export async function updateOrderPayment(orderId: string, paymentId: string, signature: string) {
  const db = await connectDB()
  const [result] = await db.execute(
    "UPDATE orders SET payment_id = ?, signature = ?, status = 'paid', paid_at = NOW() WHERE order_id = ?",
    [paymentId, signature, orderId],
  )
  return result
}
