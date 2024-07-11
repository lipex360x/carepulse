import { database, databases } from '@/lib/appwrite'

export class DatabaseMigration {
  static async execute() {
    await databases.delete(database.id)
    await databases.create(database.id, database.name)
  }
}
