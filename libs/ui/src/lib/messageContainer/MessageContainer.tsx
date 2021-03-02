import React, { FC, MouseEvent } from 'react'
import classNames from 'classnames'
import { Badge, Select, Avatar } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

import Stephen from '../../assets/images/users/stephen.png'
import Linda from '../../assets/images/users/linda.png'

import { ReactComponent as ChatPopIcon } from '../../assets/images/chat-pop-icon.svg'
import { ReactComponent as AddUserIcon } from '../../assets/images/add-user-icon.svg'
import { ReactComponent as ThreeDotVertical } from '../../assets/images/three-dot-v.svg'
import { ReactComponent as MessageRead } from '../../assets/images/message-read.svg'
import { ChatsInput } from '../chatInput/ChatInput.stories'
import styles from './MessageContainer.module.less'

const { Option } = Select

interface SelectedContact {
  userName: string
  message: string
  unread?: number
  dateTime: string
  isOnline: boolean
  profileURL: string
}

interface Member {
  userName: string
  profileURL: string
  isOnline: boolean
}

interface groupData {
  general: Member[]
  design: Member[]
}

interface P {
  selectedContact?: SelectedContact
  selectedGroup?: string
  groupData?: groupData
  members?: Member[]
  onClick?: () => void
  onMessageType?: (e: MouseEvent<HTMLElement>) => void
  onModalOpen?: () => void
  isNewDm?: boolean
  onCloseNewDm?: () => void
  messages?: []
}

export const MessageContainer: FC<P> = ({ ...props }) => {
  const {
    selectedContact,
    selectedGroup,
    onClick,
    onMessageType,
    groupData,
    onModalOpen,
    isNewDm,
    members,
    onCloseNewDm,
    messages,
  } = props

  const handleSelectChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <div className={styles.chatBoxContainer}>
      {selectedContact && (
        <div className={styles.chatHeaderContainer}>
          <div className={styles.chatHeaderContact}>
            <Badge
              dot
              color={selectedContact.isOnline ? '#65CD98' : '#FF9E44'}
              offset={[-2, 32]}
              size="default"
              style={{ height: '8px', width: '8px' }}
            >
              <Avatar size={40} src={selectedContact.profileURL} />
            </Badge>
            <div className={styles.chatHeaderRight}>
              <p className={styles.chatHeaderName}>
                {selectedContact.userName}
              </p>
              <p className={styles.chatHeaderSub}>Managing Director</p>
            </div>
          </div>
          <div className={styles.chatHeaderContact}>
            <ChatPopIcon style={{ margin: '0 20px' }} />
            <CloseOutlined
              className={classNames(styles.grayTextColor, styles.chatIconStyle)}
              onClick={() => onClick?.()}
            />
          </div>
        </div>
      )}
      {isNewDm && (
        <div
          className={classNames(
            styles.chatHeaderContainer,
            styles.chatHeaderSearch
          )}
        >
          <div className={styles.chatHeader}>
            <p className={styles.chatHeaderName}>New message</p>
            <CloseOutlined
              className={classNames(styles.grayTextColor, styles.chatIconStyle)}
              onClick={() => onCloseNewDm?.()}
            />
          </div>
          <div className={styles.chatWrapInput}>
            <div className={styles.chatHeaderContainer}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder=" Type the name of a channel or people"
                onChange={handleSelectChange}
              >
                {members?.map((member) => (
                  <Option
                    key={member.userName}
                    value={member.userName}
                    label={member.userName}
                  >
                    <div>
                      <span role="img">
                        <Avatar
                          className={styles.memberAvatar}
                          size={32}
                          src={member.profileURL}
                        />
                      </span>
                      {` ${member.userName}`}
                    </div>
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      )}
      {selectedGroup && groupData && (
        <div className={styles.chatHeaderContainer}>
          <div className={styles.chatHeader} onClick={() => onModalOpen?.()}>
            <p className={styles.chatHeaderName}>#{selectedGroup}</p>
            <div className={styles.userWrapper}>
              <div className={styles.avtarList}>
                <Avatar.Group
                  maxCount={3}
                  size="large"
                  maxStyle={{
                    color: '#f56a00',
                    backgroundColor: '#fde3cf',
                  }}
                  className={styles.avtarListInner}
                >
                  <Avatar
                    src={groupData[selectedGroup][0].profileURL}
                    size={25}
                  />
                  <Avatar
                    src={groupData[selectedGroup][1].profileURL}
                    size={25}
                  />
                  <Avatar
                    src={groupData[selectedGroup][2].profileURL}
                    size={25}
                  />
                </Avatar.Group>
                <div className={styles.groupCount}>
                  {groupData[selectedGroup].length}
                </div>
              </div>
              <AddUserIcon style={{ margin: '0 20px' }} />
              <ThreeDotVertical className={styles.dotIcon} />
              <CloseOutlined
                className={classNames(
                  styles.grayTextColor,
                  styles.chatIconStyle,
                  styles.closeIcon
                )}
                onClick={() => onClick?.()}
              />
            </div>
          </div>
        </div>
      )}
      <div className={styles.messageContainer}>
        <div className={styles.messageContainerInner}>
          {messages && messages?.length <= 0 ? (
            <div className={styles.invalidMessage}>No messages here yet</div>
          ) : (
            <div>
              <div className={styles.dayPast}>
                <span> Yesterday </span>
              </div>
              <div className={styles.receivedAlign}>
                <Avatar className={styles.receivedUser} size={32} src={Linda} />
                <div className={styles.receivedMessage}>
                  <p className={styles.receivedMessageText}>
                    I will search some reference for that
                  </p>
                  <div className={styles.timeRight}>
                    <p className={styles.receivedMessageTime}>11:24 AM</p>
                    <MessageRead />
                  </div>
                </div>
              </div>
              <div className={styles.sendAlign}>
                <Avatar className={styles.sendUser} size={32} src={Stephen} />
                <div className={styles.sendMessage}>
                  <p className={styles.sendMessageText}>
                    I will search some reference for that
                  </p>
                  <div className={styles.timeRight}>
                    <p className={styles.sendMessageTime}>11:24 AM</p>
                    <MessageRead />
                  </div>
                </div>
              </div>
              <div className={styles.dayIndex}>
                <span> Today </span>
              </div>
              <div className={styles.receivedAlign}>
                <Avatar className={styles.receivedUser} size={32} src={Linda} />
                <div className={styles.receivedMessage}>
                  <p className={styles.receivedMessageText}>
                    I will search some reference for that
                  </p>
                  <div className={styles.timeRight}>
                    <p className={styles.receivedMessageTime}>11:24 AM</p>
                    <MessageRead />
                  </div>
                </div>
              </div>
              <div className={styles.sendAlign}>
                <Avatar className={styles.sendUser} size={32} src={Stephen} />
                <div className={styles.sendMessage}>
                  <p className={styles.sendMessageText}>
                    I will search some reference for that
                  </p>
                  <div className={styles.timeRight}>
                    <p className={styles.sendMessageTime}>11:24 AM</p>
                    <MessageRead />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ChatsInput onMessageType={onMessageType} />
    </div>
  )
}

export default MessageContainer
