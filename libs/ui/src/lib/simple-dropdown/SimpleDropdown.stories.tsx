import React from 'react'
import { notification } from 'antd'
import SimpleDropdown, { SimpleDropdownProps } from './SimpleDropdown'

export default {
  component: SimpleDropdown,
  title: 'Basics/SimpleDropdown',
  args: { label: '', dropdownItems: ['a', 'b'] },
  argTypes: {
    label: { control: { type: 'text' } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const SimpleDropdownStory = ({ ...args }: SimpleDropdownProps) => (
  <SimpleDropdown {...args} />
)
export const Basic = SimpleDropdownStory.bind({})
Basic.args = {
  label: 'Reverse Family Relation',
  value: 'a',
  dropdownItems: ['a', 'b'],
  tooltip: 'Reverse Family Relation',
  onSelected: (val) => {
    notification.open({ message: `Select ${val}` })
  },
}

export const NoLabel = SimpleDropdownStory.bind({})
NoLabel.args = {
  value: 'a',
  dropdownItems: ['a', 'b'],
  onSelected: (val) => {
    notification.open({ message: `Select ${val}` })
  },
}
