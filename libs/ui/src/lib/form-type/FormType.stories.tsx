import React from 'react'
import FormType, { FormTypeProps } from './Formtype'

export default {
  component: FormType,
  title: 'UI/Form Type',
}

const FormtypeStory = ({ ...args }: FormTypeProps) => (
  <FormType {...args}></FormType>
)

export const Formtype = FormtypeStory.bind({})
Formtype.args = {
  setting: {
    medicalHistory: false,
    consent: false,
    treatmentForm: false,
    epaper: false,
    presciption: false,
    labForm: false,
  },
  onChangeSetting: (setting) => console.log(setting),
}
