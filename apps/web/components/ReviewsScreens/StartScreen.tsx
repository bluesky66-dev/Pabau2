import React, { FC, useEffect, useState } from 'react'
import { Avatar as UserAvatar, Button } from '@pabau/ui'
import styles from '../index.module.less'

interface User {
  userImagePath?: string
  userName: string
}

/* eslint-disable-next-line */
export interface P {
  reviewTitle: string
  reviewSubTitle: string
  user: User
  onStart: () => void
}

export const StartScreen: FC<P> = ({
  reviewTitle,
  reviewSubTitle,
  user,
  onStart,
}) => {
  const [imgLoading, setImgLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setImgLoading(false)
    }, 1000)
  }, [])

  return (
    <div className={styles.section}>
      <div className={styles.title}>{reviewTitle}</div>
      <div className={styles.subTitle}>{reviewSubTitle}</div>
      <div className={styles.avatar}>
        <UserAvatar
          isLoading={imgLoading}
          name={user?.userName}
          shape="circle"
          size="large"
          src={user?.userImagePath}
        />
      </div>
      <div className={styles.label}>Review about</div>
      <div className={styles.userName}>{user?.userName}</div>
      <div className={styles.btn}>
        <Button type="primary" size="large" onClick={onStart}>
          Start
        </Button>
      </div>
    </div>
  )
}

export default StartScreen
