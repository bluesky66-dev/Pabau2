import React, { FC } from 'react'
import { EmailSMSPreviewProps, ClassRescheduledProps } from './EmailSmsPreview'
import { Col, Row } from 'antd'
import styles from './EmailSmsPreview.module.less'

export const ClassRescheduled: FC<
  ClassRescheduledProps & EmailSMSPreviewProps
> = ({ message }) => {
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
          <p>Kind regards,</p>
          <p>Your friends at The Clinic</p>
        </Col>
      </Row>
    </>
  )
}

export default ClassRescheduled
