import React from 'react'
import PhoneNumberInput, { PhoneNumberInputProps } from './PhoneNumberInput'
import { notification } from 'antd'
import PhoneNumberAreaCodes from './PhoneNumberAreaCodes'

export default {
  component: PhoneNumberInput,
  title: 'Basics/PhoneNumberInput',
  args: { countryCode: 'GB' },
  argTypes: {
    countryCode: {
      control: {
        type: 'select',
        selected: 'primary',
        options: PhoneNumberAreaCodes.map((code) => code[2]),
      },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const PhoneNumberInputStory = ({ ...args }: PhoneNumberInputProps) => (
  <PhoneNumberInput {...args} />
)

export const Basic = PhoneNumberInputStory.bind({})
Basic.args = {
  countryCode: 'GB',
  onChange: (val) => notification.open({ message: val }),
}
