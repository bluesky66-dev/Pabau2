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

export const defaultBtn = DailyStory.bind({})
defaultBtn.args = {
  tickedDays: [1, 2],
}
