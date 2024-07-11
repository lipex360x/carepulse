import { appwriteConfig, databases } from '@/lib/appwrite'
import { Permission, Role } from 'node-appwrite'

export class DatabaseMigration {
  static async execute() {
    const { database, patientCollection, appointmentCollection, doctorCollection } = appwriteConfig

    const permissions = [
      Permission.create(Role.any()),
      Permission.read(Role.any()),
      Permission.update(Role.any()),
      Permission.delete(Role.any()),
    ]

    await databases.delete(database.id)
    await databases.create(database.id, database.name)

    await databases.createCollection(database.id, patientCollection.id, patientCollection.name, permissions)
    await databases.createCollection(database.id, doctorCollection.id, doctorCollection.name, permissions)
    await databases.createCollection(database.id, appointmentCollection.id, appointmentCollection.name, permissions)

    await databases.createStringAttribute(database.id, patientCollection.id, 'userId', 100, true)
    await databases.createStringAttribute(database.id, patientCollection.id, 'name', 100, true)
    await databases.createEmailAttribute(database.id, patientCollection.id, 'email', true)
    await databases.createStringAttribute(database.id, patientCollection.id, 'phone', 100, true)
    await databases.createStringAttribute(database.id, patientCollection.id, 'birthDate', 100, false)
    await databases.createEnumAttribute(database.id, patientCollection.id, 'gender', ['Male', 'Female', 'Other'], false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'address', 100, false)
    await databases.createBooleanAttribute(database.id, patientCollection.id, 'privacyConsent', true)
    await databases.createBooleanAttribute(database.id, patientCollection.id, 'treatmentConsent', true)
    await databases.createBooleanAttribute(database.id, patientCollection.id, 'disclosureConsent', true)
    await databases.createStringAttribute(database.id, patientCollection.id, 'occupation', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'emergencyContactName', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'emergencyContactNumber', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'insuranceProvider', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'insurancePolicyNumber', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'allergies', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'currentMedication', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'familyMedicalHistory', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'pastMedicalHistory', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'identificationType', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'identificationNumber', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'identificationDocumentId', 100, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'identificationDocumentUrl', 200, false)
    await databases.createStringAttribute(database.id, patientCollection.id, 'primaryPhysician', 100, false)
  }
}
