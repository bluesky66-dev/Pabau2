import { Radio } from 'antd'
import React, { FC, useState } from 'react'
import singleChoiceIcon from '../../assets/images/medicalform_singlechoice.svg'
import styles from './InnerMedicalForm.module.less'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

const InnerSingleChoice: FC = () => {
  const [clicked, setClicked] = useState(false)
  const [optionVal, setOptionVal] = useState(1)
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    color: '#9292a3',
  }
  const singleChoiceOptions = [
    { id: 1, label: 'Dry' },
    { id: 2, label: 'Normal' },
    { id: 3, label: 'Oily' },
    { id: 4, label: 'Combination' },
  ]
  return (
    <div
      className={
        clicked ? `${styles.mainBody} ${styles.activate}` : styles.mainBody
      }
      onClick={(e) => setClicked((e) => !e)}
    >
      <InnerMedicalFormEditIcon />
      <div className={styles.formItem}>
        <InnerMedicalFormTitle
          iconUrl={singleChoiceIcon}
          bgcolor="#65CD98"
          title="Single choice"
        />
      </div>
      <div className={styles.formItem}>
        <div className={styles.formCommon}>
          <p>Do you have concerns about any of following?</p>
        </div>
        <div className={`${styles.formCommon} ${styles.first}`}>
          <Radio.Group
            size="small"
            value={optionVal}
            onChange={(e) => setOptionVal(e.target.value)}
          >
            {singleChoiceOptions.map((item, index) => (
              <Radio key={index} value={item.id} style={radioStyle}>
                {item.label}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>
    </div>
  )
}

export default InnerSingleChoice
