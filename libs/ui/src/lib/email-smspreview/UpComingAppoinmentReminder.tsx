import React, { PropsWithChildren } from 'react'
import { EmailSMSPreviewProps, ReminderForClassProps } from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'

export function UpComingAppointmentReminder({
  message,
  contactNumber,
}: PropsWithChildren<
  ReminderForClassProps & EmailSMSPreviewProps
>): JSX.Element {
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
            {' '}
            We truly care about your well-being, so if you have any questions or
            needs in advance of your appointment, you are welcome to call us
            anytime at{' '}
            <span className={styles.contactInfo}>{contactNumber}</span>
          </span>
        </Col>
      </Row>
      <Row gutter={[0, 16]}>
        <Col>
          <span className={styles.line}>
            We look forward to seeing you then!
          </span>
        </Col>
      </Row>
      <Row className={styles.textBox}>
        <Col>
          <p className={styles.text}>Kind regards,</p>
          <p className={styles.text}>Your friends at The Clinic</p>
        </Col>
      </Row>
    </>
  )
}

export default UpComingAppointmentReminder
