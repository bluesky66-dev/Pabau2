import React, { FC } from 'react'
import { EmailSMSPreviewProps, NoShowAppointmentProps } from './EmailSmsPreview'
import { Col, Row } from 'antd'
import styles from './EmailSmsPreview.module.less'
import { Button } from '../button/Button'

export const NoShowAppointment: FC<
  NoShowAppointmentProps & EmailSMSPreviewProps
> = ({
  message,
  contactNumber,
  footerContact,
  buttonColor,
  closingText,
  signatureBlock,
}) => {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      {!footerContact ? (
        <Row gutter={[0, 4]} className={styles.titleRow}>
          <Col>
            <span className={styles.message}>
              Please get back in touch on{' '}
              <span className={styles.contactInfo}>{contactNumber}</span> to
              reschedule or you can book your next appointment below
            </span>
          </Col>
        </Row>
      ) : (
        <Row gutter={[0, 4]} className={styles.titleRow}>
          <Col>
            <span className={styles.message}>
              Click here to get your appointment online
            </span>
          </Col>
        </Row>
      )}
      <Row gutter={[0, 4]} className={styles.bookAppointment}>
        <Button backgroundColor={buttonColor} className={styles.bookButton}>
          Book now
        </Button>
      </Row>
      {!footerContact && (
        <Row gutter={[0, 4]} className={styles.textBox}>
          <Col>
            <p className={styles.text}>{closingText}</p>
            <p className={styles.text}>{signatureBlock}</p>
          </Col>
        </Row>
      )}
    </>
  )
}

export default NoShowAppointment
