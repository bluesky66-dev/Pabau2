import React from 'react'
import { message } from 'antd'
import styles from './Notification.module.less'
import Reconnect from './ReconnectNotification'
import {
  CheckCircleFilled,
  CloseCircleOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'

export enum NotificationType {
  info = 'info',
  success = 'success',
  error = 'error',
  warning = 'warning',
  loading = 'loading',
  connect = 'connect',
}

export const Notification = (
  notificationType: NotificationType,
  text: string,
  delay = 2
): void => {
  let notify
  const onClose = () => {
    notify()
  }

  const notifyIcon = () => {
    if (notificationType === NotificationType.success) {
      return <CheckCircleFilled className={styles.notifyIcon} />
    } else if (notificationType === NotificationType.error) {
      return <CloseCircleOutlined className={styles.notifyIcon} />
    } else if (notificationType === NotificationType.info) {
      return <InfoCircleOutlined className={styles.notifyIcon} />
    } else if (notificationType === NotificationType.warning) {
      return <ExclamationCircleOutlined className={styles.notifyIcon} />
    }
  }

  if (notificationType === NotificationType.connect) {
    message.open({
      type: 'success',
      content: <Reconnect message="" delay={delay} />,
      className: styles.notifyReconnect,
      duration: delay,
    })
  } else {
    notify = message.open({
      type: notificationType,
      content: (
        <div className={styles.notificationContent}>
          <span className={styles.notifyText}>{text}</span>
          <CloseOutlined className={styles.closeIcon} onClick={onClose} />
        </div>
      ),
      icon: notifyIcon(),
      className: styles.notifyStyles,
      duration: delay,
    })
  }
}

export default Notification
