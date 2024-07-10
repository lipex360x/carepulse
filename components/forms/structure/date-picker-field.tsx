import Image from 'next/image'
import { InputFormProps } from '../interfaces'
import { FormControl } from '@/components/ui/form'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export const DatePickerField = (inputProps: InputFormProps) => {
  return (
    <div className="flex rounded-md border border-dark-500 bg-dark-400">
      <Image src="/assets/icons/calendar.svg" width={24} height={24} alt="calendar" className="ml-2" />
      <FormControl>
        <DatePicker
          selected={inputProps.field.value}
          onChange={(date) => inputProps.field.onChange(date)}
          dateFormat={inputProps.props.dateFormat ?? 'dd/MM/yyyy'}
          showTimeSelect={inputProps.props.showTimeSelect ?? false}
          timeInputLabel="Time:"
          wrapperClassName="date-picker"
        />
      </FormControl>
    </div>
  )
}
