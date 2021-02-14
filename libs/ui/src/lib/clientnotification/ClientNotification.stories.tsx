import React from 'react'
import ClientNotification from './ClientNotification'

export default {
  component: ClientNotification,
  title: 'UI/ClientNotification',
  args: {},
}

const story = ({ ...props }) => <ClientNotification {...props} />

export const DefaultClientNotification = story.bind({})

DefaultClientNotification.args = {}
