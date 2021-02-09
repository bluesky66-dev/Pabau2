import React, { FC } from 'react'
import styles from './MedicalForm.module.less'

interface P {
  errMsg?: string
}

const MedicalFormError: FC<P> = ({ errMsg }) => {
  return <div className={styles.errMsg}>{errMsg}</div>
}

export default MedicalFormError
