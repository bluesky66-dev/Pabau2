import React from 'react'
import NotificationBanner from './NotificationBanner'

export default {
  component: NotificationBanner,
  title: 'NotificationBanner',
}

const NotificationStory = ({ ...args }) => <NotificationBanner/>

export const defaultNotificationBanner = NotificationStory.bind({})
