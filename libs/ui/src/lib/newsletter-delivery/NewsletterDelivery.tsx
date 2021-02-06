import React, { FC } from 'react'
import styles from './NewsletterDelivery.module.less'

const url = '/?path=/story/basics-newsletterdelivery--news-letter-delivery'

export interface cardData {
  title: string
  value: number
  key: number
  img: string
}

export interface NewsletterDeliveryProps {
  data?: cardData[]
}

export const NewsletterDelivery: FC<NewsletterDeliveryProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data?.map((dat) => (
        <a href={url} key={dat.key}>
          <div className={styles.card}>
            <img src={dat.img} alt="" />
            <h2>{dat.value.toLocaleString('en')}</h2>
            <p>{dat.title}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default NewsletterDelivery
