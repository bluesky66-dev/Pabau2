/* eslint-disable */

import React from 'react'
import { HelpTooltip } from './helptooltip'
import { Input } from './input'
import { UserOutlined } from '@ant-design/icons/lib'

export default {
  component: Input,
  title: 'Forms/Input',
  args: {
    text: 'Facebook',
    label: 'Name',
    disabled: false,
    size: 'medium',
    value:'Data',
    placeHolderText: 'Enter marketing source name',
    requiredMark: true,
    layout:'Vertical',
    requiredMsg: 'Marketing source name is required!',
    prefix: <UserOutlined />,
    suffix: '',
  },
  argTypes: {
    text: { control: { type: 'text' } },
    requiredMsg: { control: { type: 'text', name: 'Required Message' } },
    disabled: { control: { type: 'boolean' } },
    requiredMark: { control: { type: 'boolean' } },
    size: {
      control: {
        type: 'select',
        selected: 'medium',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const InputStory = ({ ...args }) => <Input {...args} />
export const InputWithFormControl = InputStory.bind({})

const HelpTooltipStory = ({ ...args }) => <HelpTooltip {...args} />
export const HelpTooltipControl = HelpTooltipStory.bind({})
HelpTooltipControl.args = {
  helpText: 'Hello!!! Nice to meet you',
}
