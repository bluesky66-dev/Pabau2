import React, { FC } from 'react'
import dobIcon from '../../assets/images/medicalform_dob.svg'
import styles from './MedicalForm.module.less'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormTitle from './MedicalFormTitle'

interface P {
  handleSave?: () => void
  handleDelete?: () => void
}

const Dob: FC<P> = ({ handleSave, handleDelete }) => {
  const saveFunc = () => {
    handleSave?.()
  }

  const deleteFunc = () => {
    handleDelete?.()
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
          iconUrl={dobIcon}
          bgcolor="#20BAB1"
          title="DOB"
          desc="Description"
        />
      </div>
      <div className={styles.formItem} style={{ borderBottom: 'none' }}>
        <MedicalFormBottom
          saveFunc={saveFunc}
          deleteFunc={deleteFunc}
          needLeft={true}
        />
      </div>
    </div>
  )
}

export default Dob
