import React from 'react'
import styles from './lead-setting.module.less'
// import classNames from 'classnames'
import {
  // ApiOutlined,
  ArrowRightOutlined,
  // CheckCircleOutlined,
  // ProfileOutlined,
} from '@ant-design/icons'
import { Input, Button } from '@pabau/ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
// import { Progress, Image } from 'antd'
// import ErrorImage from '../../../assets/images/error.png'
import PabauLogo from '../../../assets/images/logo.svg'
import { Image } from 'antd'

export function LeadTesting() {
  return (
    <>
      <div className={styles.leadSettingContent}>
        <div className={styles.headingStyle}>
          <h1>Test your trigger</h1>
          <p>Send a request to this webhook URL:</p>
          <div className={styles.testingApiLink}>
            <Input
              type="name"
              disabled
              text="https://crm.pabau.com/OAuth2/kkjiidjskdsk/lead-api"
              className={styles.inputDisabledStyle}
            />
          </div>
          <div className={styles.triggerBoxAlign}>
            <div className={styles.triggerBox}>
              <FontAwesomeIcon
                icon={Icons.faGlobe}
                style={{ fontSize: '28px', color: '#3D3D46;' }}
              />
            </div>
            <div className={styles.triggerRightIcon}>
              <ArrowRightOutlined className={styles.triggerRightIconStyle} />
            </div>
            <div className={styles.triggerBox}>
              <Image src={PabauLogo} className={styles.logoStyle} />
              {/* <PabauLogo  /> */}
            </div>
          </div>
          <div className={styles.testTriggerButton}>
            <Button type="primary">Test trigger</Button>
          </div>
        </div>
      </div>
      {/* <div className={styles.awaitingRequest}>
          <div>
            <div className={styles.iconCenter}>
              <Progress
                type="circle"
                percent={75}
                showInfo={false}
                width={72}
              />
            </div>
            <div className={styles.awaitingHeadingStyle}>
              <h1>Awaiting Request</h1>
              <p>
                Please submit your request to Pabau. Your lead will appear{' '}
                <br />
                here once we have received.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.allContentCenter}>
          <div>
            <div className={styles.imageCenter}>
              <Image src={ErrorImage} />
            </div>
            <div className={styles.awaitingHeadingStyle}>
              <h1>No request found</h1>
              <p>There were no requests found.</p>
            </div>
            <div className={styles.tryAgainButton}>
            <Button className={styles.tryAgainBtn}>Test trigger</Button>
            </div>
          </div>
        </div> */}
    </>
  )
}

export default LeadTesting
