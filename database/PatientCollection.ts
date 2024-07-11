import { database, databases, patientCollection } from '@/lib/appwrite'
import { Permission, Role } from 'node-appwrite'

export class PatientCollection {
  private static permissions: string[]

  constructor() {
    PatientCollection.permissions = [
      Permission.create(Role.any()),
      Permission.read(Role.any()),
      Permission.update(Role.any()),
      Permission.delete(Role.any()),
    ]
  }

  static async execute() {
    await databases.createCollection(
      database.id,
      patientCollection.id,
      patientCollection.name,
      PatientCollection.permissions,
    )

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

    await databases.createDocument(database.id, patientCollection.id, '668fb4580007a85bec87', {
      userId: '668eb2690006919fcce8',
      name: 'John Doe',
      email: 'john@mail.com',
      phone: '+1000000000',
      birthDate: '1988-09-09T23:00:00.000Z',
      gender: 'Male',
      address: 'Street test 123',
      privacyConsent: true,
      treatmentConsent: true,
      disclosureConsent: true,
      occupation: 'Engineer',
      emergencyContactName: 'Mom',
      emergencyContactNumber: '+1000000000',
      insuranceProvider: 'test',
      insurancePolicyNumber: 'ABC1234',
      allergies: 'N/A',
      currentMedication: 'N/A',
      familyMedicalHistory: 'N/A',
      pastMedicalHistory: 'N/A',
      identificationType: 'Birth Certificate',
      identificationNumber: 'A1B2C3',
      identificationDocumentId: '668fb4560027f5d6ec06',
      identificationDocumentUrl:
        'https://cloud.appwrite.io/v1/storage/buckets/carepulse_bucket/files/668fb4560027f5d6ec06/view?project=668e71ef0030a0c518ac',
      primaryPhysician: 'John Green',
    })
  }
}
