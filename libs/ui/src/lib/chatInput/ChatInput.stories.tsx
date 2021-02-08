import React from 'react'
import ChatInput from './ChatInput'

export default {
  component: ChatInput,
  title: 'Chat/ChatInput',
  onClick: { action: 'onClick' },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const ChatInputStory = ({ ...args }) => <ChatInput {...args} />

export const ChatsInput = ChatInputStory.bind({})
ChatsInput.args = {}
