import React, { FC } from 'react'
import styles from './SetupChip.module.less'
import { Button } from '@pabau/ui'
import { PlayCircleOutlined, PlusOutlined } from '@ant-design/icons'

interface WebinarProps {
  title?: string
  name?: string
  time?: string
  timeLeft?: string
  backgroundImage?: string
  isJoin?: boolean
}

export const Webinar: FC<WebinarProps> = ({
  title,
  name,
  time,
  timeLeft,
  backgroundImage,
  isJoin,
}) => {
  return (
    <div className={styles.webinarBannerEnd}>
      <div className={styles.webinarBox} style={{ marginTop: '12px' }}>
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className={styles.webinarBanner}
        >
          {' '}
        </div>
        <div className={styles.webinarText}>
          <p>{title}</p>
          <h6>
            {name} <br /> <span>Getting Started</span>
          </h6>
          <h5>{time}</h5>
          {isJoin ? (
            <div>
              <h4 className={styles.time}> {timeLeft} elapsed </h4>
              <div className={styles.joinBtnTopSpace}>
                <Button
                  className={styles.joinBtn}
                  icon={<PlayCircleOutlined />}
                >
                  Join class
                </Button>
              </div>
            </div>
          ) : (
            <div className={styles.countMe}>
              <h4 className={styles.countTime}> {timeLeft} start </h4>
              <div className={styles.joinBtnTopSpace}>
                <Button className={styles.countBtn} icon={<PlusOutlined />}>
                  Count me in
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Webinar
