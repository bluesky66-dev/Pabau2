import { Checkbox } from 'antd'
import React, { FC, useState } from 'react'
import multipleChoiceIcon from '../../assets/images/medicalform_multiplechoice.svg'
import styles from './InnerMedicalForm.module.less'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerMultiChoice: FC<P> = ({ required }) => {
  const [clicked, setClicked] = useState(false)

  const checkboxStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    color: '#9292a3',
    marginLeft: '0px',
  }
  const multiChoiceOptions = [
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
            iconUrl={multipleChoiceIcon}
            bgcolor="#65CD98"
            title="Multiple choices"
          />
        </div>
        <div className={styles.formItem}>
          <div className={styles.formCommon}>
            <p>Some question</p>
          </div>
          <div className={`${styles.formCommon} ${styles.first}`}>
            {multiChoiceOptions.map((item, index) => (
              <Checkbox key={index} value={item.id} style={checkboxStyle}>
                {item.label}
              </Checkbox>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnerMultiChoice
