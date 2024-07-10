import { FormControl } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { InputFormProps } from '../interfaces'

export const TextAreaField = (inputProps: InputFormProps) => {
  return (
    <FormControl>
      <Textarea
        placeholder={inputProps.props.placeholder}
        {...inputProps.field}
        className="shad-textarea"
        disabled={inputProps.props.disabled}
      ></Textarea>
    </FormControl>
  )
}
