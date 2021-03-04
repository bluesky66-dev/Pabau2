import React, { FC } from 'react'
import { InvoicesProps, EmailSMSPreviewProps } from './EmailSmsPreview'
import { Col, Row } from 'antd'
import { Button } from '@pabau/ui'
import styles from './EmailSmsPreview.module.less'

export const Invoices: FC<EmailSMSPreviewProps & InvoicesProps> = ({
  message,
  footerText,
  bestRegards,
  senderFirstName,
  showInvoiceButton = false,
  buttonColor,
  showEnablePay = false,
}) => {
  return (
    <>
      {message?.map((msg, key) => {
        return (
          <Row gutter={[0, 4]} className={styles.break} key={key}>
            <Col>
              <span className={styles.message}>{msg}</span>
            </Col>
          </Row>
        )
      })}
      {showEnablePay && (
        <Row gutter={[0, 4]} className={styles.invoiceButton}>
          <Col>
            <Button
              type="primary"
              backgroundColor={buttonColor}
              className={styles.bookButton}
            >
              Pay Invoice
            </Button>
          </Col>
        </Row>
      )}
      {(bestRegards || senderFirstName) && (
        <Row gutter={[0, 4]} className={styles.textBox}>
          <Col>
            <p className={styles.text}>{bestRegards}</p>
            <p className={styles.text}>{senderFirstName}</p>
          </Col>
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
