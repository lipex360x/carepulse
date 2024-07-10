import PhoneInput from 'react-phone-number-input'
import { FormControl } from '@/components/ui/form'
import { E164Number } from 'libphonenumber-js/core'
import { FieldPropsType } from './field-type'

import 'react-phone-number-input/style.css'

export const PhoneField = ({ field }: FieldPropsType) => {
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
