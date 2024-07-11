import { Client as NodeClient, Databases, Storage, Messaging, Users } from 'node-appwrite'

export const appwriteConfig = {
  url: process.env.APPWRITE_URL!,
  apiKey: process.env.APPWRITE_API_KEY!,
}

export const projectId = process.env.APPWRITE_PROJECT_ID!

export const database = { id: process.env.APPWRITE_DATABASE_ID!, name: 'carepulse_db' }
export const patientCollection = { id: 'patient_collection', name: 'patient' }
export const doctorCollection = { id: 'doctor_collection', name: 'doctor' }
export const appointmentCollection = { id: 'appointment_collection', name: 'appointment' }

export const bucket = { id: process.env.APPWRITE_BUCKET_ID!, name: 'carepulse_bucket' }

const client = new NodeClient()
client.setEndpoint(appwriteConfig.url)
client.setKey(appwriteConfig.apiKey)
client.setProject(projectId)

export const databases = new Databases(client)
export const storage = new Storage(client)
export const messaging = new Messaging(client)
export const users = new Users(client)
