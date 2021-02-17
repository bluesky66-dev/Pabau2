import React, { FC, useEffect, useState } from 'react'
import { Row, Col, Divider } from 'antd'
import {
  Button,
  SimpleDropdown,
  RadioGroup,
  Notification,
  NotificationType,
} from '@pabau/ui'
import styles from './System.module.less'

interface MedicalConfig {
  tretmentCycles: string
  secureMedicalForms: boolean
  disablePrescriptions: boolean
  performSurgical: boolean
  medicalApprovals: boolean
  historyData: boolean
}

export interface SystemProps {
  config?: MedicalConfig
  onSave?(val: MedicalConfig): void
}

const defaultConfig: MedicalConfig = {
  tretmentCycles: 'Always display',
  secureMedicalForms: false,
  disablePrescriptions: false,
  performSurgical: true,
  medicalApprovals: false,
  historyData: true,
}

export const System: FC<SystemProps> = ({ config, onSave }) => {
  const [configs, setConfigs] = useState<MedicalConfig>(defaultConfig)
  const handleSaveChanges = () => {
    Notification(NotificationType.success, 'Successfully saved changes')
    onSave?.(configs)
  }
  const handleItemChange = (change) => {
    const configChange: MedicalConfig = { ...configs }
    configChange[change.key] = change.value
    setConfigs(configChange)
  }

  useEffect(() => {
    setConfigs(config || defaultConfig)
  }, [config])

  return (
    <div className={styles.systemContainer}>
      <div className={styles.systemSubContainer}>
        <div className={styles.systemHeaderContainer}>
          <div>
            <p className={styles.tabTitle}>System</p>
            <p className={styles.tabSubTitle}>
              Control core functionality from here with Pabau
            </p>
          </div>
          <Button type="primary" onClick={() => handleSaveChanges()}>
            Save Changes
          </Button>
        </div>
      </div>
      <Divider />
      <div className={styles.systemSubContainer}>
        <Row gutter={[28, 28]}>
          <Col className="gutter-row" xs={24} sm={12}>
            <SimpleDropdown
              label="Tretment Cycles"
              tooltip="Tretment Cycles"
              value={configs.tretmentCycles}
              dropdownItems={['Always display']}
              onSelected={(val) =>
                handleItemChange({ key: 'tretmentCycles', value: val })
              }
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <RadioGroup
              label="Secure Medical Forms"
              tooltip="Secure Medical Forms"
              value={configs.secureMedicalForms === true ? 'Yes' : 'No'}
              radioItems={['Yes', 'No']}
              onChange={(val) =>
                handleItemChange({
                  key: 'secureMedicalForms',
                  value: val === 'Yes',
                })
              }
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <RadioGroup
              label="Disable Prescriptions"
              tooltip="Disable Prescriptions"
              value={configs.disablePrescriptions === true ? 'Yes' : 'No'}
              radioItems={['Yes', 'No']}
              onChange={(val) =>
                handleItemChange({
                  key: 'disablePrescriptions',
                  value: val === 'Yes',
                })
              }
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <RadioGroup
              label="Perform Surgical"
              tooltip="Perform Surgical"
              value={configs.performSurgical === true ? 'Yes' : 'No'}
              radioItems={['Yes', 'No']}
              onChange={(val) =>
                handleItemChange({
                  key: 'performSurgical',
                  value: val === 'Yes',
                })
              }
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <RadioGroup
              label="Medical Approvals"
              tooltip="Medical Approvals"
              value={configs.medicalApprovals === true ? 'Yes' : 'No'}
              radioItems={['Yes', 'No']}
              onChange={(val) =>
                handleItemChange({
                  key: 'medicalApprovals',
                  value: val === 'Yes',
                })
              }
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <RadioGroup
              label="History Data"
              tooltip="History Data"
              value={configs.historyData === true ? 'Yes' : 'No'}
              radioItems={['Yes', 'No']}
              onChange={(val) =>
                handleItemChange({ key: 'historyData', value: val === 'Yes' })
              }
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default System
