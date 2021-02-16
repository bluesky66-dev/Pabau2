import React from 'react'
import styles from './lead-setting.module.less'
import classNames from 'classnames'
import { CheckCircleFilled, FilePdfOutlined } from '@ant-design/icons'
import { Input } from '@pabau/ui'
import confetti from 'canvas-confetti'

export const LeadResult: React.FC = () => {
  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min
  }

  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 },
  })

  return (
    <div className={styles.successAllContentCenter}>
      <div className={styles.textAllCenter}>
        <CheckCircleFilled className={styles.checkIconStyle} />
        <div className={styles.successTextStyle}>
          <h1>Success. We found a request</h1>
          <p>This request was sent to: </p>
        </div>
        <div className={styles.successInput}>
          <Input
            type="name"
            disabled
            text="https://crm.pabau.com/OAuth2/kkjiidjskdsk/lead-api"
            className={styles.inputDisabledStyle}
          />
        </div>
        <div className={styles.requestBox}>
          <div className={styles.wFull}>
            <div className={styles.fileUpload}>
              <FilePdfOutlined className={styles.pdfIconStyle} />
              <span> Request A (21/12/2020 @ 19:00pm)</span>
            </div>
            <div className={styles.firstNameTopSpace}>
              <h1> First name: </h1>
              <p>James</p>
            </div>
            <div
              className={classNames(
                styles.firstNameTopSpace,
                styles.spaceRemove
              )}
            >
              <h1> Last name: </h1>
              <p>Bond</p>
            </div>
            <div
              className={classNames(
                styles.firstNameTopSpace,
                styles.spaceRemove
              )}
            >
              <h1> Email: </h1>
              <p>james@007.com</p>
            </div>
            <div
              className={classNames(
                styles.firstNameTopSpace,
                styles.spaceRemove
              )}
            >
              <h1> Phone: </h1>
              <p>078282922929</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadResult
