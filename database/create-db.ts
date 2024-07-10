import { appwriteConfig, databases } from '@/lib/appwrite/config'

const { databaseId } = appwriteConfig

await databases.delete(databaseId)
await databases.create(databaseId, 'carepulse_db')

await databases.createCollection(databaseId, 'patient_collection', 'patient')

await databases.createStringAttribute(databaseId, 'patient_collection', 'userId', 100, true)
await databases.createStringAttribute(databaseId, 'patient_collection', 'name', 100, true)
await databases.createEmailAttribute(databaseId, 'patient_collection', 'email', true)
await databases.createStringAttribute(databaseId, 'patient_collection', 'phone', 100, true)
await databases.createBooleanAttribute(databaseId, 'patient_collection', 'privacy_consent', true)
await databases.createEnumAttribute(databaseId, 'patient_collection', 'gender', ['male', 'famale', 'other'], false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'birth_date', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'address', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'occupation', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'emergency_contact_name', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'emergency_contact_number', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'insurance_provider', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'insurance_policy_number', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'allergies', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'current_medication', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'family_medical_history', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'past_medical_history', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'identification_type', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'identification_number', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'identification_document_id', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'identification_document_url', 100, false)
await databases.createStringAttribute(databaseId, 'patient_collection', 'primary_physician', 100, false)
