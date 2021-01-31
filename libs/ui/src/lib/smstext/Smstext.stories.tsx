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
  // const [message, setmessage] = React.useState(args.message)
  // const [manageAppointment, setmanageAppointment] = React.useState(
  //   args.manageAppointment
  // )
  return (
    <Smstext
      {...args}
      // message={message}
      // manageAppointment={manageAppointment}
    ></Smstext>
  )
}

export const smstext = Story.bind({})
smstext.args = {}
