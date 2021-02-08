import React from 'react'
import { notification } from 'antd'
import LanguageDropdown from './LanguageDropdown'

export default {
  component: LanguageDropdown,
  title: 'Forms/LanguageDropdown',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const LanguageDropdownStory = ({ ...args }) => <LanguageDropdown {...args} />
export const Basic = LanguageDropdownStory.bind({})
Basic.args = {
  label: 'Default language for your staff',
  value: 'French',
  tooltip: '',
  onSelected: (val) => {
    notification.open({ message: `Select ${val}` })
  },
}
