/* eslint-disable */
import React from 'react'
import btn_enable from '../../assets/images/security/btn_enable.svg'
import btn_disabled from '../../assets/images/security/close.svg'
import styles from './Statuslabel.module.less'

export interface StatuslabelProps {
  label?: string
  disabled? : boolean
}

export function Statuslabel(props: StatuslabelProps) {
  const { label = 'Enabled', disabled = true } = props

  return (
    <div >
        <button className={disabled ? styles.enabledStatus : styles.disabledStatus}>
          <img src={disabled ? btn_enable : btn_disabled} alt="" />
          <span className={disabled ?  styles.imgtextspan : styles.imgtextspanDisable}>{disabled ? 'Enabled' : 'Disabled'}</span>
        </button>
    </div>
  )
}

export default Statuslabel