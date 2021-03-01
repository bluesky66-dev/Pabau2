import React, { FC } from 'react'
import { InvoicesProps, EmailSMSPreviewProps } from './EmailSmsPreview'
import { Col, Row } from 'antd'
import { Button } from '@pabau/ui'
import styles from './EmailSmsPreview.module.less'

export const Invoices: FC<EmailSMSPreviewProps & InvoicesProps> = ({
  message,
  footerText,
  message1,
  showInvoiceButton = false,
  buttonColor,
}) => {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          {message1 ||
            'Please find attached a detailed copy of your invoice to this email.'}
        </Col>
      </Row>
      {showInvoiceButton && (
        <Row gutter={[0, 4]} className={styles.invoiceButton}>
          <Col>
            <Button
              backgroundColor={buttonColor || 'blue'}
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
