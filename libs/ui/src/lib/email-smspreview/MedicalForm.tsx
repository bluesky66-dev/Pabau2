import React, { FC } from 'react'
import { EmailSMSPreviewProps, MedicalFormProps } from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'

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
