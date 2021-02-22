import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useState,
  MouseEvent,
} from 'react'
import { Drawer, Input } from 'antd'
import styles from './Messages.module.less'
import { CloseOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import {
  BasicModal,
  Switch,
  GroupList,
  ChatsList,
  AddGroupModal,
  AddPeopleModal,
  MessageContainer,
} from '@pabau/ui'

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
  onCreateChannel?: (
    name: string,
    description: string,
    isPrivate: boolean
  ) => void
  onMessageType?: (e: MouseEvent<HTMLElement>) => void
}

interface Contact {
  userName: string
  message: string
  unread?: number
  dateTime: string
  isOnline: boolean
  profileURL: string
}

const members = [
  {
    userName: 'Alex Johnson',
    profileURL: Alex,
    isOnline: true,
  },
  {
    userName: 'Arya Davis',
    profileURL: Arya,
    isOnline: false,
  },
  {
    userName: 'James Ocean',
    profileURL: James,
    isOnline: true,
  },
  {
    userName: 'Austin Winter',
    profileURL: Austin,
    isOnline: false,
  },
  {
    userName: 'Walter Brown',
    profileURL: Walter,
    isOnline: true,
  },
  {
    userName: 'Liza Frank',
    profileURL: Liza,
    isOnline: true,
  },
]

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

export const PabauMessages: FC<MessagesProps> = ({
  openDrawer = false,
  closeDrawer,
  onMessageType,
  onCreateChannel,
}: PropsWithChildren<MessagesProps>) => {
  const WidthEnum = {
    MessageBox: 392,
    ChatBox: 522,
  }
  const [messageDrawer, setMessageDrawer] = useState(openDrawer)
  const [selectedContact, setSelectedContact] = useState<Contact>()
  const [drawerWidth, setDrawerWidth] = useState(WidthEnum.MessageBox)
  const [showChatBox, setShowChatBox] = useState(false)
  const [showGroupChatBox, setShowGroupChatBox] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState('general')
  const [isGroupModalVisible, setIsGroupModalVisible] = useState(false)
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [memberModalTitle, setMemberModalTitle] = useState('')
  const [typingContact, setTypingContact] = useState<Contact>()

  //createChaneel
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const [isCreateChannel, setIsCreateChannel] = useState(false)

  //new DM
  const [isNewDm, setIsNewDm] = useState(false)

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

  const handleNameChange = (e): void => {
    if (e.target.value.length < 80) {
      setName(e.target.value)
    }
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const onChangeToPrivate = (checked) => {
    setIsPrivate(checked)
  }

  const onCreate = async () => {
    onCreateChannel
      ? await onCreateChannel(name, description, isPrivate)
      : toggleCreateChannel()
    toggleCreateChannel()
  }
  const toggleCreateChannel = () => {
    setIsCreateChannel(!isCreateChannel)
  }

  const toggleNewDm = () => {
    setShowChatBox(false)
    setShowGroupChatBox(false)
    setIsNewDm(true)
    setDrawerWidth(WidthEnum.MessageBox + WidthEnum.ChatBox)
  }

  const closeNewDm = () => {
    setIsNewDm(false)
    closeDrawer()
  }

  const closeDrawerMenu = () => {
    setMessageDrawer(false)
    closeDrawer()
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

  const handleGroupClick = (e, type) => {
    setShowGroupChatBox(true)
    setShowChatBox(false)
    setIsNewDm(false)
    setSelectedGroup(type)
    setDrawerWidth(WidthEnum.ChatBox + WidthEnum.MessageBox)
  }

  const handleClick = (e) => {
    setSelectedContact(e)
    setShowGroupChatBox(false)
    setShowChatBox(true)
    setIsNewDm(false)
    setDrawerWidth(WidthEnum.MessageBox + WidthEnum.ChatBox)
  }

  const handleOk = () => {
    setIsGroupModalVisible(false)
  }

  const handleAddOk = () => {
    setIsAddModalVisible(false)
  }

  const onAddMembers = () => {
    setIsAddModalVisible(false)
  }

  const handleCancel = () => {
    setIsGroupModalVisible(false)
  }

  const handleAddCancel = () => {
    setIsAddModalVisible(false)
  }

  const handleAddClick = () => {
    setIsAddModalVisible(true)
  }

  const handleMessageType = (e) => {
    if (isNewDm || showGroupChatBox) {
      setTypingContact(undefined)
    } else {
      e.target.value !== ''
        ? setTypingContact(selectedContact)
        : setTypingContact(undefined)
    }
    onMessageType?.(e)
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
                onClick={toggleNewDm}
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
        </div>
        <div className={styles.chatPanel}>
          <GroupList
            onClick={handleGroupClick}
            showChatBox={showChatBox}
            isNewDm={isNewDm}
            onCreateModalClick={toggleCreateChannel}
          />
          <ChatsList
            chatMessages={chatMessages}
            typingContact={typingContact}
            onClick={handleClick}
            showGroupChatBox={showGroupChatBox}
            showChatBox={showChatBox}
            isNewDm={isNewDm}
            selectedContact={selectedContact}
          />
        </div>

        <BasicModal
          modalWidth={682}
          centered={true}
          title="create A Channel"
          newButtonText={'Create'}
          className={styles.createChannelModal}
          newButtonDisable={name.length <= 0}
          onOk={() => onCreate()}
          dangerButtonText={`Cancel`}
          onCancel={toggleCreateChannel}
          onDelete={toggleCreateChannel}
          visible={isCreateChannel}
        >
          <div className={styles.content}>
            Channels are where your team communicates. They’re best when
            organized around a topic – #marketing, for example.
          </div>
          <div className={styles.textControl}>
            <div>Name</div>
            <Input
              className={styles.nameInput}
              placeholder="# e.g. plan-budget"
              onChange={handleNameChange}
              value={name}
              suffix={80 - name.length}
            />
          </div>
          <div className={styles.textControl}>
            <div>Description</div>
            <Input
              placeholder="What’s this channel about?"
              onChange={handleDescriptionChange}
            />
          </div>
          <div>
            <div>Make private</div>
            <div className={styles.switchContent}>
              <div className={styles.switchText}>
                When a channel is set to private, it can be only be viewed or
                joined by invitation.
              </div>
              <div className={styles.switch}>
                <Switch onChange={onChangeToPrivate} />
              </div>
            </div>
          </div>
        </BasicModal>
      </div>
      {showChatBox && (
        <MessageContainer
          selectedContact={selectedContact}
          onClick={closeDrawerMenu}
          onMessageType={handleMessageType}
        />
      )}
      {showGroupChatBox && (
        <div className={styles.chatBoxContainer}>
          <MessageContainer
            onClick={closeDrawerMenu}
            onMessageType={handleMessageType}
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            groupData={groupData}
            selectedGroup={selectedGroup}
            onModalOpen={() => setIsGroupModalVisible(true)}
          />
          <AddGroupModal
            memberModalTitle={memberModalTitle}
            groupData={groupData}
            selectedGroup={selectedGroup}
            isGroupModalVisible={isGroupModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            onClick={handleAddClick}
          />
          <AddPeopleModal
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            groupData={groupData}
            isAddModalVisible={isAddModalVisible}
            members={members}
            selectedGroup={selectedGroup}
            onOk={handleAddOk}
            onAddMembers={onAddMembers}
            onCancel={handleAddCancel}
          />
        </div>
      )}
      {isNewDm && (
        <MessageContainer
          isNewDm={isNewDm}
          members={members}
          messages={[]}
          onCloseNewDm={closeNewDm}
          onMessageType={handleMessageType}
        />
      )}
    </Drawer>
  )
}

export default PabauMessages
