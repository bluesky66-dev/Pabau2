import React from 'react'

import Smstext from './Smstext'

export default {
  component: Smstext,
  title: 'Notification/Smstext',
  args: { message: '', manageAppointment: true },
  argTypes: {
    message: { control: { type: 'text' } },
    manageAppointment: { control: { type: 'boolean' } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const Story = ({ ...args }) => {
  return <Smstext {...args}></Smstext>
}

export const smstext = Story.bind({})
smstext.args = {}
