import Image from 'next/image'
import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldPropsType } from './field-type'

export const InputField = ({ field, props }: FieldPropsType) => {
  return (
    <div className="flex rounded-md border border-dark-500 bg-dark-400">
      {props.iconSrc && (
        <Image src={props.iconSrc} height={24} width={24} alt={props.iconAlt || 'icon'} className="ml-2" />
      )}

      <FormControl>
        <Input className="shad-input border-0" placeholder={props.placeholder} {...field} />
      </FormControl>
    </div>
  )
}
