/* eslint-disable */
import React from 'react'
import FormtypePanel from './Formtype'

export default {
  component: FormtypePanel,
  title: 'UI/Form Type',
}

const FormtypeStory = ({ ...args }) => <FormtypePanel {...args}></FormtypePanel>

export const Formtype = FormtypeStory.bind({})
Formtype.args = {}

