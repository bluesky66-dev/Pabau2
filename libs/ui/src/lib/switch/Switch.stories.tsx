import React from 'react'
import Switch from './Switch'
import { notification } from 'antd'

export default {
  component: Switch,
  title: 'Basics/Switch',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const SwitchStory = ({ ...args }) => <Switch {...args} />

export const Basic = SwitchStory.bind({})
Basic.args = {
  onChange: (checked, e) =>
    notification.open({ message: `Status: ${checked}` }),
}
