/* eslint-disable */
import React from 'react'
import FormtypePanel, { FormtypeProps } from './Formtype'

export default {
  component: FormtypePanel,
  title: 'UI/Form Type',
}

const FormtypeStory = ({ ...args }:FormtypeProps) => <FormtypePanel {...args}></FormtypePanel>

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
  onChangeSetting: (setting) => console.log(setting)
}

