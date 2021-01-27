import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Drawer, Badge, Avatar, Modal, Button, Input } from 'antd'
import styles from './Messages.module.less'
import {
  CloseOutlined,
  EditOutlined,
  SearchOutlined,
  PlusCircleFilled,
  PlusOutlined,
} from '@ant-design/icons'
// import { ReactComponent as Chat } from '../../../assets/images/chat.svg'
import { ReactComponent as ChatPopIcon } from '../../../assets/images/chat-pop-icon.svg'
import { ReactComponent as EmojiIcon } from '../../../assets/images/emoji-icon.svg'
import { ReactComponent as AddUserIcon } from '../../../assets/images/add-user-icon.svg'
import Stephen from '../../../assets/images/users/stephen.png'
import Linda from '../../../assets/images/users/linda.png'
import Alex from '../../../assets/images/users/alex.png'
import Arya from '../../../assets/images/users/arya.png'
import James from '../../../assets/images/users/james.png'
import Austin from '../../../assets/images/users/austin.png'
import Walter from '../../../assets/images/users/walter.png'
import Liza from '../../../assets/images/users/liza.png'

import classNames from 'classnames'
export interface MessagesProps {
  openDrawer: boolean
  closeDrawer: () => void
}

interface Contact {
  userName: string
  message: string
  unread?: number
  dateTime: string
  isOnline: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profileURL: any
}

const groupData = {
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
}

interface Member {
  userName: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profileURL: any
}

export const PabauMessages: FC<MessagesProps> = ({
  openDrawer = false,
  closeDrawer,
}: PropsWithChildren<MessagesProps>) => {
  const WidthEnum = {
    MessageBox: 392,
    ChatBox: 522,
  }
  const [messageDrawer, setMessageDrawer] = useState(openDrawer)
  const [notifyTab, setNotifyTab] = useState('All')
  const [selectedContact, setSelectedContact] = useState<Contact>()
  const [drawerWidth, setDrawerWidth] = useState(WidthEnum.MessageBox)
  const [showChatBox, setShowChatBox] = useState(false)
  const [showGroupChatBox, setShowGroupChatBox] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState('')
  const [isGroupModalVisible, setIsGroupModalVisible] = useState(false)
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [memberModalTitle, setMemberModalTitle] = useState('')
  const [searchAddMember, setSearchAddMember] = useState<Member[]>([])
  const [searchMember, setSearchMember] = useState<Member[]>([])
  const [searchMemberText, setSearchMemberText] = useState('')

  const chatMessages = [
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
  ]

  const closeDrawerMenu = () => {
    setMessageDrawer(false)
    closeDrawer()
  }

  const onClickContact = (index) => {
    if (chatMessages) {
      const data = chatMessages[index]
      setSelectedContact({ ...data })
    }
    setShowChatBox(true)
    setDrawerWidth(WidthEnum.MessageBox + WidthEnum.ChatBox)
  }

  useEffect(() => {
    if (selectedGroup !== '') {
      setMemberModalTitle(
        Object.keys(groupData[selectedGroup]).length +
          ' Members In #' +
          selectedGroup.charAt(0).toUpperCase() +
          selectedGroup.slice(1)
      )
    }
  }, [selectedGroup])

  const searchAddPeople = (value) => {
    const results = Array<Member>()
    for (const groupKey in groupData) {
      for (const key in groupData[groupKey]) {
        if (
          value !== '' &&
          groupData[groupKey][key].userName.indexOf(value) !== -1
        ) {
          results.push(groupData[groupKey][key])
        }
      }
    }
    setSearchAddMember([...results])
  }

  const searchGroupMember = (value) => {
    const results = Array<Member>()
    for (const key in groupData[selectedGroup]) {
      if (
        value !== '' &&
        groupData[selectedGroup][key].userName.indexOf(value) !== -1
      ) {
        results.push(groupData[selectedGroup][key])
      }
    }
    setSearchMember([...results])
  }

  return (
    <Drawer
      width={drawerWidth}
      placement="right"
      closable={false}
      onClose={closeDrawerMenu}
      visible={messageDrawer}
      className={styles.messagesDrawer}
    >
      <div className={styles.messageBox}>
        <div className={styles.chatSpace}>
          <div className={styles.messagesAlign}>
            <div>
              <h1>Chat</h1>
            </div>
            <div>
              <EditOutlined
                className={classNames(
                  styles.grayTextColor,
                  styles.pr5,
                  styles.chatIconStyle
                )}
              />
              <SearchOutlined
                className={classNames(
                  styles.grayTextColor,
                  styles.pr5,
                  styles.chatIconStyle
                )}
              />
              {!showChatBox && !showGroupChatBox && (
                <CloseOutlined
                  className={classNames(
                    styles.grayTextColor,
                    styles.chatIconStyle,
                    styles.closeIcon
                  )}
                  onClick={closeDrawerMenu}
                />
              )}
            </div>
          </div>
          <div
            className={classNames(
              styles.messagesTabs,
              styles.topSpaceNotification
            )}
          >
            <button
              className={classNames(
                styles.messagesTabDesign,
                notifyTab === 'All' && styles.activeTabs
              )}
              onClick={() => {
                setNotifyTab('All')
                setShowChatBox(false)
                setDrawerWidth(WidthEnum.MessageBox)
              }}
            >
              All
            </button>
            <button
              className={classNames(
                styles.messagesTabDesign,
                notifyTab === 'Contacts' && styles.activeTabs
              )}
              onClick={() => {
                setNotifyTab('Contacts')
                setShowGroupChatBox(false)
                setDrawerWidth(WidthEnum.MessageBox)
              }}
            >
              Contacts
            </button>
          </div>
        </div>
        <div className={styles.chatPanel}>
          {notifyTab === 'All' && (
            <>
              <div
                className={classNames(styles.channelsText, styles.dFlex)}
                style={{ cursor: 'pointer', transition: 'all 0.5s' }}
              >
                <span
                  className={classNames(styles.textSm, styles.grayTextColor)}
                >
                  channels
                </span>

                <PlusCircleFilled
                  className={styles.addChannelIcon}
                  style={{
                    color: 'var(--primary-color)',
                    fontSize: 'var(--font-size-base)',
                  }}
                />
              </div>
              <div
                onClick={() => {
                  setShowGroupChatBox(true)
                  setSelectedGroup('general')
                  setDrawerWidth(WidthEnum.ChatBox + WidthEnum.MessageBox)
                }}
              >
                <div className={classNames(styles.dFlex, styles.channelText)}>
                  <p
                    className={classNames(
                      styles.textBlack,
                      styles.textMd,
                      styles.fontMedium,
                      styles.mb,
                      styles.channelName
                    )}
                  >
                    #general
                  </p>
                  <h6
                    className={classNames(
                      styles.grayTextColor,
                      styles.textSm,
                      styles.mb,
                      styles.channelName
                    )}
                  >
                    11: 20 AM
                  </h6>
                </div>
                <div
                  className={classNames(styles.dFlex, styles.channelMessage)}
                >
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
                  <h6
                    className={classNames(
                      styles.grayTextColor,
                      styles.textSm,
                      styles.mb
                    )}
                  >
                    <Badge count={6} style={{ backgroundColor: '#54B2D3' }} />
                  </h6>
                </div>
              </div>
              <div className={styles.chatBorder}></div>
              <div
                onClick={() => {
                  setShowGroupChatBox(true)
                  setSelectedGroup('design')
                  setDrawerWidth(WidthEnum.ChatBox + WidthEnum.MessageBox)
                }}
              >
                <div className={classNames(styles.dFlex, styles.channelText)}>
                  <p
                    className={classNames(
                      styles.textBlack,
                      styles.textMd,
                      styles.fontMedium,
                      styles.mb,
                      styles.channelName
                    )}
                  >
                    #design
                  </p>
                  <h6
                    className={classNames(
                      styles.grayTextColor,
                      styles.textSm,
                      styles.mb,
                      styles.channelName
                    )}
                  >
                    11: 20 AM
                  </h6>
                </div>
                <div
                  className={classNames(styles.dFlex, styles.channelMessage)}
                >
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
              </div>
              <div className={styles.chatBorder}></div>
              <div
                className={classNames(styles.channelsText, styles.chatTopSpace)}
              >
                <p className={classNames(styles.grayTextColor, styles.textSm)}>
                  chats
                </p>
              </div>
            </>
          )}

          {chatMessages.map((chat, index) => {
            return (
              <div
                key={chat.userName}
                onClick={() => {
                  if (notifyTab === 'Contacts') onClickContact(index)
                }}
              >
                <div
                  className={classNames(styles.flex, styles.porfileChatSpace)}
                >
                  <div className={styles.chatProfile}>
                    <Badge
                      dot
                      color={chat.isOnline ? '#65CD98' : '#FF9E44'}
                      offset={[-2, 32]}
                      size="default"
                      style={{ height: '8px', width: '8px' }}
                    >
                      <Avatar size={40} src={chat.profileURL} />
                    </Badge>
                  </div>
                  <div className={styles.chatText}>
                    <div
                      className={classNames(styles.dFlex, styles.userDetails)}
                    >
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
                      <h6
                        className={classNames(
                          styles.grayTextColor,
                          styles.textSm,
                          styles.mb
                        )}
                      >
                        {chat.unread && (
                          <Badge
                            count={chat.unread}
                            style={{ backgroundColor: '#54B2D3' }}
                          />
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
      </div>
      {showChatBox && (
        <div className={styles.chatBoxContainer}>
          <div className={styles.chatHeaderContainer}>
            {selectedContact && (
              <div className={styles.chatHeader}>
                <Badge
                  dot
                  color={selectedContact.isOnline ? '#65CD98' : '#FF9E44'}
                  offset={[-2, 32]}
                  size="default"
                  style={{ height: '8px', width: '8px' }}
                >
                  <Avatar size={40} src={selectedContact.profileURL} />
                </Badge>
                <p className={styles.chatHeaderName}>
                  {selectedContact.userName}
                </p>
              </div>
            )}
            <div className={styles.chatHeader}>
              <ChatPopIcon style={{ margin: '0 20px' }} />
              <CloseOutlined
                className={classNames(
                  styles.grayTextColor,
                  styles.chatIconStyle,
                  styles.closeIcon
                )}
                onClick={closeDrawerMenu}
              />
            </div>
          </div>
          <div className={styles.messageContainer}>
            <div className={styles.receivedAlign}>
              <div className={styles.receivedMessage}>
                <p className={styles.receivedMessageText}>
                  I will search some reference for that
                </p>
                <p className={styles.receivedMessageTime}>11:24 AM</p>
              </div>
            </div>
            <div className={styles.sendAlign}>
              <div className={styles.sendMessage}>
                <p className={styles.sendMessageText}>
                  I will search some reference for that
                </p>
                <p className={styles.sendMessageTime}>11:24 AM</p>
              </div>
            </div>
          </div>
          <div className={styles.messageInputContainer}>
            <input
              className={styles.messageInput}
              type="text"
              placeholder={'Message'}
            />
            <EmojiIcon />
          </div>
        </div>
      )}
      {showGroupChatBox && (
        <div className={styles.chatBoxContainer}>
          <div className={styles.chatHeaderContainer}>
            <p className={styles.chatHeaderName}>#{selectedGroup}</p>
            <div className={styles.chatHeader}>
              <div
                className={styles.userImageList}
                onClick={() => setIsGroupModalVisible(true)}
              >
                {selectedGroup && (
                  <>
                    <Avatar
                      size={25}
                      src={groupData[selectedGroup][0].profileURL}
                    />
                    <Avatar
                      className={styles.userImage}
                      size={25}
                      src={groupData[selectedGroup][1].profileURL}
                    />
                    <Avatar
                      className={styles.userImage}
                      size={25}
                      src={groupData[selectedGroup][2].profileURL}
                    />
                    <p className={styles.groupCount}>
                      {groupData[selectedGroup].length}
                    </p>
                  </>
                )}
                <Modal
                  centered
                  title={memberModalTitle}
                  visible={isGroupModalVisible}
                  onOk={(e) => {
                    e.stopPropagation()
                    setIsGroupModalVisible(false)
                  }}
                  onCancel={(e) => {
                    e.stopPropagation()
                    setIsGroupModalVisible(false)
                  }}
                  width={680}
                  className={styles.memberModal}
                  footer={null}
                >
                  <Button
                    className={styles.modalAddButton}
                    type="default"
                    icon={<PlusOutlined />}
                    size="middle"
                    onClick={() => setIsAddModalVisible(true)}
                  >
                    Add People
                  </Button>
                  <Input
                    className={styles.modalSearchInput}
                    size="large"
                    placeholder="Search members"
                    prefix={<SearchOutlined />}
                    onChange={(e) => {
                      searchGroupMember(e.target.value)
                      setSearchMemberText(e.target.value)
                    }}
                  />
                  {searchMemberText === '' &&
                    groupData[selectedGroup].map((member, index) => (
                      <div key={member.userName} className={styles.modalMember}>
                        <div className={styles.memberInfo}>
                          <Avatar
                            className={styles.memberAvatar}
                            size={32}
                            src={member.profileURL}
                          />
                          <span className={styles.memberName}>
                            {member.userName}
                          </span>
                        </div>
                        <Button type="default" size="middle">
                          Remove
                        </Button>
                      </div>
                    ))}
                  {searchMemberText !== '' &&
                    searchMember.map((member, index) => (
                      <div key={member.userName} className={styles.modalMember}>
                        <div className={styles.memberInfo}>
                          <Avatar
                            className={styles.memberAvatar}
                            size={32}
                            src={member.profileURL}
                          />
                          <span className={styles.memberName}>
                            {member.userName}
                          </span>
                        </div>
                        <Button type="default" size="middle">
                          Remove
                        </Button>
                      </div>
                    ))}
                </Modal>
                <Modal
                  centered
                  title="Add People"
                  visible={isAddModalVisible}
                  onOk={(e) => {
                    e.stopPropagation()
                    setIsAddModalVisible(false)
                  }}
                  onCancel={(e) => {
                    e.stopPropagation()
                    setIsAddModalVisible(false)
                  }}
                  width={680}
                  className={styles.addMemberModal}
                  footer={null}
                >
                  <span>#{selectedGroup}</span>
                  <Input
                    className={styles.addMemberSearchInput}
                    size="large"
                    placeholder="Enter a name email, or user group"
                    onChange={(e) => searchAddPeople(e.target.value)}
                  />
                  {searchAddMember &&
                    searchAddMember.map((member, index) => (
                      <div key={member.userName} className={styles.modalMember}>
                        <div className={styles.memberInfo}>
                          <Avatar
                            className={styles.memberAvatar}
                            size={32}
                            src={member.profileURL}
                          />
                          <span className={styles.memberName}>
                            {member.userName}
                          </span>
                        </div>
                        <Button type="default" size="middle">
                          Add
                        </Button>
                      </div>
                    ))}
                </Modal>
              </div>
              <AddUserIcon style={{ margin: '0 20px' }} />
              <CloseOutlined
                className={classNames(
                  styles.grayTextColor,
                  styles.chatIconStyle,
                  styles.closeIcon
                )}
                onClick={closeDrawerMenu}
              />
            </div>
          </div>
          <div className={styles.messageContainer}>
            <div className={styles.receivedAlign}>
              <div className={styles.receivedMessage}>
                <p className={styles.receivedMessageText}>
                  I will search some reference for that
                </p>
                <p className={styles.receivedMessageTime}>11:24 AM</p>
              </div>
            </div>
            <div className={styles.sendAlign}>
              <div className={styles.sendMessage}>
                <p className={styles.sendMessageText}>
                  I will search some reference for that
                </p>
                <p className={styles.sendMessageTime}>11:24 AM</p>
              </div>
            </div>
          </div>
          <div className={styles.messageInputContainer}>
            <input
              className={styles.messageInput}
              type="text"
              placeholder={'Message'}
            />
            <EmojiIcon />
          </div>
        </div>
      )}
    </Drawer>
  )
}

export default PabauMessages
