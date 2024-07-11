'use server'

import { CreateAppointmentProps } from '@/components/forms/appointment/form-validation'
import { appointmentCollection, database, databases } from '@/lib/appwrite'
import { stringfy } from '@/lib/utils'
import { ID } from 'node-appwrite'

export const createAppointment = async (appointment: CreateAppointmentProps) => {
  try {
    const newAppointment = await databases.createDocument(
      database.id,
      appointmentCollection.id,
      ID.unique(),
      appointment,
    )

    return stringfy(newAppointment)
  } catch (error) {
    console.log(error)
  }
}
