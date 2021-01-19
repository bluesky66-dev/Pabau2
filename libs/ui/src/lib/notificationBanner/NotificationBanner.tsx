import React from 'react'

import { Button } from '../button/button' 
import styles from './NotificationBanner.module.less'
import { Row, Col } from 'antd'

import icon from '../../assets/images/bkg_notification_banner.svg'
import { relative } from 'path'

/* eslint-disable-next-line */
export interface NotificationBannerProps {}

export function NotificationBanner(props: NotificationBannerProps) {
  return (
    <div className={styles.notificationBody}>
      <Row style={styles.rowPosition}>
        <Col md={16} sm={12}>
          <p className={styles.title1}>Enable online payment</p>
          <p className={styles.title2}>
            Activate payments with Fresha to benefit from tip collection during and after sale and get access to no show protection, payment terminals, safe online payments and many more.
          </p>
          <Button className={styles.btnPayment}
            // onClick={() => {}}
            size="middle"
            type="link"
          >
            Enable Payments
          </Button>
        </Col>
        <img className={styles.backgroundImg} src={icon} alt=""/>
      </Row>
      
      
    </div>
  )
}

export default NotificationBanner
