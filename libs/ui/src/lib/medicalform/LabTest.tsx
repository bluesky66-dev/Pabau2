import { Select } from 'antd'
import React, { FC } from 'react'
import labTestIcon from '../../assets/images/medicalform_labtest.svg'
import styles from './MedicalForm.module.less'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormTitle from './MedicalFormTitle'

const { Option } = Select

const LabTest: FC = () => {
  const optionLabels = [
    { key: '1', label: 'Accent Prime' },
    { key: '2', label: 'All-inclusive' },
    { key: '3', label: 'Botox' },
    { key: '4', label: 'Category (V)' },
    { key: '5', label: 'Class maggie' },
    { key: '6', label: 'CO2 Laser' },
    { key: '7', label: 'Consultation' },
    { key: '8', label: 'Cooltech' },
  ]

  return (
    <div className={styles.mainBody}>
      <div className={styles.formItem}>
        <div className={`${styles.formCaption} ${styles.formCommon}`}>
          <span>component settings</span>
        </div>
      </div>
      <div className={styles.formItem}>
        <MedicalFormTitle
          iconUrl={labTestIcon}
          bgcolor="#FAAD14"
          title="Lab tests"
          desc="Description"
        />
      </div>
      <div className={styles.formItem}>
        <div className={`${styles.formQuestion} ${styles.formCommon}`}>
          <p style={{ marginTop: '5px' }}>Question</p>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
          >
            {optionLabels.map(({ key, label }) => (
              <Option key={key} value={key}>
                {label}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className={styles.formItem} style={{ borderBottom: 'none' }}>
        <MedicalFormBottom needLeft={true} />
      </div>
    </div>
  )
}

export default LabTest
