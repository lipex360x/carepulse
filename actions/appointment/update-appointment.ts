'use server'

import { database, databases, appointmentCollection } from '@/lib/appwrite'
import { stringfy } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

export const updateAppointment = async ({ appointmentId, appointment: appointmentData }: UpdateAppointmentParams) => {
  try {
    const updatedAppointment = await databases.updateDocument(
      database.id,
      appointmentCollection.id,
      appointmentId,
      appointmentData,
    )

    console.log(appointmentData)

    if (!updatedAppointment) throw Error
    revalidatePath('/admin')
    return stringfy(updatedAppointment)
  } catch (error) {
    console.error('An error occurred while scheduling an appointment:', error)
  }
}
