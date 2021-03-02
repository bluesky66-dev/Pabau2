import React, { FC } from 'react'
import { BookedOntoClassProps, EmailSMSPreviewProps } from './EmailSmsPreview'
import { Col, Divider, Row } from 'antd'
import { ReactComponent as Calendar } from '../../assets/images/calendar.svg'
import styles from './EmailSmsPreview.module.less'

export const BookedOntoClass: FC<
  BookedOntoClassProps & EmailSMSPreviewProps
> = ({ dateTime, consultancyName, consultationDetail, message, address }) => {
  return (
    <>
      <Divider className={styles.dividerHr} />
      <Row justify="start" align="middle" className={styles.calenderAppointRow}>
        <Col>
          <Calendar />
          <span className={styles.calenderAppoint}>
            Your class appointment details:
          </span>
        </Col>
      </Row>
      <Row className={styles.calenderDateTime}>
        <Col>
          <p>{dateTime}</p>
          <p>{consultationDetail}</p>
        </Col>
      </Row>
      <Row className={styles.consultancyNameAddr}>
        <Col>
          <span className={styles.consultancyName}>{consultancyName}</span>
          <p className={styles.address}>{address}</p>
        </Col>
      </Row>
      <Row className={styles.messageContent}>
        <Col>
          <span className={styles.line}>{message}</span>
        </Col>
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

export default BookedOntoClass
