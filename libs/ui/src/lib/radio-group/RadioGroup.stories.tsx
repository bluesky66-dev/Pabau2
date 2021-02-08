import React from 'react'
import { notification } from 'antd'
import RadioGroup, { RadioGroupProps } from './RadioGroup'

export default {
  component: RadioGroup,
  title: 'Basics/RadioGroup',
  args: {},
  argTypes: {
    label: { control: { type: 'text' } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const RadioGroupStory = ({ ...args }: RadioGroupProps) => (
  <RadioGroup {...args} />
)

export const Default = RadioGroupStory.bind({})
Default.args = {
  label: 'Secure Medical Forms',
  value: 'Yes',
  radioItems: ['Yes', 'No'],
  tooltip: 'Secure Medical Forms',
  onChange: (selectedItem) => {
    notification.open({ message: `${selectedItem}` })
  },
}
