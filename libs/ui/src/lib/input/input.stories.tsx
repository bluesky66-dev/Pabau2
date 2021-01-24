/* eslint-disable */

import React from 'react'
import { Input } from './input'
import { Language as LanguageBox } from './Language'
import { Passcode as PasscodeBox } from './Passcode'
import { PasswordWithHelper as PasswordWithHelperBox } from './PasswordWithHelper'

export default {
  component: Input,
  title: 'Forms/Input',
  args: {
    text: 'Facebook',
    disabled: false,
    size: 'medium',
    placeHolderText: 'Enter marketing source name',
    requiredMark: false,
    reqiredMsg: 'Marketing source name is required!'
  },
  argTypes: {
    text: { control: { type: 'text' } },
    reqiredMsg: { control: { type: 'text', name: 'Required Message' } },
    disabled: { control: { type: 'boolean' } },
    requiredMark: { control: { type: 'boolean' } },
    size: {
      control: { type: 'select', selected: 'medium', options: ['small', 'medium', 'large'] },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const InputStory = ({ ...args }) => <Input {...args} />

export const InputWithFormControl = InputStory.bind({})


const PasscodeStory = ({ ...args }) => <PasscodeBox {...args}></PasscodeBox>
export const Passcode = PasscodeStory.bind({})

const LanguageStory = ({ ...args }) => <LanguageBox {...args}></LanguageBox>
export const Language = LanguageStory.bind({})

const PasswordWithHelperStory = ({ ...args }) => <PasswordWithHelperBox {...args}></PasswordWithHelperBox>
export const PasswordWithHelper = PasswordWithHelperStory.bind({})
PasswordWithHelper.args = {
  stength: 3,
  width: "50%"
}

