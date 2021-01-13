import React, { FC } from 'react'
import { Row, Col } from 'antd'
import styles from './Footer.module.less'
import Guides from './Guides'
import Webinar from './Webinar'

export const Footer: FC = () => {
  return (
    <div className={styles.footerBanner}>
      <div className={styles.footerBorder}></div>
      <Row>
        <Col flex={1}>
          <Guides />
        </Col>
        <Col flex={2}>
          <Webinar />
        </Col>
      </Row>
    </div>
  )
}

export default Footer
