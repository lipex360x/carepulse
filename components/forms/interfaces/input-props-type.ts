import { Control } from 'react-hook-form'
import { FormFieldType } from '../constant'

export type InputPropsType = {
  control: Control<any>
  fieldType: FormFieldType
  name: string
  label?: string
  placeholder?: string
  iconSrc?: string
  iconAlt?: string
  disabled?: boolean
  dateFormat?: string
  showTimeSelect?: boolean
  children?: React.ReactNode
  renderSkeleton?: (field: any) => React.ReactNode
}

export type InputFormProps = {
  field: any
  props: InputPropsType
}
