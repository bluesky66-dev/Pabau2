import React from 'react'

import Standard from './Standard'

export default {
  component: Standard,
  title: 'Notification/DefaultStandard',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const story = ({ ...args }) => {
  return <Standard {...args}></Standard>
}

export const DefaultStandard = story.bind({})
DefaultStandard.args = {}
