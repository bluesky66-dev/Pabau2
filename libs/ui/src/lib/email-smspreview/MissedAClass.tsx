import React, { PropsWithChildren } from 'react'
import { EmailSMSPreviewProps, MissedAClassProps } from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'
import { Button } from '../button/button'

export function MissedAClass({
  message,
  contactNumber,
  footerContact,
}: PropsWithChildren<MissedAClassProps & EmailSMSPreviewProps>): JSX.Element {
  return (
    <>
      <Row className={styles.messageContent}>
        <Col>
          <span className={styles.line}>{message}</span>
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
        <Row className={styles.centerRow}>
          <Col>
            <span className={styles.message}>
              Click here to get your appointment online
            </span>
          </Col>
        </Row>
      )}
      <Row gutter={[0, 4]} className={styles.bookAppointment}>
        <Button className={styles.bookButton}>Book now</Button>
      </Row>
      {!footerContact && (
        <Row gutter={[0, 4]} className={styles.textBox}>
          <Col>
            <Col>
              <p className={styles.text}>
                Looking forward to hearing from you soon,
              </p>
              <p className={styles.text}>Your friends at The Clinic</p>
            </Col>
          </Col>
        </Row>
      )}
    </>
  )
}

export default MissedAClass
