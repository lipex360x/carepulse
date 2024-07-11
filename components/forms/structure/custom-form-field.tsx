'use client'

import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { InputField } from './input-field'
import { PhoneField } from './phone-field'
import { DatePickerField } from './date-picker-field'
import { SelectField } from './select-field'
import { TextAreaField } from './textarea-field'
import { CheckboxField } from './checkbox-field'
import { FieldPropsType, FormFieldType, InputPropsType } from './field-type'

const RenderField = (fieldProps: FieldPropsType) => {
  const { fieldType } = fieldProps.props

  const fieldMap = new Map()
  fieldMap.set(FormFieldType.INPUT, InputField)
  fieldMap.set(FormFieldType.TEXTAREA, TextAreaField)
  fieldMap.set(FormFieldType.PHONE_INPUT, PhoneField)
  fieldMap.set(FormFieldType.DATE_PICKER, DatePickerField)
  fieldMap.set(FormFieldType.CHECKBOX, CheckboxField)
  fieldMap.set(FormFieldType.SELECT, SelectField)
  fieldMap.set(FormFieldType.SKELETON, ({ props, field }: FieldPropsType) => {
    const { renderSkeleton } = props
    return renderSkeleton ? renderSkeleton(field) : null
  })

  const FieldComponent = fieldMap.get(fieldType)
  return FieldComponent ? <FieldComponent {...fieldProps} /> : null
}

export const CustomFormField = (inputProps: InputPropsType) => {
  const { control, fieldType, name, label } = inputProps

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && <FormLabel>{label}</FormLabel>}
          <RenderField field={field} props={inputProps} />
          <FormMessage className='"shad-error' />
        </FormItem>
      )}
    />
  )
}
