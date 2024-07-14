import { database, databases } from '@/lib/appwrite'
import { Models } from 'node-appwrite'

export class DatabaseMigration {
  static async execute(migrate = false) {
    if (!migrate) return

    const getDatabases = await databases.list()

    if (DatabaseMigration.hasDatabase(getDatabases)) await databases.delete(database.id)
    await databases.create(database.id, database.name)
  }

  private static hasDatabase(db: Models.DatabaseList) {
    return db.total && db.databases.find((appDb) => appDb.$id === database.id)
  }
}
