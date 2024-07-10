import { FormControl } from '@/components/ui/form'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FieldPropsType } from './field-type'

export const SelectField = ({ field, props }: FieldPropsType) => {
  return (
    <FormControl>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger className="shad-select-trigger">
            <SelectValue placeholder={props.placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent className="shad-select-content">{props.children}</SelectContent>
      </Select>
    </FormControl>
  )
}
