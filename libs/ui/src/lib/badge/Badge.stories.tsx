import React from 'react'
import { Badge, PabauPlus } from './Badge'
import { PlusProps } from './Badge'

export default {
  component: Badge,
  title: 'Basics/Badge',
  args: {
    label: 'Enabled',
    disabled: false,
    modalType: 'Marketing',
  },
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
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
}
