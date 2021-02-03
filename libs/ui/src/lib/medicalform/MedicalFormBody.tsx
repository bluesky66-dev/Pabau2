import React, { FC } from 'react'
import styles from './MedicalForm.module.less'

const MedicalFormBody: FC = (props) => {
  return (
    <div className={styles.formItem}>
      <div className={`${styles.formQuestion} ${styles.formCommon}`}>
        {props.children}
      </div>
    </div>
  )
}

export default MedicalFormBody
