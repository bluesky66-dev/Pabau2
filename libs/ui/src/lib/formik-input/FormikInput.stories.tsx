import React, { FC } from 'react'
import FormikInput, { FormikInputProps } from './FormikInput'

export default {
  component: FormikInput,
  title: 'Forms/FormikInput',
  args: {
    name: 'name',
    placeholder: 'Name',
  },
}

const FormikInputStory: FC<FormikInputProps> = ({ name, placeholder }) => (
  <FormikInput name={name} placeholder={placeholder} />
)

export const ENStory = FormikInputStory.bind({})
