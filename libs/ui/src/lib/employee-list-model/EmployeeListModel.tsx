import React, { useState, FC } from 'react'
import { Popover } from 'antd'
import { Avatar } from '@pabau/ui'

import styles from './EmployeeListModel.module.less'

interface UserProps {
  userId?: string
  userAvatar: string
  username: string
  isSelected?: boolean
}

export interface EmployeeListModelProps {
  userList: UserProps[]
  label: string
  ListTitle: string
  onClick?: (value: UserProps) => void
}

export const EmployeeListModel: FC<EmployeeListModelProps> = (props) => {
  const { userList, label, ListTitle, onClick } = props
  const [open, setOpen] = useState<boolean>(false)
  const [usersList, setuserList] = useState([...userList])

  const handleUserClick = (user) => {
    const list = [...usersList]

    for (const item of list) {
      if (item.userId === user.userId) {
        item.isSelected = true
        onClick?.(item)
      } else {
        item.isSelected = false
      }
    }
    setuserList(list)
    setOpen(false)
  }

  const content = (
    <div className={`${styles.userContent} ${styles.userFullContent}`}>
      {usersList.map((item, index) => (
        <div
          className={
            item.isSelected
              ? `${styles.userList} ${styles.selected}`
              : styles.userList
          }
          key={index}
          onClick={() => handleUserClick(item)}
        >
          <Avatar
            name={item.username}
            size="small"
            src={item.userAvatar}
            zIndex={1}
          />
          <span className={styles.userContentName}>{item.username}</span>
        </div>
      ))}
    </div>
  )
  return (
    <Popover
      content={content}
      title={ListTitle}
      placement="bottomRight"
      trigger="click"
      visible={open}
      onVisibleChange={(visible) => setOpen(visible)}
      overlayClassName={styles.userPopover}
    >
      <span className={styles.highlightText} onClick={() => setOpen(true)}>
        {' '}
        {label}
      </span>
    </Popover>
  )
}

export default EmployeeListModel
