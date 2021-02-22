import React, { FC } from 'react'
import { EmailSMSPreviewProps, GiftVoucherProps } from './EmailSMSPreview'
import { Col, Divider, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'
import {
  FacebookOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from '@ant-design/icons'

export const GiftVoucher: FC<GiftVoucherProps & EmailSMSPreviewProps> = ({
  value,
  voucherCode,
  expiry,
  consultancyName,
}) => {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.contactInfo}>Value:&nbsp;{value}</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.contactInfo}>
            Voucher Code:&nbsp;{voucherCode}
          </span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.contactInfo}>Expiry :&nbsp;{expiry}</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          This Voucher can be redeemed against any services at&nbsp;
          {consultancyName}
        </Col>
      </Row>
      <Divider />
      <Row gutter={[0, 4]} className={styles.bookAppointment}>
        <Col>
          <span className={styles.contactInfo}>+44 000 987 507</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.bookAppointment}>
        <Col>
          <span className={styles.contactInfo}>info@theclinic.com</span>
        </Col>
      </Row>
      <Row className={`${styles.footerIcon} ${styles.icon}`}>
        <Col>
          <div className={styles.iconGroup}>
            <FacebookOutlined className={styles.color} />
            <WhatsAppOutlined className={styles.color} />
            <InstagramOutlined className={styles.color} />
            <TwitterOutlined className={styles.color} />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default GiftVoucher
