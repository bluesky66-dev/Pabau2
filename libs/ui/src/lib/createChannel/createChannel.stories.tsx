import React from 'react'
import CreateChannel from './CreateChannel'

export default {
  component: CreateChannel,
  title: 'Chat/CreateChannel',
  args: {},
  argTypes: { onClick: { action: 'clicked' } },
  actions: { argTypesRegex: '^on[A-Z].*' },
}
const CreateChannelStory = ({ ...args }) => <CreateChannel {...args} />
export const createChannel = CreateChannelStory.bind({})
