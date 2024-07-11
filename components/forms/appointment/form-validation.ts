import { z } from 'zod'

export const CreateAppointmentValidation = z.object({
  primaryPhysician: z.string().min(2, 'Select at least one doctor'),
  schedule: z.coerce.date(),
  reason: z.string().min(2, 'Reason must be at least 2 characters').max(500, 'Reason must be at most 500 characters'),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
})

export type CreateAppointmentProps = z.infer<typeof CreateAppointmentValidation>

export const ScheduleAppointmentValidation = z.object({
  primaryPhysician: z.string().min(2, 'Select at least one doctor'),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
})

export const CancelAppointmentValidation = z.object({
  primaryPhysician: z.string().min(2, 'Select at least one doctor'),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, 'Reason must be at least 2 characters')
    .max(500, 'Reason must be at most 500 characters'),
})

export const getAppointmentSchema = new Map()
getAppointmentSchema.set('create', CreateAppointmentValidation)
getAppointmentSchema.set('schedule', ScheduleAppointmentValidation)
getAppointmentSchema.set('cancel', CancelAppointmentValidation)
