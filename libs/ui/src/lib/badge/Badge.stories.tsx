/* eslint-disable */
import React from 'react'
import Badge from './Badge'

export default {
  component: Badge,
  title: 'Basics/Badge',
  args: { label: 'Enabled', disabled: false },
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
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

// export const CustomButton = ButtonStory.bind({})
// CustomButton.args = {
//   label: 'Hello World',
//   size: 'large',
//   color: '#000',
//   backgroundColor: '#54B2D3',
// }
