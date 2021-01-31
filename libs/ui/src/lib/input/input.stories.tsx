import React from 'react'
import { HelpTooltip } from './helptooltip'
import { Input } from './input'
import { notification } from 'antd'
import { Language as LanguageBox } from './Language'
import { Passcode as PasscodeBox } from './Passcode'
import { PasswordWithHelper as PasswordWithHelperBox } from './PasswordWithHelper'

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

const InputStory = ({ ...args }) => <Input {...args} />
export const InputWithFormControl = InputStory.bind({
  onChange: (val) => {
    notification.open({ message: val })
  },
})

const HelpTooltipStory = ({ ...args }) => <HelpTooltip {...args} />
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
  reqiredMsg: 'Email is required!',
}

const PasscodeStory = ({ ...args }) => <PasscodeBox {...args}></PasscodeBox>
export const Passcode = PasscodeStory.bind({})

const LanguageStory = ({ ...args }) => <LanguageBox {...args}></LanguageBox>
export const Language = LanguageStory.bind({})

const PasswordWithHelperStory = ({ ...args }) => (
  <PasswordWithHelperBox {...args}></PasswordWithHelperBox>
)
export const PasswordWithHelper = PasswordWithHelperStory.bind({})
PasswordWithHelper.args = {
  stength: 3,
  width: '50%',
}
