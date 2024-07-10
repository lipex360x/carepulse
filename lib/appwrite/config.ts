import { Client as NodeClient, Databases, Storage, Messaging, Users } from 'node-appwrite'

export const appwriteConfig = {
  url: process.env.APPWRITE_URL!,
  apiKey: process.env.APPWRITE_API_KEY!,
  projectId: process.env.APPWRITE_PROJECT_ID!,
  databaseId: process.env.APPWRITE_DATABASE_ID!,
}

const client = new NodeClient()
client.setEndpoint(appwriteConfig.url)
client.setProject(appwriteConfig.projectId)
client.setKey(appwriteConfig.apiKey)

export const databases = new Databases(client)
export const storage = new Storage(client)
export const messaging = new Messaging(client)
export const users = new Users(client)
