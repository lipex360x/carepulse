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
  if (fieldType === FormFieldType.INPUT) return <InputField {...fieldProps} />
  if (fieldType === FormFieldType.TEXTAREA) return <TextAreaField {...fieldProps} />
  if (fieldType === FormFieldType.PHONE_INPUT) return <PhoneField {...fieldProps} />
  if (fieldType === FormFieldType.DATE_PICKER) return <DatePickerField {...fieldProps} />
  if (fieldType === FormFieldType.CHECKBOX) return <CheckboxField {...fieldProps} />
  if (fieldType === FormFieldType.SELECT) return <SelectField {...fieldProps} />
  if (fieldType === FormFieldType.SKELETON) {
    const { renderSkeleton } = fieldProps.props
    return renderSkeleton ? renderSkeleton(fieldProps.field) : null
  }
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
