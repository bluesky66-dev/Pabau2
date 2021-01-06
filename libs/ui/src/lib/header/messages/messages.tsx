import React, { FC, PropsWithChildren, useState } from 'react'
import { Drawer, Badge, Avatar } from 'antd'
import styles from './messages.module.less'
import { CloseOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { ReactComponent as Chat } from '../../../assets/images/chat.svg'
import classNames from 'classnames'
export interface MessagesProps {
  openDrawer: boolean
  closeDrawer: () => void
}

export const PabauMessages: FC<MessagesProps> = ({
  openDrawer = false,
  closeDrawer,
}: PropsWithChildren<MessagesProps>) => {
  const [messageDrawer, setMessageDrawer] = useState(openDrawer)
  const [notifyTab, setNotifyTab] = useState('All')

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
      className={styles.messagesDrawer}
    >
      <div className={styles.space}>
        <div className={styles.messagesAlign}>
          <div>
            <h1>Chat</h1>
          </div>
          <div>
            <EditOutlined className={classNames(styles.grayTextColor, styles.pr5)} />
            <SearchOutlined className={classNames(styles.grayTextColor, styles.pr5)} />
            <CloseOutlined className={styles.grayTextColor} onClick={closeDrawerMenu} />
          </div>
        </div>
        <div className={classNames(styles.messagesTabs, styles.topSpaceNotification)}>
          <button
            className={classNames(
              styles.messagesTabDesign,
              notifyTab === 'All' && styles.activeTabs
            )}
            onClick={() => setNotifyTab('All')}
          >
            All
          </button>
          <button
            className={classNames(
              styles.messagesTabDesign,
              notifyTab === 'Contacts' && styles.activeTabs
            )}
            onClick={() => setNotifyTab('Contacts')}
          >
            Contacts
          </button>
        </div>
      </div>
      <div className={styles.chatPanel}>
        <div className={classNames(styles.channelsText, styles.dFlex)}>
          <span className={classNames(styles.textSm, styles.grayTextColor)}>channels</span>
        </div>
        <div className={classNames(styles.dFlex, styles.channelText)}>
          <p className={classNames(styles.textBlack, styles.textMd, styles.fontMedium, styles.mb)}>
            #general
          </p>
          <h6 className={classNames(styles.grayTextColor, styles.textSm, styles.mb)}>11:20 AM</h6>
        </div>
        <div className={classNames(styles.dFlex, styles.channelMessage)}>
          <p
            className={classNames(
              styles.grayTextColor,
              styles.textMd,
              styles.fontMedium,
              styles.mb
            )}
          >
            6 unread messages
          </p>
          <h6 className={classNames(styles.grayTextColor, styles.textSm, styles.mb)}>
            <Badge count={6} style={{ backgroundColor: '#54B2D3' }} />
          </h6>
        </div>
        <div className={styles.chatBorder}></div>
        <div className={classNames(styles.dFlex, styles.channelText, styles.topSpace)}>
          <p className={classNames(styles.textBlack, styles.textMd, styles.fontMedium, styles.mb)}>
            #design
          </p>
          <h6 className={classNames(styles.grayTextColor, styles.textSm, styles.mb)}>11:20 AM</h6>
        </div>
        <div className={classNames(styles.dFlex, styles.channelMessage)}>
          <p
            className={classNames(
              styles.grayTextColor,
              styles.textMd,
              styles.fontMedium,
              styles.mb
            )}
          >
            Oliver Addams: I have an idia on this issue...
          </p>
        </div>
        <div className={styles.chatBorder}></div>
        <div className={classNames(styles.channelsText, styles.chatTopSpace)}>
          <p className={classNames(styles.grayTextColor, styles.textSm)}>chats</p>
        </div>

        {chatMessages.map((chat, index) => {
          return (
            <div key={index}>
              <div className={classNames(styles.flex, styles.porfileChatSpace)}>
                <div className={styles.chatProfile}>
                  <Avatar size={40} src={<Chat />} />
                </div>
                <div className={styles.chatText}>
                  <div className={classNames(styles.dFlex, styles.userDetails)}>
                    <p
                      className={classNames(
                        styles.textBlack,
                        styles.mb,
                        styles.fontMedium,
                        styles.textMd
                      )}
                    >
                      {chat.userName}
                    </p>
                    <p className={classNames(styles.grayTextColor, styles.mb, styles.textSm)}>
                      {chat.dateTime}
                    </p>
                  </div>
                  <div className={styles.dFlex}>
                    <p
                      className={classNames(
                        styles.grayTextColor,
                        styles.mb,
                        styles.fontMedium,
                        styles.textMd,
                        styles.userMessage
                      )}
                    >
                      {chat.message}
                    </p>
                    <h6 className={classNames(styles.grayTextColor, styles.textSm, styles.mb)}>
                      {chat.unread && (
                        <Badge count={chat.unread} style={{ backgroundColor: '#54B2D3' }} />
                      )}
                    </h6>
                  </div>
                </div>
              </div>
              <div className={styles.chatBorder}></div>
            </div>
          )
        })}
      </div>
    </Drawer>
  )
}

export default PabauMessages
