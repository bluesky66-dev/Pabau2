/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import * as Notification from './Notification'
import { Button } from 'antd'

export default {
  component: Notification,
  title: 'Notification',
  args: { text: 'Notification', type: 'success' },
  argTypes: {
    type: {
      control: {
        type: 'select',
        selected: 'success',
        options: ['success', 'edit', 'delete'],
      },
    },
    text: { control: { type: 'text' } },
    delay: { control: { type: 'number' } },
    offset: { control: { type: 'text' } },
  },
}

const Notification2Types = ['success', 'edit', 'delete']

export const Notification1 = () => (
  <Button onClick={() => Notification.openNotification('connect', '', 15)}>Click</Button>
)
export const Notification2 = () => (
  <div>
    {Notification2Types.map((type) => (
      <Button key={type} onClick={() => Notification.openNotification(type, 'Message', 10)}>
        Click
      </Button>
    ))}
  </div>
)
