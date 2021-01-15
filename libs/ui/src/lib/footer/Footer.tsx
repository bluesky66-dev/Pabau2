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
        <Col md={16} sm={12}>
          <div className={styles.footerHeading}>
            <h1>Related guides</h1>
          </div>
          <Guides />
        </Col>
        <Col md={8} sm={12}>
          <Webinar />
        </Col>
      </Row>
    </div>
  )
}

export default Footer
