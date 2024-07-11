import { Client as NodeClient, Databases, Storage, Messaging, Users } from 'node-appwrite'

export const appwriteConfig = {
  url: process.env.APPWRITE_URL!,
  apiKey: process.env.APPWRITE_API_KEY!,
  projectId: process.env.APPWRITE_PROJECT_ID!,

  database: { id: process.env.APPWRITE_DATABASE_ID!, name: 'carepulse_db' },
  patientCollection: { id: 'patient_collection', name: 'patient' },
  doctorCollection: { id: 'doctor_collection', name: 'doctor' },
  appointmentCollection: { id: 'appointment_collection', name: 'appointment' },

  bucket: { id: process.env.APPWRITE_BUCKET_ID!, name: 'carepulse_bucket' },
}

const client = new NodeClient()
client.setEndpoint(appwriteConfig.url)
client.setProject(appwriteConfig.projectId)
client.setKey(appwriteConfig.apiKey)

export const databases = new Databases(client)
export const storage = new Storage(client)
export const messaging = new Messaging(client)
export const users = new Users(client)
