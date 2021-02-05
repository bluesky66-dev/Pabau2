import React, { FC } from 'react'
import Sentmail from '../../assets/images/sent-mail.svg'
import styles from './NewsletterDelivery.module.less'

export interface NewsletterSentProps {
  label?: string
  value: number
}

export const NewsletterSent: FC<NewsletterSentProps> = ({ label, value }) => {
  return (
    <div className={styles.card}>
      <img src={Sentmail} alt="" />
      <h2>{value.toLocaleString('en')}</h2>
      <p>{label}</p>
    </div>
  )
}

export default NewsletterSent
