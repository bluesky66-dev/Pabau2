import React from 'react'
import MessageContainer from './MessageContainer'
import Stephen from '../../assets/images/users/stephen.png'
import Alex from '../../assets/images/users/alex.png'
import Arya from '../../assets/images/users/arya.png'
import James from '../../assets/images/users/james.png'
import Austin from '../../assets/images/users/austin.png'
import Walter from '../../assets/images/users/walter.png'
import Liza from '../../assets/images/users/liza.png'
import Linda from '../../assets/images/users/linda.png'

export default {
  component: MessageContainer,
  title: 'Chat/MessageContainer',
  onClick: { action: 'onClick' },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const MessageContainerStory = ({ ...args }) => <MessageContainer {...args} />

export const MessagesContainer = MessageContainerStory.bind({})
MessagesContainer.args = {
  selectedContact: {
    userName: 'Stephen Cox',
    message: '2 unread messages',
    unread: 2,
    dateTime: '11:20 AM',
    isOnline: false,
    profileURL: Stephen,
  },
  selectedGroup: '',
  groupData: {
    general: [
      {
        userName: 'Alex Johnson',
        profileURL: Alex,
      },
      {
        userName: 'Arya Davis',
        profileURL: Arya,
      },
      {
        userName: 'James Ocean',
        profileURL: James,
      },
      {
        userName: 'Austin Winter',
        profileURL: Austin,
      },
      {
        userName: 'Walter Brown',
        profileURL: Walter,
      },
      {
        userName: 'Liza Frank',
        profileURL: Liza,
      },
    ],
    design: [
      {
        userName: 'Arya Davis',
        profileURL: Arya,
      },
      {
        userName: 'Stephen Cox',
        profileURL: Stephen,
      },
      {
        userName: 'Linda Starck',
        profileURL: Linda,
      },
      {
        userName: 'Walter Brown',
        profileURL: Walter,
      },
    ],
  },
}
