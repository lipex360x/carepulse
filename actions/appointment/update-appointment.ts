import { database, databases } from '@/lib/appwrite'
import { stringfy } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

export const updateAppointment = async ({ appointmentId, appointment }: UpdateAppointmentParams) => {
  try {
    const updatedAppointment = await databases.updateDocument(database.id, appointment.id, appointmentId)
    if (!updatedAppointment) throw Error
    revalidatePath('/admin')
    return stringfy(updatedAppointment)
  } catch (error) {
    console.error('An error occurred while scheduling an appointment:', error)
  }
}
