import React, { useState } from 'react'
import styles from './lead-setting.module.less'
import classNames from 'classnames'
import {
  ApiOutlined,
  CheckCircleOutlined,
  ProfileOutlined,
} from '@ant-design/icons'
import { Radio } from 'antd'
import {
  BasicModal as Modal,
  ButtonTypes,
  Notification,
  NotificationType,
} from '@pabau/ui'
import SendLeadDevloperModal from './lead-forms/SendLeadDevloperModal'

export const LeadIntegration: React.FC = () => {
  const [captureLeadIntegrationStep, setCaptureLeadIntegrationStep] = useState(
    'Documentation'
  )

  const [openPabauLeadModal, setPabauLeadModal] = useState(false)
  const [typeOfIntegration, setTypeOfIntegration] = useState('Developer')
  const [sendToDeveloperModal, setSendToDeveloperModal] = useState(false)

  const onSendToDeveloper = () => {
    Notification(NotificationType.success, `Success! Sent to developer`)
    setSendToDeveloperModal((e) => !e)
    setPabauLeadModal((e) => !e)
  }

  return (
    <>
      <div className={styles.tabCenter}>
        <Radio.Group
          className={styles.tabDesign}
          value={typeOfIntegration}
          onChange={(e) => {
            setTypeOfIntegration(e.target.value)
            if (e.target.value === 'User') {
              setPabauLeadModal((e) => !e)
            }
          }}
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
      {(captureLeadIntegrationStep === 'Documentation' ||
        captureLeadIntegrationStep === 'Zapier') && (
        <div className={styles.apiContentCenter}>
          <div className={styles.apiContentText}>
            <h1>Your API key</h1>
            <p>This should be passed with all API requests.</p>
            <h6>Your API Key</h6>
            <div className={styles.apiKeyBox}>
              <p>028274219001jsi910030103</p>
            </div>
            {captureLeadIntegrationStep === 'Documentation' && (
              <a href="/sample-code" download="LeadForm.html">
                Download Sample Code
              </a>
            )}
            {captureLeadIntegrationStep === 'Zapier' && (
              <a>Follow Zapier installation guide</a>
            )}
          </div>
        </div>
      )}

      <Modal
        modalWidth={682}
        centered={true}
        onOk={() => {
          setPabauLeadModal((e) => !e)
        }}
        closable={true}
        onCancel={() => setPabauLeadModal((e) => !e)}
        visible={openPabauLeadModal}
        title={'Pabau Leads'}
        newButtonText={'Close'}
        btnType={ButtonTypes.default}
        dangerButtonText={'Send to Developer'}
        onDelete={() => setSendToDeveloperModal((e) => !e)}
      >
        <p>
          This process is for advanced users and should be handed over to a web
          developer. Please reach out to your web team in order for them to
          follow this guide on how to implement Pabau Leads.
        </p>
      </Modal>

      <SendLeadDevloperModal
        openModal={sendToDeveloperModal}
        onSendToDeveloper={onSendToDeveloper}
        onClose={() => setSendToDeveloperModal((e) => !e)}
      />
    </>
  )
}

export default LeadIntegration
