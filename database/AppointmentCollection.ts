import { databases, database, appointmentCollection, patientCollection } from '@/lib/appwrite'
import { Permission, RelationMutate, RelationshipType, Role } from 'node-appwrite'
import { Collections } from './Collections'

export class AppointmentCollection extends Collections {
  private static permissions: string[]

  constructor() {
    super()
    AppointmentCollection.permissions = [
      Permission.create(Role.any()),
      Permission.read(Role.any()),
      Permission.update(Role.any()),
      Permission.delete(Role.any()),
    ]
  }

  static async execute(migrate = false, seed = false) {
    if (!migrate) return

    await Collections.deleteIfExists(appointmentCollection)

    await databases.createCollection(
      database.id,
      appointmentCollection.id,
      appointmentCollection.name,
      AppointmentCollection.permissions,
    )

    await databases.createStringAttribute(database.id, appointmentCollection.id, 'userId', 1000, true)
    await databases.createDatetimeAttribute(database.id, appointmentCollection.id, 'schedule', true)
    await databases.createStringAttribute(database.id, appointmentCollection.id, 'reason', 100, true)
    await databases.createStringAttribute(database.id, appointmentCollection.id, 'cancellationReason', 1000, false)
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

    if (seed) {
      await Collections.seed(appointmentCollection, {
        userId: '668eb2690006919fcce8',
        patient: '668fb4580007a85bec87',
        primaryPhysician: 'John Green',
        schedule: new Date('2024-07-14T08:49:22.000Z'),
        reason: 'Reason for appointment',
        note: 'Notes',
        status: 'pending',
      })
    }
  }
}
