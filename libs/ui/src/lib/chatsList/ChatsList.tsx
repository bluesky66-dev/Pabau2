import React, { FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import { Badge } from 'antd'
import { Avatar } from '@pabau/ui'

import { ReactComponent as MessageRead } from '../../assets/images/message-read.svg'
import styles from './ChatsList.module.less'

export interface chatMessage {
  userName: string
  message: string
  unread?: number
  dateTime: string
  isOnline: boolean
  profileURL: string
}

interface P {
  chatMessages?: chatMessage[]
  showChatBox?: boolean
  selectedContact?: chatMessage
  typingContact?: chatMessage
  onClick?: (selectedContact: chatMessage) => void
  showGroupChatBox?: boolean
  isNewDm?: boolean
}

export const ChatsList: FC<P> = ({ ...props }) => {
  const { chatMessages, onClick, typingContact } = props

  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [isTyping, setIsTyping] = useState<number>(-1)

  useEffect(() => {
    if (props.showGroupChatBox) {
      setActiveIndex(-1)
    }
    if (props.isNewDm) {
      setActiveIndex(-1)
    }
    typingContact
      ? chatMessages?.map(
          (item, index) =>
            item.userName === typingContact.userName && setIsTyping(index)
        )
      : setIsTyping(-1)
  }, [typingContact, chatMessages, props.showGroupChatBox, props.isNewDm])

  const onClickContact = (index) => {
    if (chatMessages) {
      setActiveIndex(index)
      const data = chatMessages[index]
      onClick?.(data)
    }
  }

  return (
    <div>
      <div className={classNames(styles.channelsText, styles.channelsHead)}>
        <p className={classNames(styles.grayTextColor, styles.textSm)}>chats</p>
      </div>
      <div>
        {chatMessages?.map((chat, index) => {
          return (
            <div
              key={chat.userName}
              onClick={() => onClickContact(index)}
              className={styles.cursor}
            >
              <div
                className={classNames(
                  styles.flex,
                  activeIndex === index
                    ? styles.profileChatSpaceActive
                    : styles.porfileChatSpace
                )}
              >
                <div className={styles.chatProfile}>
                  <Badge
                    dot
                    color={chat.isOnline ? '#65CD98' : '#FF9E44'}
                    offset={[-2, 32]}
                    size="default"
                    style={{
                      height: '12px',
                      width: '12px',
                      border: '2px solid #fff',
                    }}
                  >
                    <Avatar size={40} src={chat.profileURL} />
                  </Badge>
                </div>
                <div className={styles.chatText}>
                  <div className={classNames(styles.dFlex, styles.userDetails)}>
                    <p
                      className={classNames(
                        styles.textBlack,
                        styles.mb,
                        styles.textMd
                      )}
                    >
                      {chat.userName}
                    </p>
                    <p
                      className={classNames(
                        styles.grayTextColor,
                        styles.mb,
                        styles.textSm
                      )}
                    >
                      {chat.dateTime}
                    </p>
                  </div>
                  <div className={styles.dFlex}>
                    <span
                      className={classNames(
                        styles.grayTextColor,
                        styles.mb,
                        styles.fontMedium,
                        styles.textSm,
                        styles.userMessage
                      )}
                    >
                      {isTyping === index
                        ? `${chat.userName} is typing....`
                        : chat.message}
                    </span>
                    <h6
                      className={classNames(
                        styles.grayTextColor,
                        styles.textSm,
                        styles.mb
                      )}
                    >
                      {chat.unread ? (
                        <Badge
                          count={chat.unread}
                          style={{ backgroundColor: '#54B2D3' }}
                        />
                      ) : (
                        <MessageRead />
                      )}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ChatsList
