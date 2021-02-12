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

const LanguageDropdownStory = ({ ...rest }) => <LanguageDropdown {...rest} />
export const Basic = LanguageDropdownStory.bind({})
Basic.args = {
  label: 'Default language for your staff',
  value: 'French',
  tooltip: '',
  onSelected: (value) => {
    notification.open({ message: `Select ${value}` })
  },
}
