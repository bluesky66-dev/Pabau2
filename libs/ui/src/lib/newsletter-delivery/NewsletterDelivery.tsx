/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
// import { Card } from 'antd'
import Sentmail from '../../assets/images/sent-mail.svg'
import styles from './NewsletterDelivery.module.less'

/* eslint-disable-next-line */
export interface NewsletterDeliveryProps {}

export function NewsletterDelivery() {
  return (
    <div className={styles.card}>
      <img src={Sentmail} alt="" />
      <h2>3,244</h2>
      <p>SENT</p>
    </div>
  )
}

export default NewsletterDelivery
