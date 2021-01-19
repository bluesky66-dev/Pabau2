import React, { FC, useEffect, useState } from 'react'
import { message, Button } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import styles from './Notification.module.less'

export enum NotificationType {
  connect = 'connect',
  success = 'success',
  edit = 'edit',
  delete = 'delete',
}

interface Props {
  message: string
  delay: number
}

export const Reconnect: FC<Props> = ({ message, delay }) => {
  const [text, setText] = useState('Connection lost. Reconnecting in ' + delay + ' seconds...')
  const [secondCount, setSecondCount] = useState(delay)

  const decrement = () => {
    const second = secondCount - 1
    setSecondCount(second)
    setText('Connection lost. Reconnecting in ' + second + ' seconds...')
  }

  useEffect(() => {
    const interval = setInterval(decrement, 1000)
    return () => clearInterval(interval)
  }, [secondCount])

  return (
    <div className={styles.reconnectContainer}>
      <div>
        <p className={styles.notificationText}>{text}</p>
      </div>
      <Button className={styles.button} type="primary">
        <span className={styles.buttonLabel}>Reconnect </span>
        <LoadingOutlined className={styles.spin} />
      </Button>
    </div>
  )
}

export default Reconnect
