import { AppointmentCollection } from './AppointmentCollection'
import { DatabaseMigration } from './DatabaseMigration'
import { DoctorCollection } from './DoctorCollection'
import { PatientCollection } from './PatientCollection'
import { BucketMigration } from './BucketMigration'

await DatabaseMigration.execute()
await PatientCollection.execute(true, true)
await AppointmentCollection.execute(true, true)
await DoctorCollection.execute()

await BucketMigration.execute()
