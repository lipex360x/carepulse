import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FormControl } from '@/components/ui/form'
import { InputFormProps } from '../interfaces'
import { E164Number } from 'libphonenumber-js/core'

export const PhoneField = (inputProps: InputFormProps) => {
  const { field } = inputProps

  return (
    <FormControl>
      <PhoneInput
        defaultCountry="US"
        placeholder="(555) 123-4567"
        international
        value={field.value as E164Number | undefined}
        onChange={field.onChange}
        className="input-phone"
      />
    </FormControl>
  )
}
