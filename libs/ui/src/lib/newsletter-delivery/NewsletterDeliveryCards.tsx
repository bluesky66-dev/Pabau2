import React, { FC } from 'react'
import Sentmail from '../../assets/images/sent-mail.svg'
import Mail from '../../assets/images/email.svg'
import Open from '../../assets/images/opened-email.svg'
import Click from '../../assets/images/click.svg'
import Bounced from '../../assets/images/bounced.svg'
import styles from './NewsletterDelivery.module.less'

const url = '/?path=/story/basics-newsletterdelivery--news-letter-delivery'

export interface NewsletterDeliveryProps {
  label1?: string
  value1: number
  label2?: string
  value2: number
  label3?: string
  value3: number
  label4?: string
  value4: number
  label5?: string
  value5: number
}

export const NewsletterDeliveryCards: FC<NewsletterDeliveryProps> = ({
  label1,
  value1,
  label2,
  value2,
  label3,
  value3,
  label4,
  value4,
  label5,
  value5,
}) => {
  return (
    <div className={styles.wrapper}>
      <a href={url}>
        <div className={styles.card}>
          <img src={Sentmail} alt="" />
          <h2>{value1.toLocaleString('en')}</h2>
          <p>{label1}</p>
        </div>
      </a>

      <a href={url}>
        <div className={styles.card}>
          <img src={Mail} alt="" />
          <h2>{value2.toLocaleString('en')}</h2>
          <p>{label2}</p>
        </div>
      </a>

      <a href={url}>
        <div className={styles.card}>
          <img src={Open} alt="" />
          <h2>{value3.toLocaleString('en')}</h2>
          <p>{label3}</p>
        </div>
      </a>

      <a href={url}>
        <div className={styles.card}>
          <img src={Click} alt="" />
          <h2>{value4.toLocaleString('en')}</h2>
          <p>{label4}</p>
        </div>
      </a>

      <a href={url}>
        <div className={styles.card}>
          <img src={Bounced} alt="" />
          <h2>{value5.toLocaleString('en')}</h2>
          <p>{label5}</p>
        </div>
      </a>
    </div>
  )
}

export default NewsletterDeliveryCards
