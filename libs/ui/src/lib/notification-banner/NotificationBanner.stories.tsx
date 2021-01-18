import React from 'react'
import NotificationBanner from './NotificationBanner'

export default {
  component: NotificationBanner,
  title: 'Notification Banner',
  args: { },
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
    size: {
      control: { type: 'select', selected: 'medium', options: ['small', 'medium', 'large'] },
    },
    type: {
      control: {
        type: 'select',
        selected: 'primary',
        options: ['default', 'primary', 'ghost', 'dashed', 'link', 'text', 'danger'],
      },
    },
    color: {
      control: { type: 'color' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const NotificationStory = ({ ...args }) => <NotificationBanner {...args}>{args.label}</NotificationBanner>

export const defaultNotificationBanner = NotificationStory.bind({})
defaultNotificationBanner.args = {
  type: 'default',
}
