'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { CustomFormField, SubmitButton } from '../structure'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createUser } from '@/actions/patient/create-user'
import { UserFormProps, UserFormValidation } from './form-validation'
import { FormFieldType } from '../structure/field-type'

const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<UserFormProps>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  })

  async function onSubmit(userData: UserFormProps) {
    setIsLoading(true)
    try {
      const user = await createUser(userData)
      if (user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
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
          name="name"
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
