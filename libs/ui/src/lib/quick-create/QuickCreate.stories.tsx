import React from 'react'
import QuickCreate from './QuickCreate'

export default {
  component: QuickCreate,
  title: 'Basics/QuickCreate',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const QuickCreateStory = ({ ...args }) => <QuickCreate {...args} />
export const Basic = QuickCreateStory.bind({})
Basic.args = {}
