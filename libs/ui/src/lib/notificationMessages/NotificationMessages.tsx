import React, { FC, ReactNode } from 'react'
import { Badge } from '../..'
import styles from './NotificationMessages.module.less'

export interface NotificationData {
  header: string
  description: string
  icon: ReactNode
  smartDelivery: boolean
  link: string
}

export interface NotificationMessagesProps {
  notificationData?: NotificationData[]
  onClick?: (selectedLink: string) => void
}

const NotificationMessages: FC<NotificationMessagesProps> = (props) => {
  const handleClick = (notification) => {
    props.onClick?.(notification)
  }

  return (
    <div>
      {props?.notificationData?.map((notification, index) => (
        <div
          className={styles.scoreBody}
          key={notification.header}
          onClick={() => handleClick(notification.link)}
        >
          <div className={styles.container}>
            <div className={styles.colStatusLabel}>
              <span className={styles.iconSecuritytools}>
                {notification.icon}
              </span>
            </div>
            <div className={styles.containerCol}>
              <span className={styles.p1}>{notification.header}</span>
              <span className={styles.p2}>{notification.description}</span>
            </div>
            <div className={styles.stateLabel}>
              <div className={styles.badgeLabel}>
                <Badge />
              </div>
              <div className={styles.smartLabel}>
                {notification.smartDelivery && <span> +Smart delivery</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NotificationMessages
