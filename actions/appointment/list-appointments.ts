'use server'

import { appointmentCollection, database, databases } from '@/lib/appwrite'
import { stringfy } from '@/lib/utils'
import { Appointment } from '@/types/appwrite.types'
import { revalidatePath } from 'next/cache'
import { Query } from 'node-appwrite'

export const listAppointments = async () => {
  const { documents, total } = await databases.listDocuments(database.id, appointmentCollection.id, [
    Query.orderAsc('$createdAt'),
  ])

  const initialCounts = {
    scheduledCount: 0,
    pendingCount: 0,
    cancelledCount: 0,
  }

  const counts = (documents as Appointment[]).reduce((acc, appointment) => {
    if (appointment.status === 'scheduled') acc.scheduledCount += 1
    if (appointment.status === 'pending') acc.pendingCount += 1
    if (appointment.status === 'cancelled') acc.cancelledCount += 1
    return acc
  }, initialCounts)

  const data = {
    total,
    documents,
    ...counts,
  }

  revalidatePath('/admin')
  return stringfy(data)
}
