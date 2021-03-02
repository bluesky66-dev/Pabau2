import React, { FC } from 'react'
import styles from './NewsletterDelivery.module.less'

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
      {data?.map((dat, index) => (
        <div className={styles.tile} key={dat.key}>
          <input
            type="checkbox"
            name={dat.title}
            id={dat.title}
            {...(index + 1)}
          />
          <label htmlFor={dat.title}>
            <p>{dat.title}</p>
            <img src={dat.img} alt="" />
            <h2>{dat.value.toLocaleString('en')}</h2>
          </label>
        </div>
      ))}
    </div>
  )
}

export default NewsletterDelivery
