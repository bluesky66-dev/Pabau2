import React, { FC, useState } from 'react'
import {
  PlusCircleFilled,
  UserAddOutlined,
  RiseOutlined,
  MessageOutlined,
  MailOutlined,
  WalletOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import { Popover } from 'antd'
import { Button } from '@pabau/ui'
import styles from './QuickCreate.module.less'

export const QuickCreate: FC = () => {
  const [visible, setVisible] = useState(false)

  const QuickCreateContent = () => (
    <div className={styles.quickCreateContentConatiner}>
      <div
        className={styles.quickCreateContentClose}
        onClick={() => setVisible(false)}
      >
        <CloseOutlined />
      </div>
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
  return (
    <div className={styles.quickCreateContainer}>
      <Popover
        placement="bottomRight"
        content={QuickCreateContent}
        trigger="click"
        visible={visible}
      >
        <Button
          type="default"
          className={styles.createBtnStyle}
          onClick={() => setVisible(true)}
        >
          <PlusCircleFilled /> Create
        </Button>
      </Popover>
    </div>
  )
}

export default QuickCreate
