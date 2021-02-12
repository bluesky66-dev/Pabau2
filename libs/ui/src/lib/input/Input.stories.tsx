import React from 'react'
import { HelpTooltip } from './HelpTooltip'
import { Input } from './input'
import { notification } from 'antd'
import { Passcode as PasscodeBox } from './Passcode'
import { PasswordWithHelper as PasswordWithHelperBox } from './PasswordWithHelper'
import { InputNumber } from './InputNumber'

export default {
  component: Input,
  title: 'Forms/Input',
  args: {
    label: 'Name',
    text: 'Facebook',
    disabled: false,
    size: 'medium',
    placeHolderText: 'Enter marketing source name',
    requiredMark: false,
    reqiredMsg: 'Marketing source name is required!',
  },
  argTypes: {
    text: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    reqiredMsg: { control: { type: 'text', name: 'Required Message' } },
    disabled: { control: { type: 'boolean' } },
    requiredMark: { control: { type: 'boolean' } },
    size: {
      control: {
        type: 'select',
        selected: 'medium',
        options: ['small', 'medium', 'large'],
      },
    },
    type: { control: { type: 'text' } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const InputStory = ({ ...rest }) => <Input {...rest} />
export const InputWithFormControl = InputStory.bind({
  onChange: (value) => {
    notification.open({ message: value })
  },
})

const HelpTooltipStory = ({ ...rest }) => <HelpTooltip {...rest} />
export const HelpTooltipControl = HelpTooltipStory.bind({})
HelpTooltipControl.args = {
  helpText: 'Hello!!! Nice to meet you',
}

export const InputEmailAddress = InputStory.bind({})

InputEmailAddress.args = {
  text: 'Pabau@Pabau.com',
  label: 'Email',
  type: 'email',
  placeHolderText: 'Enter email',
  requiredMsg: 'Email is required!',
}

const PasscodeStory = ({ ...rest }) => <PasscodeBox {...rest} />
export const Passcode = PasscodeStory.bind({})

const PasswordWithHelperStory = ({ ...rest }) => (
  <PasswordWithHelperBox {...rest} />
)
export const PasswordWithHelper = PasswordWithHelperStory.bind({})
PasswordWithHelper.args = {
  strength: 3,
  width: '50%',
}

const InputNumberStory = ({ ...rest }) => <InputNumber {...rest} />
export const InputNumberControl = InputNumberStory.bind({})
InputNumberControl.args = {
  placeHolderText: 'Enter Number',
  value: 14.43,
  showCurrency: true,
}
