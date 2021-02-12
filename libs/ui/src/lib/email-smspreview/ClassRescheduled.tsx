import React, { PropsWithChildren } from 'react'
import { EmailSMSPreviewProps, ClassRescheduledProps } from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'

export function ClassRescheduled({
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
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>We look forward to seeing you then!</Col>
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

export default ClassRescheduled
