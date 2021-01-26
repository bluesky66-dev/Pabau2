import React from 'react'
import { message } from 'antd'
import styles from './Notification.module.less'
import Reconnect from './ReconnectNotification'

export enum NotificationType {
  connect = 'connect',
  success = 'success',
  edit = 'edit',
  delete = 'delete',
}

export const openNotification = (
  notificationType: string,
  text: string,
  delay: number
): void => {
  if (notificationType === NotificationType.connect) {
    message.open({
      type: 'success',
      content: <Reconnect message="" delay={delay} />,
      duration: delay,
    })
  } else if (notificationType === NotificationType.success) {
    message.open({
      type: 'success',
      content: (
        <div className={styles.successNotification}>
          <span>{text}</span>
        </div>
      ),
      duration: delay,
    })
  } else if (notificationType === NotificationType.edit) {
    message.open({
      type: 'success',
      content: (
        <div className={styles.editNotification}>
          <span>{text}</span>
        </div>
      ),
      duration: delay,
    })
  } else if (notificationType === NotificationType.delete) {
    message.open({
      type: 'success',
      content: (
        <div className={styles.deleteNotification}>
          <span>{text}</span>
        </div>
      ),
      duration: delay,
    })
  }
}
