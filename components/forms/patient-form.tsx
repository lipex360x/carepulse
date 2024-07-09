'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '@/components/ui/form'
import { CustomFormField, SubmitButton } from './structure'
import { FormFieldType } from './constant/form-field-type'
import { useState } from 'react'
import { UserFormProps } from './validations'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<UserFormProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  })

  async function onSubmit(userData: UserFormProps) {
    setIsLoading(true)
    try {
      // const user = await createUser(userData)
      // if (user) router.push(`/patient/${user.$id}/register`)
      console.log(userData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          name="user"
          label="Full Name"
          placeholder="John doe"
          control={form.control}
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email Address"
          placeholder="john@mail.com"
          control={form.control}
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          name="phone"
          label="Phone number"
          placeholder="Phone Number"
          control={form.control}
          iconAlt="email"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export { PatientForm }
