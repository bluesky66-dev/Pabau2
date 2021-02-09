import React, { useState } from 'react'
import styles from './lead-setting.module.less'
import classNames from 'classnames'
import {
  ApiOutlined,
  CheckCircleOutlined,
  ProfileOutlined,
} from '@ant-design/icons'
import { Radio } from 'antd'

export function LeadIntegration() {
  const [captureLeadIntegrationStep, setCaptureLeadIntegrationStep] = useState(
    'Documentation'
  )

  const [typeOfIntegration, setTypeOfIntegration] = useState('Developer')

  return (
    <>
      <div className={styles.tabCenter}>
        <Radio.Group
          className={styles.tabDesign}
          value={typeOfIntegration}
          onChange={(e) => setTypeOfIntegration(e.target.value)}
        >
          <Radio.Button value="Developer">I’m a developer</Radio.Button>
          <Radio.Button value="User">I’m a user</Radio.Button>
        </Radio.Group>
      </div>
      <div className={styles.leadSettingContent}>
        <div className={styles.headingStyle}>
          <h1 className={styles.integrateTopSpace}>Integration</h1>
          <p>First choose which how you would like to integrate the API:</p>

          <div
            className={classNames(
              styles.leadFlex,
              styles.intergrationGridTopSpace
            )}
          >
            <div
              className={classNames(
                styles.leadBasisForm,
                captureLeadIntegrationStep === 'Code' &&
                  styles.leadCaptureSelected
              )}
              onClick={() => setCaptureLeadIntegrationStep('Code')}
            >
              <div className={styles.iconAlignBox}>
                <div>
                  <ApiOutlined className={styles.leadIconStyle} />
                </div>
                <div className={styles.iconNone}>
                  <CheckCircleOutlined className={styles.checkIconStyle} />
                </div>
              </div>
              <div className={styles.leadTextChild}>
                <h1>Download Sample Code</h1>
                <h5>(Recommended)</h5>
              </div>
            </div>
            <div
              className={classNames(
                styles.leadBasisForm,
                captureLeadIntegrationStep === 'Documentation' &&
                  styles.leadCaptureSelected
              )}
              onClick={() => setCaptureLeadIntegrationStep('Documentation')}
            >
              <div className={styles.iconAlignBox}>
                <div>
                  <ProfileOutlined className={styles.leadIconStyle} />
                </div>
                <div className={styles.iconNone}>
                  <CheckCircleOutlined className={styles.checkIconStyle} />
                </div>
              </div>
              <div className={styles.leadTextChild}>
                <h1>Documentation</h1>{' '}
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              </div>
            </div>
            <div
              className={classNames(
                styles.leadBasisForm,
                styles.rightBox,
                captureLeadIntegrationStep === 'Zapier' &&
                  styles.leadCaptureSelected
              )}
              onClick={() => setCaptureLeadIntegrationStep('Zapier')}
            >
              <div className={styles.iconAlignBox}>
                <div>
                  <ProfileOutlined className={styles.leadIconStyle} />
                </div>
                <div className={styles.iconNone}>
                  <CheckCircleOutlined className={styles.checkIconStyle} />
                </div>
              </div>
              <div className={styles.leadTextChild}>
                <h1>Zapier</h1>{' '}
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeadIntegration
