import React, { useState } from 'react'
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
import { Image } from 'antd'
import PabauLogo from '../../../assets/images/logo.svg'
import LeadTestWaiting from './waiting-request'

interface LeadTestingInterface {
  onAPIFlowComplete: () => void
}
export const LeadTesting: React.FC<LeadTestingInterface> = ({
  onAPIFlowComplete,
}) => {
  const [testTrigger, setTestTrigger] = useState(false)

  return (
    <>
      {!testTrigger && (
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
                  style={{ fontSize: '28px', color: '#3D3D46' }}
                />
              </div>
              <div className={styles.triggerRightIcon}>
                <ArrowRightOutlined className={styles.triggerRightIconStyle} />
              </div>
              <div className={styles.triggerBox}>
                <Image src={PabauLogo} className={styles.logoStyle} />
              </div>
            </div>
            <div className={styles.testTriggerButton}>
              <Button
                type="primary"
                onClick={() => {
                  setTestTrigger((e) => !e)
                  setTimeout(() => {
                    setTestTrigger((e) => !e)
                    onAPIFlowComplete()
                  }, 3000)
                }}
              >
                Test trigger
              </Button>
            </div>
          </div>
        </div>
      )}
      <LeadTestWaiting triggerRequest={testTrigger} triggerError={false} />
    </>
  )
}

export default LeadTesting
