import React, { PropsWithChildren } from 'react'
import { EmailSMSPreviewProps, MedicalFormProps } from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'

export function MedicalForm({
  message,
  contactNumber,
}: PropsWithChildren<MedicalFormProps & EmailSMSPreviewProps>): JSX.Element {
  return (
    <Row className={styles.messageContent}>
      <Col>
        <span className={styles.line}>
          {message}&nbsp;
          <span className={styles.contactInfo}>{contactNumber}</span>
        </span>
      </Col>
    </Row>
  )
}

export default MedicalForm
