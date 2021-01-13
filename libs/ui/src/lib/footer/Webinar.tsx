import React, { FC } from 'react'
import styles from './Footer.module.less'
import { Button } from '@pabau/ui'
import { PlayCircleOutlined } from '@ant-design/icons'

export const Webinar: FC = () => {
  return (
    <div className={styles.webinarBannerEnd}>
      <div>
        <div className={styles.footerHeading}>
          <h1>Recommended Webinar</h1>
        </div>
        <div className={styles.webinarBox} style={{ marginTop: '12px' }}>
          <div className={styles.webinarBanner}> </div>
          <div className={styles.webinarText}>
            <p>Stock Management</p>
            <h6>
              Alexander Turner <br /> Getting Started
            </h6>
            <h5>Tuesday, 15 10:00 AM</h5>
            <h4> 18:28 elapsed </h4>
            <div className={styles.joinBtnTopSpace}>
              <Button className={styles.joinBtn} icon={<PlayCircleOutlined />}>
                Join class
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Webinar
