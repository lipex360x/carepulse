import { FormControl } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { FieldPropsType } from './field-type'

export const TextAreaField = ({ field, props }: FieldPropsType) => {
  return (
    <FormControl>
      <Textarea
        placeholder={props.placeholder}
        className="shad-textarea"
        disabled={props.disabled}
        {...field}
      ></Textarea>
    </FormControl>
  )
}
