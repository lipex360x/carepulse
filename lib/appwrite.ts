import { Client as NodeClient, Databases, Storage, Messaging, Users } from 'node-appwrite'

export const appwriteConfig = {
  url: process.env.APPWRITE_URL!,
  apiKey: process.env.APPWRITE_API_KEY!,
}

export const projectId = process.env.APPWRITE_PROJECT_ID!

export const database = { id: process.env.APPWRITE_DATABASE_ID!, name: 'carepulse_data' }
export const patientCollection = { id: process.env.APPWRITE_PATIENT_COLLECTION_ID!, name: 'patient' }
export const doctorCollection = { id: process.env.APPWRITE_DOCTOR_COLLECTION_ID!, name: 'doctor' }
export const appointmentCollection = { id: process.env.APPWRITE_APPOINTMENT_COLLECTION_ID!, name: 'appointment' }

export const bucket = { id: process.env.APPWRITE_BUCKET_ID!, name: 'carepulse_bucket' }

const client = new NodeClient()
client.setEndpoint(appwriteConfig.url)
client.setKey(appwriteConfig.apiKey)
client.setProject(projectId)

export const databases = new Databases(client)
export const storage = new Storage(client)
export const messaging = new Messaging(client)
export const users = new Users(client)
