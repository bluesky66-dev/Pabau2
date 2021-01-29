import React from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { notification } from 'antd'
import RadioGroup, { RadioGroupProps } from './RadioGroup'

export default {
  component: RadioGroup,
  title: 'Basics/RadioGroup',
  args: {},
  argTypes: {
    label: { control: { type: 'text' } },
    defaultValue: { control: { type: 'number' } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const RadioGroupStory = ({ ...args }: RadioGroupProps) => (
  <RadioGroup {...args} />
)

export const Default = RadioGroupStory.bind({})
Default.args = {
  label: 'Secure Medical Forms',
  icon: <QuestionCircleOutlined />,
  defaultValue: 0,
  radioItems: [{ title: 'Yes' }, { title: 'No' }],
  onChange: (selectedItem) => {
    notification.open({ message: `${selectedItem.title}` })
  },
}
