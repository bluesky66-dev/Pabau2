import React, { FC, ReactElement } from 'react'
import { Rate } from 'antd'
import styles from './ReviewListing.module.less'
/* eslint-disable-next-line */
export interface ReviewListingProps {
  description?: string
  review?: number
  image?: ReactElement
  totalReview?: number
  totalReviewUser?: number
  weScoreLabel?: string
  fromLabel?: string
  reviewLabel?: string
}
export const ReviewListing: FC<ReviewListingProps> = ({
  description,
  review,
  image,
  totalReview,
  totalReviewUser,
  weScoreLabel,
  fromLabel,
  reviewLabel,
}) => {
  return (
    <div className={styles.reviewListingCard}>
      <div className={styles.reviewImg}>{image}</div>
      <div className={styles.reviewContent}>
        <p>{description}</p>
      </div>
      <div className={styles.reviewResult}>
        <p>
          {weScoreLabel}
          <strong>
            {review}/{totalReview}
          </strong>
          {fromLabel}
          <strong>{totalReviewUser}</strong>
          {reviewLabel}
        </p>
        <Rate style={{ color: '#54B2D3' }} allowHalf value={review} />
      </div>
    </div>
  )
}

export default ReviewListing
