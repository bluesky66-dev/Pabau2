import React, { PropsWithChildren } from 'react'
import {
  EmailSMSPreviewProps,
  CancelAClassBookingProps,
} from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'
import { Button } from '../button/button'

export function CancelAClassBooking({
  dateTime,
  consultancyName,
  consultationDetail,
  message,
  address,
  footer,
  text,
}: PropsWithChildren<
  CancelAClassBookingProps & EmailSMSPreviewProps
>): JSX.Element {
  return (
    <>
      <Row className={styles.cancelTag}>
        <Col>
          <span>{text}</span>
        </Col>
      </Row>
      <Row className={styles.calenderDateTime}>
        <Col>
          <p className={styles.calenderDate}>{dateTime}</p>
          <p className={styles.calenderDate}>{consultationDetail}</p>
        </Col>
      </Row>
      <Row className={styles.cancelBtn}>
        <Col>
          <Button size="small" danger className={styles.btnCancel}>
            Cancelled
          </Button>
        </Col>
      </Row>
      {footer && (
        <Row className={styles.consultancyNameAddr}>
          <Col>
            <span className={styles.consultancyName}>{consultancyName}</span>
            <p className={styles.address}>{address}</p>
          </Col>
        </Row>
      )}
      <Row className={styles.messageContent}>
        <Col>
          <span className={styles.line}>{message}</span>
        </Col>
      </Row>
      <Row className={styles.rebookBtn}>
        <Col>
          <Button size="middle" className={styles.btnRebook}>
            Rebook
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default CancelAClassBooking
