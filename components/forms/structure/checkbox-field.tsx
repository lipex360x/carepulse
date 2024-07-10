import { Checkbox } from '@/components/ui/checkbox'
import { FormControl } from '@/components/ui/form'
import { FieldPropsType } from './field-type'

export const CheckboxField = ({ field, props }: FieldPropsType) => {
  return (
    <FormControl>
      <div className="flex items-center gap-4">
        <Checkbox id={props.name} checked={field.value} onCheckedChange={field.onChange} />
        <label htmlFor={props.name} className="checkbox-label">
          {props.label}
        </label>
      </div>
    </FormControl>
  )
}
