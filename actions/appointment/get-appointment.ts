'use server'

import { appointmentCollection, database, databases } from '@/lib/appwrite'
import { stringfy } from '@/lib/utils'

export const getAppointment = async (appointmentId: string) => {
  const appointment = await databases.getDocument(database.id, appointmentCollection.id, appointmentId)
  return stringfy(appointment)
}
