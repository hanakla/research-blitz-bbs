import db from "db"

export default async function getLatestEntries(_ = null) {
  const entries = await db.entry.findMany()
  return entries
}
