import React from 'react'
import Offline from './Offline'

export default {
  title: 'UI/Offline',
  args: {
    message: 'Connection lost. Reconnecting in',
    time: 15,
    buttonLabel: 'Reconnect',
    iconColor: '#008000',
  },
  argTypes: {
    message: { control: { type: 'text' } },
    time: { control: { type: 'number' } },
    buttonLabel: { control: { type: 'text' } },
    iconColor: { control: { type: 'text' } },
  },
}

const OfflineStory = ({ time, message, buttonLabel, iconColor, ...args }) => (
  <Offline {...{ time, message, buttonLabel, iconColor, ...args }} />
)
export const OfflineModal = OfflineStory.bind({
  message: 'Connection lost. Reconnecting in',
  time: 15,
  buttonLabel: 'Reconnect',
  iconColor: '#008000',
})
OfflineModal.args = {}
