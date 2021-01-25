/* eslint-disable */
import React from 'react'
import FormtypePanel from './Formtype'

export default {
  component: FormtypePanel,
  title: 'UI/Form Type',
  // args: { title : 'Enable online payment', desc : 'Activate payments with Fresha to benefit from tip collection during and after sale and get access to no show protection, payment terminals, safe online payments and many more.'},
  // argTypes: {
  //   title: { control: { type: 'text' } },
  //   desc: { control: { type: 'text' } },
  //   imgPath: { control: {type: 'text'}},
  // },
}

const FormtypeStory = ({ ...args }) => <FormtypePanel {...args}></FormtypePanel>

export const Formtype = FormtypeStory.bind({})
Formtype.args = {}

