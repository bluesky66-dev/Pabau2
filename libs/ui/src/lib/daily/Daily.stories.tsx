import React from 'react'
import Daily from './Daily'

export default {
  component: Daily,
  title: 'Basics/Daily',
  args: { tickedDays: [] },
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const DailyStory = ({ ...args }) => <Daily {...args} />

export const Basic = DailyStory.bind({})
Basic.args = {
  tickedDays: [1, 2],
}
