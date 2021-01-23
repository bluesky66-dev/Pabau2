/* eslint-disable */
import React from 'react'

import btn_enable from '../../assets/images/security/btn_enable.svg'
import btn_disabled from '../../assets/images/security/close.svg'
import styles from './Badge.module.less'
import { Button } from '@pabau/ui'

export interface P {
  label?: string
  disabled? : boolean
}

export function Badge(props: P) {
  const { label = 'Enabled', disabled = true } = props

  return (
    <div >
        <button className={disabled ? styles.enabledStatus : styles.disabledStatus}>
          <img src={disabled ? btn_enable : btn_disabled} alt="" />
          <span className={disabled ?  styles.imgtextspan : styles.imgtextspanDisable}>{label}</span>
        </button>
    </div>
  )
}

export default Badge

export function PabauPlus(props: P) {
  const { label = 'Pabau Label' } = props

  return (
    <div >
        <Button type='primary' className={styles.pabauPlusBtn}>{label}</Button>
    </div>
  )
}
