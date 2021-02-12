import React, { PropsWithChildren } from 'react'
import { InvoicesProps, CancelAClassBookingProps } from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'

export function Invoices({
  message,
  footerText,
}: PropsWithChildren<CancelAClassBookingProps & InvoicesProps>): JSX.Element {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          Please find attached a detailed copy of your invoice to this email.
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.textBox}>
        <Col>
          <span
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: footerText || '' }}
          ></span>
        </Col>
      </Row>
    </>
  )
}

export default Invoices
