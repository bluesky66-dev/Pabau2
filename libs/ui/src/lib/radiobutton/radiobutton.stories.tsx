/* eslint-disable */

import React, { FC, useState } from 'react'
import RadioButton from './radiobutton'
import { data, dataItems } from './mock'

export default {
  component: RadioButton,
  title: 'Forms/Radio Button',
  args: {
    group: 'Group Name',
    Items: data
  },
  argTypes: {
    group: { control: { type: 'text' } },
  },
  onChange: { action: 'onChange' },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const RadioButtonStory: FC = ({ ...args }) => {
  return <RadioButton {...args} Items={data} group={group} />
}

export const group = RadioButtonStory.bind({})
