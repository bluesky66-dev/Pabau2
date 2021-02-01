import React, { FC, useState } from 'react'
import longAnswerIcon from '../../assets/images/medicalform_longanswer.svg'
import styles from './InnerMedicalForm.module.less'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerLongAnswer: FC<P> = ({ required }) => {
  const [clicked, setClicked] = useState(false)
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
            iconUrl={longAnswerIcon}
            bgcolor="#6383F1"
            title="Long answer"
          />
        </div>
        <div className={styles.formItem}>
          <div className={styles.formCommon}>
            <p>Welcome to Day Spa Wellington</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnerLongAnswer
