import React from 'react'
import { Badge, PabauPlus } from './Badge'
import { PlusProps } from './Badge'
import { values } from './mock'

export default {
  component: Badge,
  title: 'Basics/Badge',
  args: {
    label: 'Enabled',
    disabled: false,
    modalType: 'Marketing',
    data: values,
  },
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    data: { control: { type: 'object' } },
    modalType: {
      control: {
        type: 'select',
        options: ['Marketing', 'Care', 'Staff', 'Intelligence'],
      },
    },
    onClick: { action: 'clicked' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const BadgeStory = ({ ...args }) => <Badge {...args} />

export const defaultStatusLabel = BadgeStory.bind({})
defaultStatusLabel.args = {
  label: 'Enabled',
  disabled: false,
}

const PabauPlusStory = ({ ...args }: PlusProps) => <PabauPlus {...args} />
export const pabauPlus = PabauPlusStory.bind({})
pabauPlus.args = {
  label: 'Plus',
  modalType: 'Marketing',
  data: values,
}
