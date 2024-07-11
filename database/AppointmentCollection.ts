import { databases, database, appointmentCollection, patientCollection } from '@/lib/appwrite'
import { Permission, RelationMutate, RelationshipType, Role } from 'node-appwrite'

export class AppointmentCollection {
  private static permissions: string[]

  constructor() {
    AppointmentCollection.permissions = [
      Permission.create(Role.any()),
      Permission.read(Role.any()),
      Permission.update(Role.any()),
      Permission.delete(Role.any()),
    ]
  }

  static async execute() {
    await databases.createCollection(
      database.id,
      appointmentCollection.id,
      appointmentCollection.name,
      AppointmentCollection.permissions,
    )

    await databases.createStringAttribute(database.id, appointmentCollection.id, 'userId', 1000, true)
    await databases.createDatetimeAttribute(database.id, appointmentCollection.id, 'schedule', true)
    await databases.createStringAttribute(database.id, appointmentCollection.id, 'reason', 100, true)
    await databases.createStringAttribute(database.id, appointmentCollection.id, 'cancelationReason', 1000, false)
    await databases.createStringAttribute(database.id, appointmentCollection.id, 'note', 1000, false)
    await databases.createStringAttribute(database.id, appointmentCollection.id, 'primaryPhysician', 100, true)
    await databases.createEnumAttribute(
      database.id,
      appointmentCollection.id,
      'status',
      ['scheduled', 'pending', 'cancelled'],
      true,
    )

    await databases.createRelationshipAttribute(
      database.id,
      appointmentCollection.id,
      patientCollection.id,
      RelationshipType.ManyToOne,
      false,
      'patient',
      undefined,
      RelationMutate.SetNull,
    )
  }
}
