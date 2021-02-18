import React, { PropsWithChildren } from 'react'
import { EmailSMSPreviewProps, LeadResponsesProps } from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'

export function LeadResponses({
  message,
  text,
  isFooterText,
}: PropsWithChildren<LeadResponsesProps & EmailSMSPreviewProps>): JSX.Element {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>We look forward to chatting soon!</Col>
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
    </>
  )
}

export default LeadResponses
