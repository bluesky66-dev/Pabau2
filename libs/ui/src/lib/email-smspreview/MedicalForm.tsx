import React, { FC } from 'react'
import { EmailSMSPreviewProps, MedicalFormProps } from './EmailSmsPreview'
import { Col, Row } from 'antd'
import styles from './EmailSmsPreview.module.less'

export const MedicalForm: FC<MedicalFormProps & EmailSMSPreviewProps> = ({
  message,
  contactNumber,
}) => {
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
