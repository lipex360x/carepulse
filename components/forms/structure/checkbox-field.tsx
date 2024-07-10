import { Checkbox } from '@/components/ui/checkbox'
import { FormControl } from '@/components/ui/form'
import { InputFormProps } from '../interfaces'

export const CheckboxField = (inputProps: InputFormProps) => {
  return (
    <FormControl>
      <div className="flex items-center gap-4">
        <Checkbox
          id={inputProps.props.name}
          checked={inputProps.field.value}
          onCheckedChange={inputProps.field.onChange}
        />
        <label htmlFor={inputProps.props.name} className="checkbox-label">
          {inputProps.props.label}
        </label>
      </div>
    </FormControl>
  )
}
