'use server'

import { database, databases, patientCollection } from '@/lib/appwrite'
import { stringfy } from '@/lib/utils'
import { Query } from 'node-appwrite'

export const getPatient = async (userId: string) => {
  const patientData = await databases.listDocuments(database.id, patientCollection.id, [Query.equal('userId', userId)])
  return stringfy(patientData.documents[0])
}
