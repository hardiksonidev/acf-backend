import { MongoClient, type Db } from "mongodb"

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectDB(): Promise<Db> {
  if (cachedClient && cachedDb) {
    return cachedDb
  }

  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio"
  const client = new MongoClient(uri)

  await client.connect()
  const db = client.db("portfolio")

  cachedClient = client
  cachedDb = db

  return db
}
