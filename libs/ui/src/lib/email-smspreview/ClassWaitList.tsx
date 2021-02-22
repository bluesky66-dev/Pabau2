import React, { FC } from 'react'
import { EmailSMSPreviewProps, ClassRescheduledProps } from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'
import { Button } from '../button/button'

export const ClassWaitList: FC<
  ClassRescheduledProps & EmailSMSPreviewProps
> = ({ message }) => {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      <Row className={styles.centerRow}>
        <Col>
          <span className={styles.message}>
            Click here to book your appointment online:
          </span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.bookAppointment}>
        <Button className={styles.bookButton}>Book now</Button>
      </Row>
    </>
  )
}

export default ClassWaitList
