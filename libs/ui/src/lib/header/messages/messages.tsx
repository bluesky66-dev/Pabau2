import React, { FC, PropsWithChildren, useState } from 'react'
import { Drawer, Badge, Avatar } from 'antd'
import './messages.less'
import { CloseOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'

import { ReactComponent as Chat } from '../../../assets/images/chat.svg'

export interface MessagesProps {
  openDrawer: boolean
  closeDrawer: () => void
}

export const PabauMessages: FC<MessagesProps> = ({
  openDrawer = false,
  closeDrawer,
}: PropsWithChildren<MessagesProps>) => {
  const [messageDrawer, setMessageDrawer] = useState(openDrawer)
  const [notifyTab, setNotifyTab] = useState('Clients')

  const chatMessages = [
    {
      userName: 'Stephen Cox',
      message: '2 unread messages',
      unread: 2,
      dateTime: '11:20 AM',
    },
    {
      userName: 'Linda Starck',
      message: 'Sounds good to me!',
      dateTime: '11:20 AM',
    },
    {
      userName: 'Alex Johnson',
      message: 'Yes, we can try it.',
      dateTime: '11:20 AM',
    },
    {
      userName: 'Arya Davis',
      message: 'Hi, Arya',
      dateTime: '11:20 AM',
    },
    {
      userName: 'James Ocean',
      message: 'Yes, look! This is awesome',
      dateTime: '11:20 AM',
    },
    {
      userName: 'Austin Winter',
      message: 'On Friday',
      dateTime: '11:20 AM',
    },
    {
      userName: 'Walter Brown',
      message: 'We can schedule a meeting at 8:00 PM today. I think we will discuss...',
      dateTime: '11:20 AM',
    },
    {
      userName: 'Liza Frank',
      message: 'On Friday',
      dateTime: '11:20 AM',
    },
  ]

  const closeDrawerMenu = () => {
    setMessageDrawer(false)
    closeDrawer()
  }
  return (
    <Drawer
      width={392}
      placement="right"
      closable={false}
      onClose={closeDrawerMenu}
      visible={messageDrawer}
      className="messages-drawer"
    >
      <div className="space">
        <div className="messages-align">
          <div>
            <h1>Chat</h1>
          </div>
          <div>
            <EditOutlined className="gray-text-color pr-5" />
            <SearchOutlined className="gray-text-color pr-5" />
            <CloseOutlined className="gray-text-color" onClick={closeDrawerMenu} />
          </div>
        </div>
        <div className="messages-tabs top-space-notification">
          <button
            className={`messages-tab-design ${notifyTab === 'Clients' && 'active-tabs'}`}
            onClick={() => setNotifyTab('Clients')}
          >
            All
          </button>
          <button
            className={`messages-tab-design ${notifyTab === 'Leads' && 'active-tabs'}`}
            onClick={() => setNotifyTab('Leads')}
          >
            Contacts
          </button>
        </div>
      </div>
      <div className="chat-panel">
        <div className="channels-text d-flex">
          <span className="text-sm gray-text-color">channels</span>
        </div>
        <div className="d-flex channel-text">
          <p className="text-black text-md font-medium mb"> #general </p>
          <h6 className="gray-text-color text-sm mb">11:20 AM</h6>
        </div>
        <div className="d-flex channel-message">
          <p className="gray-text-color text-md font-medium mb"> 6 unread messages </p>
          <h6 className="gray-text-color text-sm mb">
            <Badge count={6} style={{ backgroundColor: '#54B2D3' }} />
          </h6>
        </div>
        <div className="chat-border"></div>
        <div className="d-flex channel-text top-space">
          <p className="text-black text-md font-medium mb"> #design </p>
          <h6 className="gray-text-color text-sm mb">11:20 AM</h6>
        </div>
        <div className="d-flex channel-message">
          <p className="gray-text-color text-md font-medium mb">
            Oliver Addams: I have an idia on this issue...
          </p>
        </div>
        <div className="chat-border"></div>
        <div className="channels-text chat-top-space">
          <p className="gray-text-color text-sm ">chats</p>
        </div>

        {chatMessages.map((chat) => {
          return (
            <>
              <div className="flex porfile-chat-space">
                <div className="chat-profile">
                  <Avatar size={40} src={<Chat />} />
                </div>
                <div className="chat-text">
                  <div className="d-flex user-details">
                    <p className="text-black mb font-medium text-md">{chat.userName}</p>
                    <p className="gray-text-color mb text-sm ">{chat.dateTime}</p>
                  </div>
                  <div className="d-flex">
                    <p className="gray-text-color mb font-medium text-md user-message">
                      {chat.message}
                    </p>
                    <h6 className="gray-text-color text-sm mb">
                      {chat.unread && (
                        <Badge count={chat.unread} style={{ backgroundColor: '#54B2D3' }} />
                      )}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="chat-border"></div>
            </>
          )
        })}
      </div>
    </Drawer>
  )
}

export default PabauMessages
