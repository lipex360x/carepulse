import { bucket, storage } from '@/lib/appwrite'
import { Permission, Role } from 'node-appwrite'

export class BucketMigration {
  static async execute(migrate = false) {
    if (!migrate) return

    const permissions = [
      Permission.create(Role.any()),
      Permission.read(Role.any()),
      Permission.update(Role.any()),
      Permission.delete(Role.any()),
    ]

    await storage.deleteBucket(bucket.id)
    await storage.createBucket(bucket.id, bucket.name, permissions)
  }
}
