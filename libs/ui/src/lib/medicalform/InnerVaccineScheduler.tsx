import React, { FC, useState } from 'react'
import vaccineSchedulerIcon from '../../assets/images/medicalform_vaccinescheduler.svg'
import styles from './InnerMedicalForm.module.less'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerVaccineScheduler: FC<P> = ({ required }) => {
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
            iconUrl={vaccineSchedulerIcon}
            bgcolor="#FAAD14"
            title="Vaccine scheduler"
          />
        </div>
      </div>
    </div>
  )
}

export default InnerVaccineScheduler
