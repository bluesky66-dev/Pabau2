import React, { PropsWithChildren } from 'react'
import {
  EmailSMSPreviewProps,
  ConnectRegistrationProps,
} from './EmailSMSPreview'
import { Col, Row } from 'antd'
import styles from './EmailSMSPreview.module.less'

export function ConnectRegistration({
  message,
  connectURL,
  username,
  password,
  text,
  footerIconGroup,
}: PropsWithChildren<
  ConnectRegistrationProps & EmailSMSPreviewProps
>): JSX.Element {
  return (
    <>
      <Row gutter={[0, 4]} className={styles.break}>
        <Col>
          <span className={styles.message}>{message}</span>
        </Col>
      </Row>
      <span className={styles.contactInfo}>{connectURL}</span>
      <Row className={styles.loginCredentials}>
        <Col>
          <div>
            <span className={styles.message}>
              Here are your login credentials:
            </span>
          </div>
          <div className={styles.loginDetail}>
            <span className={styles.loginData}>Username:&nbsp;{username}</span>
            <span className={styles.loginData}>Password:&nbsp;{password}</span>
          </div>
        </Col>
      </Row>
      {footerIconGroup && (
        <Row gutter={[0, 4]} className={styles.textBox}>
          <span
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: text || '' }}
          ></span>
        </Row>
      )}
    </>
  )
}

export default ConnectRegistration
