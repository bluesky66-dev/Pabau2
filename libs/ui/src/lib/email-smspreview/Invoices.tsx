import React, { FC } from 'react'
import { InvoicesProps, EmailSMSPreviewProps } from './EmailSmsPreview'
import { Col, Row } from 'antd'
import { Button } from '@pabau/ui'
import styles from './EmailSmsPreview.module.less'

export const Invoices: FC<EmailSMSPreviewProps & InvoicesProps> = ({
  message,
  footerText,
  message1 = 'Please find attached a detailed copy of your invoice to this email.',
  message2,
  bestRegards,
  senderFirstName,
  showInvoiceButton = false,
  buttonColor,
  showEnablePay = false,
}) => {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      {message1 && (
        <Row gutter={[0, 4]} className={styles.break}>
          <Col>{message1}</Col>
        </Row>
      )}
      {message2 && (
        <Row gutter={[0, 4]} className={styles.break}>
          <Col>{message2}</Col>
        </Row>
      )}
      {showEnablePay && (
        <Row gutter={[0, 4]} className={styles.invoiceButton}>
          <Col>
            <Button
              type="primary"
              backgroundColor={buttonColor}
              className={styles.bookButton}
            >
              Enable Pay
            </Button>
          </Col>
        </Row>
      )}
      {bestRegards && (
        <Row gutter={[0, 4]} className={styles.bestRegards}>
          <Col>{bestRegards}</Col>
        </Row>
      )}
      {senderFirstName && (
        <Row gutter={[0, 4]} className={styles.senderFirstName}>
          <Col>{senderFirstName}</Col>
        </Row>
      )}
      {showInvoiceButton && (
        <Row gutter={[0, 4]} className={styles.invoiceButton}>
          <Col>
            <Button
              type="primary"
              backgroundColor={buttonColor}
              className={styles.bookButton}
            >
              View Invoice
            </Button>
          </Col>
        </Row>
      )}
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
