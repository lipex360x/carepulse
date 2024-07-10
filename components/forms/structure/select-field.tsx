import { FormControl } from '@/components/ui/form'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { InputFormProps } from '../interfaces'

export const SelectField = (inputProps: InputFormProps) => {
  return (
    <FormControl>
      <Select onValueChange={inputProps.field.onChange} defaultValue={inputProps.field.value}>
        <FormControl>
          <SelectTrigger className="shad-select-trigger">
            <SelectValue placeholder={inputProps.props.placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent className="shad-select-content">{inputProps.props.children}</SelectContent>
      </Select>
    </FormControl>
  )
}
