/* eslint-disable */
import React from 'react'
import styles from './Security.module.less'
import { Row, Col, Progress, Table } from 'antd'
import { Statuslabel } from '../../lib/statuslabel/Statuslabel'

import icon_force2fa from '../../assets/images/security/force2fa.svg'
import icon_authdevice from '../../assets/images/security/authdevice.svg'
import icon_pwdpolicy from '../../assets/images/security/pwdpolicy.svg'
import icon_email from '../../assets/images/security/encrytedemail.svg'
import icon_encryption from '../../assets/images/security/encryptedencryption.svg'

import btn_enable from '../../assets/images/security/btn_enable.svg'
/* eslint-disable-next-line */
export interface SecurityProps {}

export function SecurityTools(props: SecurityProps) {
  return (
    <div className={styles.scoreBody}>
      <p className={styles.phead}>Security Tools</p>
      <div className={styles.container}>
        <div className={styles.colStatusLabel}><img className={styles.iconSecuritytools} src={icon_force2fa} alt="" /></div>
        <div className={styles.containercol}>
          <span className={styles.p1}>Force 2FA</span>
          <span className={styles.p2}>Strat a video call from your conversations</span>
        </div>
        <div className={styles.statelabel}>
          <Statuslabel/>
        </div> 
      </div>
      <hr className={styles.securityToolsline}/>

      <div className={styles.container}>
        <div className={styles.colStatusLabel}><img className={styles.iconSecuritytools} src={icon_authdevice} alt="" /></div>
        <div className={styles.containercol}>
          <span className={styles.p1}>Authorized Devices</span>
          <span className={styles.p2}>Create details and send conversations to Pipedrive</span>
        </div>
        <div className={styles.statelabel}>
          <Statuslabel/>
        </div> 
      </div>
      <hr className={styles.securityToolsline}/>


      <div className={styles.container}>
        <div className={styles.colStatusLabel}><img className={styles.iconSecuritytools} src={icon_pwdpolicy} alt="" /></div>
        <div className={styles.containercol}>
          <span className={styles.p1}>Password Policy</span>
          <span className={styles.p2}>Create details and send conversations to Pipedrive</span>
        </div>
        <div className={styles.statelabel}>
          <Statuslabel/>
        </div> 
      </div>
      
      <hr className={styles.securityToolsline}/>

      <div className={styles.container}>
        <div className={styles.colStatusLabel}><img className={styles.iconSecuritytools} src={icon_pwdpolicy} alt="" /></div>
        <div className={styles.containercol}>
          <span className={styles.p1}>Password Policy</span>
          <span className={styles.p2}>Create details and send conversations to Pipedrive</span>
        </div>
        <div className={styles.statelabel}>
          <Statuslabel/>
        </div> 
      </div>

      <hr className={styles.securityToolsline}/>
      <div className={styles.container}>
        <div className={styles.colStatusLabel}><img className={styles.iconSecuritytools} src={icon_pwdpolicy} alt="" /></div>
        <div className={styles.containercol}>
          <span className={styles.p1}>Password Policy</span>
          <span className={styles.p2}>Create details and send conversations to Pipedrive</span>
        </div>
        <div className={styles.statelabel}>
          <Statuslabel disabled={false} />
        </div> 
      </div>
    </div>
  )
}

export default SecurityTools
