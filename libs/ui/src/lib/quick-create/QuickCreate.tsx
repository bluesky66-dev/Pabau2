import React, { FC } from 'react'
import {
  PlusCircleFilled,
  UserAddOutlined,
  RiseOutlined,
  MessageOutlined,
  MailOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import { Popover } from 'antd'
import { Button } from '@pabau/ui'
import styles from './QuickCreate.module.less'

export const QuickCreateContent: FC = () => (
  <div className={styles.quickCreateContentConatiner}>
    <p>Create</p>
    <div className={styles.quickCreateItemsContainer}>
      <div className={styles.quickCreateItem}>
        <div className={styles.quickCreateItemIcon}>
          <UserAddOutlined />
        </div>
        <p>Client</p>
      </div>
      <div className={styles.quickCreateItem}>
        <div className={styles.quickCreateItemIcon}>
          <RiseOutlined />
        </div>
        <p>Lead</p>
      </div>
      <div className={styles.quickCreateItem}>
        <div className={styles.quickCreateItemIcon}>
          <MessageOutlined />
        </div>
        <p>SMS</p>
      </div>
      <div className={styles.quickCreateItem}>
        <div className={styles.quickCreateItemIcon}>
          <WalletOutlined />
        </div>
        <p>Sale</p>
      </div>
      <div className={styles.quickCreateItem}>
        <div className={styles.quickCreateItemIcon}>
          <MailOutlined />
        </div>
        <p>Newsletter</p>
      </div>
    </div>
  </div>
)

export const QuickCreate: FC = () => {
  return (
    <div className={styles.quickCreateContainer}>
      <Popover
        placement="rightBottom"
        content={QuickCreateContent}
        trigger="click"
      >
        <Button type="default" className={styles.createBtnStyle}>
          <PlusCircleFilled /> Create
        </Button>
      </Popover>
    </div>
  )
}

export default QuickCreate
