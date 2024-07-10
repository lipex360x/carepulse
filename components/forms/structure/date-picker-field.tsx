import Image from 'next/image'
import { FormControl } from '@/components/ui/form'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { FieldPropsType } from './field-type'

export const DatePickerField = ({ field, props }: FieldPropsType) => {
  return (
    <div className="flex rounded-md border border-dark-500 bg-dark-400">
      <Image src="/assets/icons/calendar.svg" width={24} height={24} alt="calendar" className="ml-2" />
      <FormControl>
        <DatePicker
          selected={field.value}
          onChange={(date) => field.onChange(date)}
          dateFormat={props.dateFormat ?? 'dd/MM/yyyy'}
          showTimeSelect={props.showTimeSelect ?? false}
          timeInputLabel="Time:"
          wrapperClassName="date-picker"
        />
      </FormControl>
    </div>
  )
}
