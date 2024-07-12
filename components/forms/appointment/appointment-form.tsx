'use client'

import { createAppointment, updateAppointment } from '@/actions/appointment'
import { Form } from '@/components/ui/form'
import { SelectItem } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Doctors } from '../register/constant'
import { CustomFormField, SubmitButton } from '../structure'
import { FormFieldType } from '../structure/field-type'
import { getAppointmentSchema } from './form-validation'
import { z } from 'zod'
import { Appointment } from '@/types/appwrite.types'

type AppointmentFormProps = {
  userId: string
  patientId: string
  type: 'create' | 'cancel' | 'schedule'
  appointment?: Appointment
  setOpen?: Dispatch<SetStateAction<boolean>>
}

const buttonLabel = new Map()
buttonLabel.set('cancel', 'Cancel Appointment')
buttonLabel.set('create', 'Create Appointment')
buttonLabel.set('schedule', 'Schedule Appointment')

const appointmentStatus = new Map()
appointmentStatus.set('create', 'pending')
appointmentStatus.set('schedule', 'scheduled')
appointmentStatus.set('cancel', 'cancelled')

export const AppointmentForm = ({ userId, patientId, type, appointment, setOpen }: AppointmentFormProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const AppointmentFormValidation = getAppointmentSchema.get(type)
  type AppointmentValidationProps = z.infer<typeof AppointmentFormValidation>

  const form = useForm<AppointmentValidationProps>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      primaryPhysician: '',
      schedule: new Date(),
      reason: '',
      note: '',
      cancellationReason: '',
    },
  })

  async function onSubmit(formData: AppointmentValidationProps) {
    setIsLoading(true)

    try {
      if (type === 'create' && patientId) {
        const appointmentData = {
          userId,
          patient: patientId,
          primaryPhysician: formData.primaryPhysician,
          schedule: new Date(formData.schedule),
          reason: formData.reason,
          note: formData.note,
          status: appointmentStatus.get(type),
        }

        const appointment = await createAppointment(appointmentData)

        if (appointment) {
          form.reset()
          router.push(`/patients/${userId}/new-appointment/success?appointmentId=${appointment.$id}`)
        }
      }

      if (type === 'cancel' && patientId) {
        const appointmentData = {
          userId,
          appointmentId: appointment?.$id,
          patient: patientId,
          appointment: {
            primaryPhysician: formData?.primaryPhysician,
            schedule: new Date(formData?.schedule),
            status: appointmentStatus.get(type),
            cancelationReason: formData?.cancelationReason,
          },
          type,
        } as UpdateAppointmentParams

        const updatedAppointment = await updateAppointment(appointmentData)
        if (updatedAppointment) {
          setOpen && setOpen(false)
          form.reset()
        }
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        {type === 'create' && (
          <section className="mb-12 space-y-4">
            <h1 className="header">New Appointment</h1>
            <p className="text-dark-700">Request a new appointment in 10 seconds</p>
          </section>
        )}

        {type !== 'cancel' && (
          <>
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="primaryPhysician"
              label="Doctor"
              placeholder="Select a Doctor"
            >
              {Doctors.map((doctor) => (
                <SelectItem key={doctor.name} value={doctor.name}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <Image
                      src={doctor.image}
                      width={32}
                      height={32}
                      alt={doctor.name}
                      className="rounded-full border border-dark-500"
                    />
                    <p>{doctor.name}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="schedule"
              label="Expected appointment date"
              showTimeSelect
              dateFormat="dd/MM/yyy - h:mm aa"
            />

            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="reason"
                label="Reason for appointment"
                placeholder="Enter appointment reason"
              />

              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="note"
                label="Notes"
                placeholder="Enter notes"
              />
            </div>
          </>
        )}

        {type === 'cancel' && (
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="cancellationReason"
            label="Reason for cancellation"
            placeholder="Enter reason for cancellation"
          />
        )}

        <SubmitButton
          isLoading={isLoading}
          className={cn('w-full', {
            'shad-primary-btn': type === 'create',
            'shad-danger-btn': type === 'cancel',
          })}
        >
          {buttonLabel.get(type)}
        </SubmitButton>
      </form>
    </Form>
  )
}
