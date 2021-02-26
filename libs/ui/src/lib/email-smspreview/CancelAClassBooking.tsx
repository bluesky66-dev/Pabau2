import React, { FC } from 'react'
import {
  EmailSMSPreviewProps,
  CancelAClassBookingProps,
} from './EmailSmsPreview'
import { Col, Row } from 'antd'
import styles from './EmailSmsPreview.module.less'
import { Button } from '../button/Button'

export const CancelAClassBooking: FC<
  CancelAClassBookingProps & EmailSMSPreviewProps
> = ({
  dateTime,
  consultancyName,
  consultationDetail,
  message,
  address,
  text,
  buttonColor,
}) => {
  return (
    <>
      <Row className={styles.cancelTag}>
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
          <Button
            size="middle"
            className={styles.btnRebook}
            backgroundColor={buttonColor}
          >
            Rebook
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default CancelAClassBooking
