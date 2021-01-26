import React from 'react'
import SimpleDropdown, { SimpleDropdownProps } from './SimpleDropdown'

export default {
  component: SimpleDropdown,
  title: 'Basics/SimpleDropdown',
  args: { label: '', menuItems: ['a', 'b'] },
  argTypes: {
    label: { control: { type: 'text' } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const SimpleDropdownStory = ({ ...args }: SimpleDropdownProps) => <SimpleDropdown {...args} />
export const Basic = SimpleDropdownStory.bind({})
Basic.args = {
  label: 'Reverse Family Relation',
  menuItems: ['a', 'b'],
}

export const NoLabel = SimpleDropdownStory.bind({})
NoLabel.args = {
  menuItems: ['a', 'b'],
}
