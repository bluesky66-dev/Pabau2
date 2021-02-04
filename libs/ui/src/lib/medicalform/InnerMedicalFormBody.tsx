import React, { FC } from 'react'
import styles from './InnerMedicalForm.module.less'

const InnerMedicalFormBody: FC = (props) => {
  return (
    <div className={styles.formItem}>
      <div className={styles.formCommon}>{props.children}</div>
    </div>
  )
}

export default InnerMedicalFormBody
