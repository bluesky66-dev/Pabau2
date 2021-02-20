import React from 'react'
import ChatsList from './ChatsList'
import Stephen from '../../assets/images/users/stephen.png'
import Linda from '../../assets/images/users/linda.png'
import Alex from '../../assets/images/users/alex.png'
import Arya from '../../assets/images/users/arya.png'
import James from '../../assets/images/users/james.png'
import Austin from '../../assets/images/users/austin.png'
import Walter from '../../assets/images/users/walter.png'
import Liza from '../../assets/images/users/liza.png'

export default {
  component: ChatsList,
  title: 'Chat/ChatList',
  onClick: { action: 'onClick' },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const ChatsListStory = ({ ...args }) => <ChatsList {...args} />

export const ListChat = ChatsListStory.bind({})
ListChat.args = {
  chatMessages: [
    {
      userName: 'Stephen Cox',
      message: '2 unread messages',
      unread: 2,
      dateTime: '11:20 AM',
      isOnline: true,
      profileURL: Stephen,
    },
    {
      userName: 'Linda Starck',
      message: 'Sounds good to me!',
      dateTime: '11:20 AM',
      isOnline: true,
      profileURL: Linda,
    },
    {
      userName: 'Alex Johnson',
      message: 'Yes, we can try it.',
      dateTime: '11:20 AM',
      isOnline: false,
      profileURL: Alex,
    },
    {
      userName: 'Arya Davis',
      message: 'Hi, Arya',
      dateTime: '11:20 AM',
      isOnline: false,
      profileURL: Arya,
    },
    {
      userName: 'James Ocean',
      message: 'Yes, look! This is awesome',
      dateTime: '11:20 AM',
      isOnline: true,
      profileURL: James,
    },
    {
      userName: 'Austin Winter',
      message: 'On Friday',
      dateTime: '11:20 AM',
      isOnline: true,
      profileURL: Austin,
    },
    {
      userName: 'Walter Brown',
      message:
        'We can schedule a meeting at 8:00 PM today. I think we will discuss...',
      dateTime: '11:20 AM',
      isOnline: true,
      profileURL: Walter,
    },
    {
      userName: 'Liza Frank',
      message: 'On Friday',
      dateTime: '11:20 AM',
      isOnline: true,
      profileURL: Liza,
    },
  ],
}
