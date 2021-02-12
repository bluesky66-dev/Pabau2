import React, { PropsWithChildren } from 'react'
import { BookedOntoClassProps, EmailSMSPreviewProps } from './EmailSMSPreview'
import { Col, Divider, Row } from 'antd'
import { ReactComponent as Calendar } from '../../assets/images/calendar.svg'
import styles from './EmailSMSPreview.module.less'

export function BookedOntoClass({
  dateTime,
  consultancyName,
  consultationDetail,
  message,
  address,
}: PropsWithChildren<
  BookedOntoClassProps & EmailSMSPreviewProps
>): JSX.Element {
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
          <p className={styles.calenderDate}>{dateTime}</p>
          <p className={styles.calenderDate}>{consultationDetail}</p>
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
          <p className={styles.text}>Kind regards,</p>
          <p className={styles.text}>Your friends at The Clinic</p>
        </Col>
      </Row>
    </>
  )
}

export default BookedOntoClass
