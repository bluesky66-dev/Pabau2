import React, { PropsWithChildren } from 'react'
import { EmailSMSPreviewProps, ClassRescheduledProps } from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'
import { Button } from '../button/button'

export function RequestFeedBack({
  message,
}: PropsWithChildren<
  ClassRescheduledProps & EmailSMSPreviewProps
>): JSX.Element {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.titleRow}>
        <Col>
          <span className={styles.message}>
            We&apos;d love to hear about your experience in the survey below.
            Your feedback helps us create a better experience for you and for
            all of our customers.
          </span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.bookAppointment}>
        <Button className={styles.bookButton}>Tell us how it went</Button>
      </Row>
      <Row gutter={[0, 4]} className={styles.textBox}>
        <Col>
          <p className={styles.text}>Thank you for your support!</p>
          <p className={styles.text}>Your friends at The Clinic</p>
        </Col>
      </Row>
    </>
  )
}

export default RequestFeedBack
