/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Sentmail from '../../assets/images/sent-mail.svg'
import styles from './NewsletterDelivery.module.less'

function NewsletterSent() {
  return (
    <div className={styles.card}>
      <img src={Sentmail} alt="" />
      <h2>3,244</h2>
      <p>SENT</p>
    </div>
  )
}

export default NewsletterSent
