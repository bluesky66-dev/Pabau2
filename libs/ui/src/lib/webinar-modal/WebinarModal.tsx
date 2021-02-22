import React, { FC } from 'react'
import { Modal } from 'antd'
import { Button } from '@pabau/ui'

import styles from './WebinarModal.module.less'

export interface WebinarModalProps {
  visible?: boolean
  title?: string
  name?: string
  time?: string
  timeLeft?: string
  description?: string
  backgroundImage?: string
  buttonType?: string
  onCancel?: () => void
  onSubmit?: () => void
}

export const WebinarModal: FC<WebinarModalProps> = ({
  visible,
  title,
  name,
  time,
  timeLeft,
  description,
  backgroundImage,
  buttonType,
  onCancel,
  onSubmit,
}) => {
  return (
    <Modal
      visible={visible}
      footer={null}
      centered={true}
      className={styles.webinarModal}
      onCancel={() => onCancel?.()}
    >
      <div className={styles.webinarTopWrapper}>
        <div className={styles.webinarImg}>
          <img src={backgroundImage} alt={backgroundImage} />
        </div>
        <div className={styles.webinarHeader}>
          <h2>{title}</h2>
          <p className={styles.name}>{name}</p>
          <p className={styles.start}>Getting Started</p>
          <p className={styles.name}>{time}</p>
          <h4> {timeLeft} elapsed </h4>
        </div>
      </div>
      <div className={styles.desc}>{description}</div>
      <Button className={styles.btnRegister} onClick={() => onSubmit?.()}>
        {buttonType === 'join' ? 'Join' : 'Register'}
      </Button>
    </Modal>
  )
}

export default WebinarModal
