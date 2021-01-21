/* eslint-disable */

import React from 'react'
import ButtonCheckbox from './buttonCheckbox'
import Checkbox from './checkbox'
import CustomCheckbox from './customCheckbox'

export default {
  component: Checkbox,
  title: 'Checkbox',
  args: {
    label: 'Pabau',
    disabled: false,
    onChange: (e) => {
      console.log('Checkbox value change to', e.target.checked)
    },
  },
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  onChange: { action: 'onChange' },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const CheckboxStory = ({ ...args }) => <Checkbox {...args}>{args.label}</Checkbox>

export const checkbox = CheckboxStory.bind({})

const CustomCheckboxStory = ({ ...args }) => <CustomCheckbox {...args}></CustomCheckbox>
export const CustomCheckBox = CustomCheckboxStory.bind({})
CustomCheckBox.args = {
  label: 'Activate',
  disabled: false
}

const ButtonCheckboxStory = ({ ...args }) => <ButtonCheckbox {...args}></ButtonCheckbox>
export const ButtonCheckBox = ButtonCheckboxStory.bind({})
ButtonCheckBox.args = {
  label: 'Checkbox',
  disabled: false
}