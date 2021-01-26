/* eslint-disable */
import React from 'react'

import { Button } from '../button/button'
import styles from './NotificationBanner.module.less'
import { Row, Col } from 'antd'
import iconClose from '../../assets/images/icon_close.svg'
export interface NotificationBannerProps {
  title?: string
  desc?: string
  imgPath?: string
}

export function NotificationBanner(props: NotificationBannerProps) {
  const { title = 'nil' } = props
  const { desc = 'nil' } = props
  const { imgPath = 'nil' } = props
  return (
    <div className={styles.notificationBody}>
      <Row className={styles.rowPosition}>
        <Col md={16} sm={12}>
          <p className={styles.title1}>{title}</p>
          <p className={styles.title2}>{desc}</p>
          <Button
            className={styles.btnPayment}
            // onClick={() => {}}
            size="middle"
            type="link"
          >
            Enable Payments
          </Button>
        </Col>
        <img className={styles.iconClose} src={iconClose} alt="" />
        <img className={styles.backgroundImg} src={imgPath} alt="" />
      </Row>
    </div>
  )
}

// const NotificationBanner: React.FunctionComponent<NotificationBannerProps> = (props) => (

// )

export default NotificationBanner
