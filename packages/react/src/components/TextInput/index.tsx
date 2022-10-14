import { ComponentProps } from 'react'
import { TextInputContainer, Prefix, Input } from './styles'

export interface ITextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: ITextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
