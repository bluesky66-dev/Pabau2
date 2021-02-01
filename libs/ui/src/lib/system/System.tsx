import React, { FC, useEffect, useState } from 'react'
import { Row, Col, Divider } from 'antd'
import { Button, SimpleDropdown, RadioGroup } from '@pabau/ui'
import styles from './System.module.less'

interface MedicalConfig {
  tretmentCycles: string
  secureMedicalForms: 'Yes' | 'No'
  disablePrescriptions: 'Yes' | 'No'
  performSurgical: 'Yes' | 'No'
  medicalApprovals: 'Yes' | 'No'
  historyData: 'Yes' | 'No'
}

export interface SystemProps {
  config?: MedicalConfig
  onSave?(val: MedicalConfig): void
}

const defaultConfig: MedicalConfig = {
  tretmentCycles: 'Always display',
  secureMedicalForms: 'No',
  disablePrescriptions: 'No',
  performSurgical: 'Yes',
  medicalApprovals: 'No',
  historyData: 'Yes',
}

export const System: FC<SystemProps> = ({ config, onSave }) => {
  const [_config, setConfig] = useState<MedicalConfig>(defaultConfig)
  const handleSaveChanges = () => {
    onSave && onSave(_config)
  }
  const handleItemChange = (change) => {
    console.log(change)
    const configChange: MedicalConfig = { ..._config }
    configChange[change.key] = change.value
    setConfig(configChange)
  }

  useEffect(() => {
    setConfig(config || defaultConfig)
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
              value={_config.tretmentCycles}
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
              value={_config.secureMedicalForms}
              radioItems={['Yes', 'No']}
              onChange={(val) =>
                handleItemChange({ key: 'secureMedicalForms', value: val })
              }
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <RadioGroup
              label="Disable Prescriptions"
              tooltip="Disable Prescriptions"
              value={_config.disablePrescriptions}
              radioItems={['Yes', 'No']}
              onChange={(val) =>
                handleItemChange({ key: 'disablePrescriptions', value: val })
              }
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <RadioGroup
              label="Perform Surgical"
              tooltip="Perform Surgical"
              value={_config.performSurgical}
              radioItems={['Yes', 'No']}
              onChange={(val) =>
                handleItemChange({ key: 'performSurgical', value: val })
              }
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <RadioGroup
              label="Medical Approvals"
              tooltip="Medical Approvals"
              value={_config.medicalApprovals}
              radioItems={['Yes', 'No']}
              onChange={(val) =>
                handleItemChange({ key: 'medicalApprovals', value: val })
              }
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <RadioGroup
              label="History Data"
              tooltip="History Data"
              value={_config.historyData}
              radioItems={['Yes', 'No']}
              onChange={(val) =>
                handleItemChange({ key: 'historyData', value: val })
              }
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default System
