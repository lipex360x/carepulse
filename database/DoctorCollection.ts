import { databases, database, doctorCollection } from '@/lib/appwrite'
import { Permission, Role } from 'node-appwrite'

export class DoctorCollection {
  private static permissions: string[]

  constructor() {
    DoctorCollection.permissions = [
      Permission.create(Role.any()),
      Permission.read(Role.any()),
      Permission.update(Role.any()),
      Permission.delete(Role.any()),
    ]
  }

  static async execute() {
    await databases.createCollection(
      database.id,
      doctorCollection.id,
      doctorCollection.name,
      DoctorCollection.permissions,
    )
  }
}
