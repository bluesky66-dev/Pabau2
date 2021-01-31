import { Select } from 'antd'
import React, { FC, useState } from 'react'
import drugsIcon from '../../assets/images/medicalform_drugs.svg'
import styles from './MedicalForm.module.less'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormTitle from './MedicalFormTitle'

const { Option } = Select
interface P {
  hideSideBar?: () => void
}

const Drugs: FC<P> = ({ hideSideBar }) => {
  const [addedOption, setAddedOption] = useState('')
  const saveFunc = () => {
    if (hideSideBar && addedOption != '') {
      hideSideBar()
    }
  }
  const optionDrugs = [
    { key: '1', label: 'Paracem 500mg - sdf' },
    { key: '2', label: 'Botox - 300' },
    { key: '3', label: 'Paracem 500mg - sdf' },
    { key: '4', label: 'Botox - 300' },
    { key: '5', label: 'Aspirin - 2' },
    { key: '6', label: 'Test1 - 10ml' },
  ]
  const handleChange = (value) => {
    setAddedOption(value)
  }
  return (
    <div className={styles.mainBody}>
      <div className={styles.formItem}>
        <div className={`${styles.formCaption} ${styles.formCommon}`}>
          <span>component settings</span>
        </div>
      </div>
      <div className={styles.formItem}>
        <MedicalFormTitle
          iconUrl={drugsIcon}
          bgcolor="#FAAD14"
          title="Drugs"
          desc="Description"
        />
      </div>
      <div className={styles.formItem}>
        <div className={`${styles.formQuestion} ${styles.formCommon}`}>
          <p style={{ marginTop: '5px' }}>Choose drugs</p>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {optionDrugs.map(({ key, label }) => (
              <Option key={key} value={key}>
                {label}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className={styles.formItem} style={{ borderBottom: 'none' }}>
        <MedicalFormBottom saveFunc={saveFunc} needLeft={true} />
      </div>
    </div>
  )
}

export default Drugs
