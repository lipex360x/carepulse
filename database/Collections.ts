import { database, databases } from '@/lib/appwrite'
import { ID } from 'node-appwrite'

type CollectionProps = {
  id: string
  name: string
}

export class Collections {
  static async deleteIfExists({ id: collectionId }: CollectionProps) {
    const listCollections = await databases.listCollections(database.id)
    if (listCollections.collections.find((collection) => collection.$id === collectionId)) {
      await databases.deleteCollection(database.id, collectionId)
    }
  }

  static async seed({ id: collectionId }: CollectionProps, data: any, documentId?: string) {
    await databases.createDocument(database.id, collectionId, documentId || ID.unique(), data)
  }
}
