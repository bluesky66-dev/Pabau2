import React from 'react'
import TimeInput from './TimeInput'

export default {
  component: TimeInput,
  title: 'Basics/TimeInput',
  args: { label: 'Pabau' },
  argTypes: {
    label: { control: { type: 'text' } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const TimeInputStory = ({ ...args }) => (
  <TimeInput {...args}>{args.label}</TimeInput>
)

export const Basic = TimeInputStory.bind({})
Basic.args = {
  label: 'Start Time',
}
