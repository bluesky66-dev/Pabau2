import React, { FC } from 'react'
import { Rate as AntRate } from 'antd'
import styles from './ReadReview.module.less'
import { Avatar } from '@pabau/ui'

/* eslint-disable-next-line */
export interface ReadReviewProps {
  title?: string
  bodyContent?: string
  updatedAt?: string
  avatarSrc?: string
  name?: string
  defaultRating?: number
}

export const ReadReview: FC<ReadReviewProps> = ({
  title,
  bodyContent,
  updatedAt,
  avatarSrc,
  name,
  defaultRating,
}) => {
  return (
    <div className={styles.readReviewCard}>
      <div className={styles.readReviewBody}>
        <h6>{title}</h6>
        <div className={styles.readReviewContent}>
          <p>{bodyContent}</p>
        </div>
      </div>

      <div className={styles.readReviewFooter}>
        <div className={styles.reviewUser}>
          <Avatar size={44} src={avatarSrc} />
          <div className={styles.reviewName}>
            <h5>{name}</h5>
            <AntRate
              className={styles.reviewRate}
              allowHalf
              defaultValue={defaultRating}
            />
          </div>
        </div>
        <div className={styles.reviewDate}>
          <span>{updatedAt}</span>
        </div>
      </div>
    </div>
  )
}

export default ReadReview
