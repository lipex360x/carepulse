'use server'

import { appwriteConfig, databases, storage } from '@/lib/appwrite'
import { stringfy } from '@/lib/utils'
import { ID } from 'node-appwrite'
import { InputFile } from 'node-appwrite/file'

export const registerPatient = async ({ identificationDocument, ...patient }: RegisterUserParams) => {
  const { database, bucket, url, patientCollection, projectId } = appwriteConfig

  try {
    let file

    if (identificationDocument) {
      const inputFile = InputFile.fromBuffer(
        identificationDocument?.get('blobFile') as Blob,
        identificationDocument?.get('fileName') as string,
      )
      file = await storage.createFile(bucket.id, ID.unique(), inputFile)
    }

    const newPatient = await databases.createDocument(database.id, patientCollection.id, ID.unique(), {
      identificationDocumentId: file?.$id || null,
      identificationDocumentUrl: `${url}/storage/buckets/${bucket.id}/files/${file?.$id}/view?project=${projectId}`,
      ...patient,
    })

    return stringfy(newPatient)
  } catch (error) {
    console.log(error)
  }
}
