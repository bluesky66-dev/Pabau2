import { Radio } from 'antd'
import React, { FC, useState } from 'react'
import dropdownIcon from '../../assets/images/medicalform_dropdown.svg'
import styles from './InnerMedicalForm.module.less'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerDropdown: FC<P> = ({ required }) => {
  const [clicked, setClicked] = useState(false)
  const [optionVal, setOptionVal] = useState(1)
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    color: '#9292a3',
  }
  const dropdownOptions = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    { id: 4, label: 'Option 4' },
  ]
  return (
    <div
      className={
        clicked ? `${styles.mainBorder} ${styles.activate}` : styles.mainBorder
      }
    >
      <div
        className={
          clicked ? `${styles.mainBody} ${styles.activate}` : styles.mainBody
        }
        onClick={(e) => setClicked((e) => !e)}
      >
        {required && <InnerMedicalFormRequired />}
        <InnerMedicalFormEditIcon />
        <div className={styles.formItem} style={{ borderTop: 'none' }}>
          <InnerMedicalFormTitle
            iconUrl={dropdownIcon}
            bgcolor="#65CD98"
            title="Dropdown"
          />
        </div>
        <div className={styles.formItem}>
          <div className={styles.formCommon}>
            <p>Some question</p>
          </div>
          <div className={`${styles.formCommon} ${styles.first}`}>
            <Radio.Group
              size="small"
              value={optionVal}
              onChange={(e) => setOptionVal(e.target.value)}
            >
              {dropdownOptions.map((item, index) => (
                <Radio key={index} value={item.id} style={radioStyle}>
                  {item.label}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnerDropdown
