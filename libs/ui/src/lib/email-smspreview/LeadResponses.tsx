import React, { FC } from 'react'
import { EmailSMSPreviewProps, LeadResponsesProps } from './EmailSmsPreview'
import { Col, Row } from 'antd'
import styles from './EmailSmsPreview.module.less'

export const LeadResponses: FC<LeadResponsesProps & EmailSMSPreviewProps> = ({
  message,
  description,
  messageLine,
  text,
  isFooterText,
  companyPhone,
  companyEmail,
}) => {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      {description && (
        <Row gutter={[0, 4]} className={styles.break}>
          <Col>
            <span className={styles.message}>{description}</span>
          </Col>
        </Row>
      )}
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>{messageLine || 'We look forward to chatting soon!'}</Col>
      </Row>
      {!isFooterText && (
        <Row gutter={[0, 4]} className={styles.textBox}>
          <Col>
            <span
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: text || '' }}
            ></span>
          </Col>
        </Row>
      )}
      {companyPhone && (
        <Row gutter={[0, 4]} className={styles.bookAppointment}>
          <Col>
            <span className={styles.contactInfo}>{companyPhone}</span>
          </Col>
        </Row>
      )}
      {companyEmail && (
        <Row gutter={[0, 4]} className={styles.bookAppointment}>
          <Col>
            <span className={styles.contactInfo}>{companyEmail}</span>
          </Col>
        </Row>
      )}
    </>
  )
}

export default LeadResponses
