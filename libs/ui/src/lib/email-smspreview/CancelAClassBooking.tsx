import React, { FC } from 'react'
import {
  EmailSMSPreviewProps,
  CancelAClassBookingProps,
} from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'
import { Button } from '../button/button'

export const CancelAClassBooking: FC<
  CancelAClassBookingProps & EmailSMSPreviewProps
> = ({
  dateTime,
  consultancyName,
  consultationDetail,
  message,
  address,
  text,
}) => {
  return (
    <>
      <Row className={`${styles.cancelTag} ${styles.top}`}>
        <Col>
          <span>{text}</span>
        </Col>
      </Row>
      <Row className={styles.calenderDateTime}>
        <Col>
          <p>{dateTime}</p>
          <p>{consultationDetail}</p>
        </Col>
      </Row>
      <Row className={styles.cancelBtn}>
        <Col>
          <Button size="small" danger className={styles.btnCancel}>
            Cancelled
          </Button>
        </Col>
      </Row>
      {address !== '' && (
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
