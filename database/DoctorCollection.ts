import { databases, database, doctorCollection } from '@/lib/appwrite'
import { Permission, Role } from 'node-appwrite'
import { Collections } from './Collections'

export class DoctorCollection extends Collections {
  private static permissions: string[]

  constructor() {
    super()
    DoctorCollection.permissions = [
      Permission.create(Role.any()),
      Permission.read(Role.any()),
      Permission.update(Role.any()),
      Permission.delete(Role.any()),
    ]
  }

  static async execute(migrate = false, seed = false) {
    if (!migrate) return

    await Collections.deleteIfExists(doctorCollection)

    await databases.createCollection(
      database.id,
      doctorCollection.id,
      doctorCollection.name,
      DoctorCollection.permissions,
    )

    if (seed) await Collections.seed(doctorCollection, {})
  }
}
