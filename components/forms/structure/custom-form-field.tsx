'use client'

import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { FormFieldType } from '../constant'
import { InputFormProps, InputPropsType } from '../interfaces'
import { InputField } from './input-field'
import { PhoneField } from './phone-field'
import { DatePickerField } from './date-picker-field'
import { SelectField } from './select-field'
import { TextAreaField } from './textarea-field'
import { CheckboxField } from './checkbox-field'

const RenderField = (inputProps: InputFormProps) => {
  const field = inputProps.props.fieldType
  if (field === FormFieldType.INPUT) return <InputField {...inputProps} />
  if (field === FormFieldType.TEXTAREA) return <TextAreaField {...inputProps} />
  if (field === FormFieldType.PHONE_INPUT) return <PhoneField {...inputProps} />
  if (field === FormFieldType.DATE_PICKER) return <DatePickerField {...inputProps} />
  if (field === FormFieldType.CHECKBOX) return <CheckboxField {...inputProps} />
  if (field === FormFieldType.SELECT) return <SelectField {...inputProps} />
  if (field === FormFieldType.SKELETON) {
    const { renderSkeleton } = inputProps.props
    return renderSkeleton ? renderSkeleton(inputProps.field) : null
  }
}

export const CustomFormField = (props: InputPropsType) => {
  const { control, fieldType, name, label } = props

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && <FormLabel>{label}</FormLabel>}

          <RenderField field={field} props={props} />

          <FormMessage className='"shad-error' />
        </FormItem>
      )}
    />
  )
}
