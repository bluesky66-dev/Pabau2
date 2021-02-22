import React from 'react'
import BusinessDetailsNotifications from './BusinessDetailsNotifications'

export default {
  component: BusinessDetailsNotifications,
  title: 'Business Details/Notifications',
  args: {},
  argTypes: {
    onSave: { action: 'onSave' },
  },
}

const NotificationsStory = ({ ...args }) => {
  return <BusinessDetailsNotifications {...args} />
}

export const Basic = NotificationsStory.bind({})
