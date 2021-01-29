import React, { FC } from 'react'

import btn_enable from '../../assets/images/security/btn_enable.svg'
import btn_disabled from '../../assets/images/security/close.svg'
import styles from './Badge.module.less'

interface P {
  label?: string
  disabled?: boolean
}

export const Badge: FC<P> = ({ label, disabled }) => {
  return (
    <div>
      <button
        className={disabled ? styles.enabledStatus : styles.disabledStatus}
      >
        <img src={disabled ? btn_enable : btn_disabled} alt="" />
        <span
          className={disabled ? styles.imgtextspan : styles.imgtextspanDisable}
        >
          {label}
        </span>
      </button>
    </div>
  )
}

export default Badge

export const PabauPlus: FC<P> = ({ label, disabled }) => {
  return <div className={styles.pabauPlusBtn}>{label}</div>
}
