import React, { PropsWithChildren } from 'react'
import { ReferralProps, CancelAClassBookingProps } from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'
import { Button } from '../button/button'

export function Referral({
  message,
  footerText,
}: PropsWithChildren<CancelAClassBookingProps & ReferralProps>): JSX.Element {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>
            As a loyal client, we would like to offer you [REWARD] OFF for your
            next visit. Please find your voucher code below.
          </span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.bookAppointment}>
        <Button className={styles.bookButton}>Voucher Code</Button>
      </Row>
      <Row gutter={[0, 4]} className={styles.textBox}>
        <Col>
          <span
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: footerText || '' }}
          ></span>
        </Col>
      </Row>
    </>
  )
}

export default Referral
