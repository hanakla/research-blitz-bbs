import db, { Prisma } from "db"

export default async function createEntry({ data }: { data: Prisma.EntryCreateArgs }) {
  console.log(data)
  return await db.entry.create(data)
}
