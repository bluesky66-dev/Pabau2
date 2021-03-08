import React from 'react'
import styles from './lead-setting.module.less'
import classNames from 'classnames'
import {
  ApiOutlined,
  CheckCircleFilled,
  ProfileOutlined,
} from '@ant-design/icons'
interface LeadSettingsInterface {
  activeStepper: string
  captureLeadStepChange: (step: string) => void
}

export const LeadSettings: React.FC<LeadSettingsInterface> = ({
  activeStepper,
  captureLeadStepChange,
}) => {
  // const [captureLeadStep, setCaptureLeadStep] = useState('API')

  const updateCaptureLeadStep = (type) => {
    // setCaptureLeadStep(type)
    captureLeadStepChange(type)
  }
  return (
    <div className={styles.leadSettingContent}>
      <div className={styles.headingStyle}>
        <h1>Lead settings</h1>
        <p>
          This section allows you to configurate how it is your leads feed into
          Pabau <br />
          automatically, either via a website, Facebook or any other platform
          you may use.
        </p>
        <h6>Choose how you would like to capture leads:</h6>

        <div className={styles.leadFlex}>
          <div
            className={classNames(
              styles.leadBasisForm,
              activeStepper === 'API' && styles.leadCaptureSelected
            )}
            onClick={() => updateCaptureLeadStep('API')}
          >
            <div className={styles.iconAlignBox}>
              <div>
                <ApiOutlined className={styles.leadIconStyle} />
              </div>
              <div className={styles.iconNone}>
                <CheckCircleFilled className={styles.checkIconStyle} />
              </div>
            </div>
            <div className={styles.leadTextChild}>
              <h1>API(recommended)</h1>
              <h5>Via Pabaus lead API (requires web developer)</h5>
            </div>
          </div>
          <div
            className={classNames(
              styles.leadBasisForm,
              styles.rightBox,
              activeStepper === 'Form' && styles.leadCaptureSelected
            )}
            onClick={() => updateCaptureLeadStep('Form')}
          >
            <div className={styles.iconAlignBox}>
              <div>
                <ProfileOutlined className={styles.leadIconStyle} />
              </div>
              <div className={styles.iconNone}>
                <CheckCircleFilled className={styles.checkIconStyle} />
              </div>
            </div>
            <div className={styles.leadTextChild}>
              <h1>Form</h1> <h5>Through Pabaus lead form builder</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadSettings
