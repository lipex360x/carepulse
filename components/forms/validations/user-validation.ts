import { z } from 'zod'

const phoneRegExp = /^\+\d{10,15}$/

export const userFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .refine((phone) => phoneRegExp.test(phone), 'Invalid phone number'),
})

export type UserFormProps = z.infer<typeof userFormSchema>
