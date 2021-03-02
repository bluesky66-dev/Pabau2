import React, { FC } from 'react'
import { EmailSMSPreviewProps, RequestFeedbackProps } from './EmailSmsPreview'
import { Col, Row } from 'antd'
import styles from './EmailSmsPreview.module.less'
import { Button } from '../button/Button'

export const RequestFeedBack: FC<
  RequestFeedbackProps & EmailSMSPreviewProps
> = ({ message, message1, buttonColor, closingText, signatureBlock }) => {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.titleRow}>
        <Col>
          <span className={styles.message}>{message1}</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.bookAppointment}>
        <Button backgroundColor={buttonColor} className={styles.bookButton}>
          Tell us how it went
        </Button>
      </Row>
      <Row gutter={[0, 4]} className={styles.textBox}>
        <Col>
          <p>{closingText}</p>
          <p>{signatureBlock}</p>
        </Col>
      </Row>
    </>
  )
}

export default RequestFeedBack
