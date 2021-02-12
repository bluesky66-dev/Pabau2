/* eslint-disable */
import React from 'react'
import { Notification, NotificationType } from './Notification'
import { Button } from 'antd'

export default {
  component: Notification,
  title: 'UI/Notification',
  args: { text: 'Notification', type: 'success' },
  argTypes: {
    type: {
      control: {
        type: 'select',
        selected: 'success',
        options: ['success', 'info', 'error'],
      },
    },
    text: { control: { type: 'text' } },
    delay: { control: { type: 'number' } },
  },
}

const Notification2Types = ['success', 'info', 'error']

export const Notification1 = () => (
  <Button onClick={() => Notification(NotificationType.connect, '', 15)}>
    Click
  </Button>
)

export const Notification2 = () => (
  <div>
    {Notification2Types.map((type) => (
      <Button
        key={type}
        onClick={() => Notification(NotificationType[type], 'Message')}
      >
        Click
      </Button>
    ))}
  </div>
)
